type Props = {
  children: React.ReactNode
}

export default function SidebarSectionTitle({ children }: Props) {
  return (
    <h2 className="my-2 px-4 text-lg font-semibold tracking-tight">
      {children}
    </h2>
  )
}
