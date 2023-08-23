"use client"

import { useEffect, useState } from "react"
import { Textarea } from "../ui/textarea"
import { sendMessage } from "@/actions/sendMessage"

export function ChatInput() {
  const [message, setMessage] = useState("")
  useEffect(() => {
    // if key is enter, send message
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault()
        if (message.trim() === "") return
        sendMessage(message)
        setMessage("")
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [message])

  return (
    <form className="w-full h-[50px]" action={() => sendMessage(message)}>
      <Textarea className="max" value={message} onChange={(e) => setMessage(e.currentTarget.value)} />
    </form>
  )
}