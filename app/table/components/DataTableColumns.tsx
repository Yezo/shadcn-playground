"use client"

import Image from "next/image"
import { ColumnDef } from "@tanstack/react-table"
import { ChevronsUpDown } from "lucide-react"
import { Sparklines, SparklinesLine } from "react-sparklines"

import { marketAPI } from "@/types/marketAPI"
import { Button } from "@/components/ui/button"

const sorted = (obj: any) =>
  obj &&
  Object.keys(obj)
    .sort()
    .reduce((accumulator: any, key: any) => {
      accumulator[key] = obj[key]

      return accumulator
    }, {})

function handleItemRarityColor(rarity: number) {
  if (rarity !== 1 || 2 || 3 || 4 || 5)
    return "bg-gradient-to-br from-[#262626] to-[#3d3d3d]" //gray
  if (rarity === 1) return "bg-gradient-to-br from-[#1e2d0b] to-[#304911]" //green
  if (rarity === 2) return "bg-gradient-to-br from-[#112739] to-[#113d5d]" //blue
  if (rarity === 3) return "bg-gradient-to-br from-[#2e123c] to-[#480d5d]" //purple
  if (rarity === 4) return "bg-gradient-to-br from-[#452b06] to-[#9e5f04]" //yellow
  if (rarity === 5) return "bg-gradient-to-br from-[#48220b] to-[#a24006]" //dark-orange
}

export const columns: ColumnDef<marketAPI>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const img: string = row.original.image
      const name: string = row.original.name
      const rarity: number = row.original.rarity

      function handleItemRarityColor(rarity: number) {
        if (rarity === 0) return "bg-gradient-to-br from-[#262626] to-[#3d3d3d]" //gray
        if (rarity === 1) return "bg-gradient-to-br from-[#1e2d0b] to-[#304911]" //green
        if (rarity === 2) return "bg-gradient-to-br from-[#112739] to-[#113d5d]" //blue
        if (rarity === 3) return "bg-gradient-to-br from-[#2e123c] to-[#480d5d]" //purple
        if (rarity === 4) return "bg-gradient-to-br from-[#452b06] to-[#9e5f04]" //yellow
        if (rarity === 5) return "bg-gradient-to-br from-[#48220b] to-[#a24006]" //dark-orange
      }
      return (
        <div className="flex items-center gap-3 px-4 md:max-w-[375px] md:min-w-[335px]">
          <div
            className={`${handleItemRarityColor(
              rarity
            )} hidden min-w-[35px] max-w-[35px] p-[2px] shadow-md ring-1 ring-black/[.25] md:block `}
          >
            <Image src={img} alt={img} width="35" height="35"></Image>
          </div>
          {name}
        </div>
      )
    },
  },

  {
    accessorKey: "lowPrice",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Low Price
            <ChevronsUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const quantity = parseFloat(row.getValue("lowPrice"))
      return (
        <div className="flex items-center justify-end gap-1 px-4 font-medium">
          {new Intl.NumberFormat().format(quantity)}
          <Image
            src="/gold.png"
            alt="image of a gold coin"
            width="20"
            height="20"
          />
        </div>
      )
    },
  },
  {
    accessorKey: "recentPrice",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Recent Price
            <ChevronsUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const quantity = parseFloat(row.getValue("recentPrice"))
      return (
        <div className="flex items-center justify-end gap-1 px-4 font-medium">
          {new Intl.NumberFormat().format(quantity)}
          <Image
            src="/gold.png"
            alt="image of a gold coin"
            width="20"
            height="20"
          />
        </div>
      )
    },
  },
  {
    accessorKey: "shortHistoric",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Market Trend
            <ChevronsUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const vals: {} = row.getValue("shortHistoric")
      return (
        <div className="ml-9 flex justify-end">
          <Sparklines data={vals && Object.values(sorted(vals))}>
            <SparklinesLine
              style={{
                stroke: "#b7c2d0",
                strokeWidth: "5",
                strokeOpacity: "0.8",
                fill: "#627897",
                fillOpacity: "0.7",
              }}
            />
          </Sparklines>
        </div>
      )
    },
  },
  {
    accessorKey: "cheapestRemaining",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Quantity
            <ChevronsUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },

    cell: ({ row }) => {
      const quantity = parseFloat(row.getValue("cheapestRemaining"))
      return (
        <div className="px-4 text-right font-medium">
          {new Intl.NumberFormat().format(quantity)}
        </div>
      )
    },
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Last Updated
            <ChevronsUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const time = row.original.updatedAt

      // in miliseconds
      let units = {
        year: 24 * 60 * 60 * 1000 * 365,
        month: (24 * 60 * 60 * 1000 * 365) / 12,
        day: 24 * 60 * 60 * 1000,
        hour: 60 * 60 * 1000,
        minute: 60 * 1000,
        second: 1000,
      }

      let rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" })

      let getRelativeTime = (d1: any, d2: any = new Date()) => {
        let elapsed = d1 - d2

        // "Math.abs" accounts for both "past" & "future" scenarios
        for (let u in units)
          if (
            Math.abs(elapsed) > units[u as keyof typeof units] ||
            u == "second"
          )
            return rtf.format(
              Math.round(elapsed / units[u as keyof typeof units]),
              u as keyof typeof units
            )
      }

      const tata = getRelativeTime(+new Date(time))
      return (
        <div className="px-4 text-right first-letter:capitalize">{tata}</div>
      )
    },
  },
]
