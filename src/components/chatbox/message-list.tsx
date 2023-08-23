"use client"

import { Message } from "@prisma/client";
import MessageItem from "./message-item";
import { PublicKeys } from "./chatbox-container";
import useChat from "@/hooks/useChat";

export default function MessageList({ chats, publicKeys }: { chats: Message[], publicKeys: PublicKeys }) {
  const { chats: newChats } = useChat(publicKeys)
  chats = [...newChats, ...chats]
  return (
    <div className="flex flex-col gap-2 max-w-[95vw] ">
      {chats.map((chat, index) => (
        <MessageItem key={index} message={chat.content} createdAt={chat.createdAt} />
      ))}
    </div>
  )
}