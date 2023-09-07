import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { NavLinks } from "./nav-links";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed z-10 flex justify-between items-center w-full gap-8 p-4 border-b bg-background">
      <NavLinks />
      <Link href="https://github.com/cloudnothings" target="_blank">
        <GitHubLogoIcon className="w-6 h-6 text-primary" />
      </Link>
    </div>
  )
}