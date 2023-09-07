import { Card } from "@/components/ui/card";
import Link from "next/link";
const PROJECTS = [
  { url: "https://cubie-steel.vercel.app/", name: "Cubie", description: "WIP - A platform for investing in people." },
  { url: "https://ivcgarage.com/", name: "IVC Garage", description: "The makings of a social media network for the IVC Car Club." },
  { url: "https://veldt.us/", name: "Veldt", description: "WIP - A platform to create shared bucket lists with friends, partners." },
  { url: "https://hr.teamrelion.com", name: "Relion HR", description: "An extremely small application that transparently makes MS Graph calls using Azure AD auth." },
]
export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center pt-[57px]">
      <Card className="max-w-2xl rounded-none sm:rounded-xl sm:mt-4">
        <div className="p-4 md:p-8">
          <h1 className="text-3xl font-bold">{"(mostly unfinished) Projects"}</h1>
          <div className="mt-4">These projects are the result of my curiosity and desire to learn new things.
            <ul className="list-disc list-inside">
              {PROJECTS.map(({ url, name, description }) => (
                <li key={name} className="mt-2">
                  <Link href={url}
                    target="_blank"
                    className="text-blue-500 hover:underline">{name}</Link>
                  <p className="text-sm">{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}