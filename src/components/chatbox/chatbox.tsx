import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import ChatboxContainer from "./chatbox-container";

export default function Chatbox() {
  return (
    <>
      <Card className="z-10 max-w-2xl">
        <CardHeader>
          <CardTitle>Chatbox</CardTitle>
        </CardHeader>
        <CardContent>
          <ChatboxContainer />
        </CardContent>
      </Card>
    </>
  )
}