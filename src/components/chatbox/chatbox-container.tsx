import { env } from "@/env";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { prisma } from "@/server/db";
import { ScrollArea } from "../ui/scroll-area";
import MessageList from "./message-list";
import { ChatInput } from "./chat-input";

export type PublicKeys = {
  key: string
  wsHost: string
  wsPort: number
  wssPort: number
}

async function getPublicKeys() {
  return {
    key: env.SOKETI_APP_KEY,
    wsHost: env.SOKETI_HOST,
    wsPort: parseInt(env.SOKETI_PORT),
    wssPort: parseInt(env.SOKETI_PORT),
  } as PublicKeys
}

const DEFAULT_CHANNEL_ID = "1"
async function getMessages(channelId: string) {
  const response = await prisma.message.findMany({
    where: { channelId },
    take: 100,
    orderBy: { createdAt: "desc" },
  })
  return response
}

export default async function ChatboxContainer() {
  const publicKeys = await getPublicKeys()
  const chats = await getMessages(DEFAULT_CHANNEL_ID)
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Send an anonymous message</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[490px]">
          <MessageList chats={chats} publicKeys={publicKeys} />
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <ChatInput />
      </CardFooter>
    </Card>
  )
}


