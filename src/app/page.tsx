import ChatboxContainer from "@/components/chatbox/chatbox-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <CardHeader>
          <CardTitle>Chatbox</CardTitle>
        </CardHeader>
        <CardContent>
          <ChatboxContainer />
        </CardContent>
      </Card>
    </main>
  )
}
