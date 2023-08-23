import { NavLinks } from "./nav-links";

export default function Navbar() {
  return (
    <div className="flex items-center gap-8 p-4 bg-background border-b">
      <NavLinks />
    </div>
  )
}