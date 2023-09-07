import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center pt-[57px]">
      <Card className="max-w-2xl rounded-none sm:rounded-xl sm:mt-4">
        <div className="p-4 md:p-8">
          <h1 className="text-3xl font-bold">Contact me</h1>
          <div className="mt-4">{'You can reach me at '}
            <Link href="mailto:carlos@rangel.us">
              {'carlos@rangel.us'}
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}