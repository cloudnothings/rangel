"use client"

import { useEffect, useState } from "react"
import { Textarea } from "../ui/textarea"
import { sendMessage } from "@/actions/sendMessage"

export function ChatInput({ channel }: { channel: string }) {
  const [message, setMessage] = useState("")

  useEffect(() => {
    setMessage("")
  }, [channel])

  useEffect(() => {
    // if key is enter, send message
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault()
        sendMessage(channel, message)
        setMessage("")
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [channel, message])

  return (
    <form action={() => sendMessage(channel, message)}>
      <Textarea className="w-full" value={message} onChange={(e) => setMessage(e.currentTarget.value)}
      />
    </form>
  )
}