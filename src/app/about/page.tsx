import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center pt-[57px]">
      <Card className="max-w-2xl rounded-none sm:rounded-xl sm:mt-4">
        <div className="p-4 md:p-8">
          <h1 className="text-3xl font-bold">About the developer</h1>
          <div className="mt-4">My name is Carlos Rangel and I&apos;ve been an IT Pro for 7 years, and a software engineer for 5 years. I&apos;ve worked with a variety of technologies, including but not limited to:
            <ul className="list-disc list-inside">
              <li>Windows and Windows Server</li>
              <li>Microsoft Azure - Azure Functions, Azure File Sync, VPNGW, Application Proxy</li>
              <li>Microsoft 365, Azure AD, Active Directory, Hybrid Directory Management</li>
              <li>VoIP - 3CX</li>
              <li>Intune Policy Deployment and Auditing Tooling</li>
              <li>MDM - Intune, MaaS360, Airwatch, Apple Business Manager</li>
              <li>APIs - Quickbooks, Microsoft Graph, Forte Payments, Sophos, Pax8, Mailgun</li>
              <li>Programming Languages - C#, Python, Typescript</li>
              <li>Scripting languages - Python, Powershell</li>
              <li>Fullstack Framwork - Next.js</li>
              <li>AWS - SES, SQS, S3, EC2, VPC, Lambda, Lightsail</li>
              <li>PostgreSQL</li>
              <li>and more</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}