type Props = {
  children: React.ReactNode
}

export default function SidebarLinkContainer({ children }: Props) {
  return <div className="space-y-1">{children}</div>
}
