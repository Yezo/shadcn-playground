import { Table } from "@tanstack/react-table"

import { Input } from "@/components/ui/input"
import { DataTableDropdown } from "@/app/table/components/DataTableDropdown"
import { DataTableInputBar } from "@/app/table/components/DataTableInputBar"

interface DataTableHeaderBar<TData> {
  table: Table<TData>
}

export function DataTableHeaderBar<TData>({
  table,
}: DataTableHeaderBar<TData>) {
  return (
    <div className="flex items-center justify-between">
      <DataTableInputBar table={table} />
      <DataTableDropdown table={table} />
    </div>
  )
}
