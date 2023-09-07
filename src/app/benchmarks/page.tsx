import { Card } from "@/components/ui/card";

export default function BenchmarkPage() {
  return (
    <div className="flex flex-col items-center pt-[57px]">
      <Card className="max-w-2xl rounded-none sm:rounded-xl sm:mt-4">
        <div className="p-4 md:p-8">
          <h1 className="text-3xl font-bold">(WIP) Language / Infrastructure Benchmark</h1>
          <div className="mt-4">I&apos;ve been interested in displaying the difference in performance between different backend services and languages. I&apos;ve created a simple benchmark that will return a JSON object with the time it took to complete the request. The benchmark is hosted on a variety of different services, and the results are displayed below.

          </div>
        </div>
      </Card>
    </div>
  )
}