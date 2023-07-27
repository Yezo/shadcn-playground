import Link from "next/link"

import { Icons } from "@/components/icons"

export default function SidebarLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 px-5 py-4 text-lg font-bold tracking-tight"
    >
      <Icons.logo className="h-6 w-6" /> Trackr.
    </Link>
  )
}
