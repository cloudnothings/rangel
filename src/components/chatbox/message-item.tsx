"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function MessageItem({ message, createdAt }: { message: string, createdAt: string | Date }) {
  return (
    <Card>
      <CardHeader className="p-2 pb-1 items-end text-xs font-mono">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <CardTitle className="text-xs font-bold">
                {humanizeTimeDifference(createdAt)}
              </CardTitle>
            </TooltipTrigger>
            <TooltipContent>
              <p>{new Date(createdAt).toLocaleTimeString()} - {new Date(createdAt).toLocaleDateString()}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent >
        <CardDescription className="text-sm">{message}</CardDescription>
      </CardContent>
    </Card>
  )
}
function humanizeTimeDifference(createdAt: string | Date): string {
  const now = new Date().getTime(); // in milliseconds
  const createdDate = new Date(createdAt).getTime(); // in milliseconds
  const differenceInMilliseconds = now - createdDate;
  const seconds = Math.floor(differenceInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30); // Approximation

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 7) {
    return `${days} days ago`;
  } else if (weeks < 4) {
    return `${weeks} weeks ago`;
  } else if (months < 12) {
    const createdDateObject = new Date(createdDate);
    const year = createdDateObject.getFullYear();
    const month = String(createdDateObject.getMonth() + 1).padStart(2, '0');
    const day = String(createdDateObject.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  } else {
    const createdDateObject = new Date(createdDate);
    const year = createdDateObject.getFullYear();
    const month = String(createdDateObject.getMonth() + 1).padStart(2, '0');
    const day = String(createdDateObject.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  }
}
