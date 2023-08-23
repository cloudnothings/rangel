"use client"

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const channels = [{ name: "General", id: "1" }, { name: "Music", id: "2" }]

export default function ChannelSelector() {
  const [chatChannel, setChatChannel] = useState(channels[0].id)
  return (
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
  )
}