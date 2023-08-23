import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function MessageItem({ message, createdAt }: { message: string, createdAt: Date }) {
  return (
    <Card>
      <CardHeader className="p-2 pb-1 items-end text-xs font-mono">
        {new Date(createdAt).toLocaleTimeString()} - {new Date(createdAt).toLocaleDateString()}
      </CardHeader>
      <CardContent >
        <CardDescription className="text-sm">{message}</CardDescription>
      </CardContent>
    </Card>
  )
}