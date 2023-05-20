import { Table } from "@tanstack/react-table"

import { Input } from "@/components/ui/input"

interface DataTableInputBar<TData> {
  table: Table<TData>
}

export function DataTableInputBar<TData>({ table }: DataTableInputBar<TData>) {
  return (
    <div className="flex items-center">
      <Input
        placeholder="Filter items..."
        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("name")?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      />
    </div>
  )
}
