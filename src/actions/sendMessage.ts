'use server'

import { soketi } from '@/server/soketi'
import { prisma } from '@/server/db'
const DEFAULT_CHANNEL = '1'

export async function sendMessage(message: string) {
  const now = new Date()
  await soketi.trigger(DEFAULT_CHANNEL, 'chat-event', {
    content: message,
    createdAt: now.toISOString(),
  })
  await prisma.message.create({
    data: {
      content: message,
      createdAt: now,
      channelId: DEFAULT_CHANNEL,
    },
  })
}
