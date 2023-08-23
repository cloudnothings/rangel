import { useEffect, useState } from 'react'
import PusherJS from 'pusher-js'
import type { Message } from '@prisma/client'
import { PublicKeys } from '@/components/chatbox/chatbox-keys'

export type ChatBoxMessage = Message

export default function useChat({
  key,
  wsHost,
  wsPort,
  wssPort,
  chatChannel,
}: PublicKeys & { chatChannel: string }) {
  const [chats, setChats] = useState<ChatBoxMessage[]>([])
  useEffect(() => {
    const pusher = new PusherJS(key, {
      wsHost: wsHost,
      wsPort,
      wssPort,
      cluster: 'mt1',
      forceTLS: true,
      enabledTransports: ['ws', 'wss'],
    })
    const channel = pusher.subscribe(chatChannel)
    console.log('channel', channel)
    channel.bind('chat-event', function (data: ChatBoxMessage) {
      setChats((prevState) => [...prevState, data])
    })
    return () => {
      pusher.unsubscribe(chatChannel)
    }
  }, [key, wsHost, wsPort, wssPort, chatChannel])
  return { chats }
}
