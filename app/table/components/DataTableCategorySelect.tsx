"use client"

import Link from "next/link"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Table } from "@tanstack/react-table"
import { SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
          className="ml-auto hidden h-10 w-[200px] lg:flex"
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          {title}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {data.map((item, index) => {
          return (
            <DropdownMenuItem
              key={index}
              className="font-medium capitalize"
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
