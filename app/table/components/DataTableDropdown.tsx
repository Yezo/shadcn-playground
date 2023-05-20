"use client"

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Table } from "@tanstack/react-table"
import { SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

interface DataTableDropdown<TData> {
  table: Table<TData>
}

export function DataTableDropdown<TData>({ table }: DataTableDropdown<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-10 w-[170px] lg:flex"
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Toggle Columns
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[170px]">
        <DropdownMenuLabel>Toggle</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide()
          )
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="font-medium capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id.toLowerCase() === "name" && "Name"}
                {column.id.toLowerCase() === "lowprice" && "Low Price"}
                {column.id.toLowerCase() === "recentprice" && "Recent Price"}
                {column.id.toLowerCase() === "shorthistoric" && "Market Trend"}
                {column.id.toLowerCase() === "cheapestremaining" && "Quantity"}
                {column.id.toLowerCase() === "updatedat" && "Last Updated"}
              </DropdownMenuCheckboxItem>
            )
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
