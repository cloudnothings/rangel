'use server'

import { soketi } from '@/server/soketi'

export async function sendMessage(channel: string, message: string) {
  const now = new Date()
  await soketi.trigger(channel, 'chat-event', {
    content: message,
    createdAt: now.toISOString(),
  })
}
