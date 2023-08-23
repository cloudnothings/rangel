'use server'

import { soketi } from '@/server/soketi'
import { prisma } from '@/server/db'
import { profanity } from '@2toad/profanity'
const DEFAULT_CHANNEL = '1'
const DEFAULT_EVENT = 'chat-event'

export async function sendMessage(message: string) {
  if (!message) return
  if (message.trim().length === 0) return
  message = profanity.censor(message).trim()
  const now = new Date()
  await soketi.trigger(DEFAULT_CHANNEL, DEFAULT_EVENT, {
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
