import React from "react"
import Link from "next/link"

type Props = {
  url: string
  title: string
  children: React.ReactNode
}

export default function SidebarLink({ url, title, children }: Props) {
  return (
    <Link
      className="inline-flex h-10 w-full items-center justify-start gap-2 rounded-md px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      href={url}
    >
      {children}
      {title}
    </Link>
  )
}
