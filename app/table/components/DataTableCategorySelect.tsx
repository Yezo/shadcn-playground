"use client"

import Link from "next/link"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { LayoutGridIcon, MapPinIcon, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

type Props = {
  title: string
  data: string[]
  region: string
  category: string | undefined
}

export function DataTableCategorySelect({
  title,
  data,
  region,
  category,
}: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-10 min-w-[200px] lg:flex"
        >
          {title === "Region" ? (
            <div className="flex items-center gap-2">
              <MapPinIcon size={16} />
              {region.replaceAll("%20", " ")}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <LayoutGridIcon size={16} />
              {category}
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[200px]">
        {data.map((item, index) => {
          return (
            <DropdownMenuItem
              key={index}
              className="min-h-[35px] font-medium capitalize"
              asChild
            >
              {title === "Category" ? (
                <Link href={`/table/${region}?category=${item}`}>{item}</Link>
              ) : (
                <Link href={`/table/${item}?category=${category}`}>{item}</Link>
              )}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
