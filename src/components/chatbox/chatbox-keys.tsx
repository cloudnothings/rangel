import { env } from "@/env";
import Chatbox from "./chatbox";

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

export default async function ChatboxKeys() {
  const publicKeys = await getPublicKeys()
  return (
    <Chatbox keys={publicKeys} />
  )
}


