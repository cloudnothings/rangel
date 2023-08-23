import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import ChatboxContainer from "./chatbox-container";

export default function Chatbox() {
  return (
    <>
      <Card className="border-0 md:border z-10 w-full rounded-none sm:rounded-xl max-w-2xl">
        <CardHeader className="hidden sm:block">
          <CardTitle>Chatbox</CardTitle>
        </CardHeader>
        <CardContent className=" p-0 sm:p-6" >
          <ChatboxContainer />
        </CardContent>
      </Card>
    </>
  )
}