"use client"

import { usePathname } from "next/navigation"
import {
  FileBarChart2Icon,
  FileIcon,
  FlaskRoundIcon,
  HomeIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"

import SidebarLink from "@/components/sidebar/SidebarLink"
import SidebarLinkContainer from "@/components/sidebar/SidebarLinkContainer"
import SidebarLogo from "@/components/sidebar/SidebarLogo"
import SidebarSection from "@/components/sidebar/SidebarSection"
import SidebarSectionTitle from "@/components/sidebar/SidebarSectionTitle"

export default function Sidebar() {
  const servicesNavItems = {
    "/": {
      title: "Home",
      icon: <HomeIcon size={18} strokeWidth={1.75} />,
    },
    "/applications": {
      title: "Applications",
      icon: <LayoutDashboardIcon size={18} strokeWidth={1.75} />,
    },
    "/statistics": {
      title: "Statistics",
      icon: <FileBarChart2Icon size={18} strokeWidth={1.75} />,
    },
    "/history": {
      title: "History",
      icon: <FlaskRoundIcon size={18} strokeWidth={1.75} />,
    },
    "/notes": {
      title: "Notes",
      icon: <FileIcon size={18} strokeWidth={1.75} />,
    },
  }

  const accountNavItems = {
    "/account": {
      title: "Profile",
      icon: <UserIcon size={18} strokeWidth={1.75} />,
    },
    "/settings": {
      title: "Settings",
      icon: <SettingsIcon size={18} strokeWidth={1.75} />,
    },
  }

  let pathname = usePathname() || "/"

  return (
    <aside className="min-h-[calc(100vh-65px)] max-w-[200px] space-y-4 divide-y divide-gray-200 border-r pb-12 dark:divide-gray-700">
      {/* <SidebarLogo /> */}

      <SidebarSection>
        <SidebarSectionTitle>Services</SidebarSectionTitle>

        <SidebarLinkContainer>
          {Object.entries(servicesNavItems).map(([path, { title, icon }]) => {
            return (
              <SidebarLink
                path={path}
                pathname={pathname}
                title={title}
                icon={icon}
                key={title}
              />
            )
          })}
        </SidebarLinkContainer>
      </SidebarSection>

      <SidebarSection>
        <SidebarSectionTitle>Account</SidebarSectionTitle>

        <SidebarLinkContainer>
          {Object.entries(accountNavItems).map(([path, { title, icon }]) => {
            return (
              <SidebarLink
                path={path}
                pathname={pathname}
                title={title}
                icon={icon}
                key={title}
              />
            )
          })}
        </SidebarLinkContainer>
      </SidebarSection>
    </aside>
  )
}
