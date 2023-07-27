type Props = {
  children: React.ReactNode
}

export default function SidebarSection({ children }: Props) {
  return <nav className="px-3 py-2">{children}</nav>
}
