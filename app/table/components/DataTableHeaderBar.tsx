import { Table } from "@tanstack/react-table"

import { DataTableCategorySelect } from "@/app/table/components/DataTableCategorySelect"
import { DataTableDropdown } from "@/app/table/components/DataTableDropdown"
import { DataTableInputBar } from "@/app/table/components/DataTableInputBar"

interface DataTableHeaderBar<TData> {
  table: Table<TData>
  region: string
  category: string | undefined
}

export function DataTableHeaderBar<TData>({
  table,
  region,
  category,
}: DataTableHeaderBar<TData>) {
  return (
    <div className="flex items-center justify-between">
      <DataTableInputBar table={table} />
      <div className="flex items-center gap-2">
        <DataTableCategorySelect
          title={"Region"}
          data={[
            "North America East",
            "North America West",
            "Europe Central",
            "Europe West",
            "South America",
          ]}
          region={region}
          category={category}
        />
        <DataTableCategorySelect
          title={"Category"}
          data={[
            "Enhancement Material",
            "Engraving Recipe",
            "Combat Supplies",
            "Cooking",
            "Trader",
            "Adventurer's Tome",
            "Sailing",
            "Pets",
            "Mount",
            "Gem Chest",
          ]}
          region={region}
          category={category}
        />
        <DataTableDropdown table={table} />
      </div>
    </div>
  )
}
