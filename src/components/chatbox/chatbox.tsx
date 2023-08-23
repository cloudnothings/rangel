"use client"

import useChat from "@/hooks/useChat"
import { PublicKeys } from "./chatbox-keys"
import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { ChatInput } from "./chat-input"

const channels = [{ name: "General", id: "1" }, { name: "Music", id: "2" }]

export default function Chatbox({ keys }: { keys: PublicKeys }) {
  const [chatChannel, setChatChannel] = useState(channels[0].id)
  const { chats } = useChat({ ...keys, chatChannel })

  console.log(chats)
  return (
    <Card className="w-[420px]">
      <CardHeader>
        <Select onValueChange={(e) => setChatChannel(e)} defaultValue={chatChannel}>
          <SelectTrigger>
            <SelectValue placeholder={channels[0].name} />
          </SelectTrigger>
          <SelectContent>
            {channels.map((channel, index) => (
              <SelectItem key={index} value={channel.id}>
                {channel.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          {chats.map((chat, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <div>{new Date(chat.createdAt).toLocaleTimeString()} - {new Date(chat.createdAt).toLocaleDateString()}</div>
                  <div>{chat.content}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <ChatInput channel={chatChannel} />
      </CardFooter>
    </Card>
  )
}