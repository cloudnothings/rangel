import { useEffect, useState } from 'react'
import PusherJS from 'pusher-js'
import type { Message } from '@prisma/client'
import { PublicKeys } from '@/components/chatbox/chatbox-container'

export type ChatBoxMessage = Message
const DEFAULT_CHANNEL = '1'
const DEFAULT_EVENT = 'chat-event'
export default function useChat(publicKeys: PublicKeys) {
  const [chats, setChats] = useState<ChatBoxMessage[]>([])
  useEffect(() => {
    const pusher = new PusherJS(publicKeys.key, {
      wsHost: publicKeys.wsHost,
      wsPort: publicKeys.wsPort,
      wssPort: publicKeys.wssPort,
      cluster: 'mt1',
      forceTLS: true,
      enabledTransports: ['ws', 'wss'],
    })
    const channel = pusher.subscribe(DEFAULT_CHANNEL)
    channel.bind(DEFAULT_EVENT, function (data: ChatBoxMessage) {
      setChats((prevState) => [data, ...prevState])
    })
    return () => {
      pusher.unsubscribe(DEFAULT_CHANNEL)
    }
  }, [publicKeys])
  return { chats }
}
