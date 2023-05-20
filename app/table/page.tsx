import { marketplaceDataAtom } from "@/atoms/globals"
import { useAtomValue } from "jotai"

import { marketAPI } from "@/types/marketAPI"
import { data } from "@/app/table/data"

import { columns } from "./columns"
import { DataTable } from "./table"

// async function getData(): Promise<marketAPI[]> {
//   // Fetch data from your API here.
//   const [result] = useAtomValue(marketplaceDataAtom)
//   return
// }

export default async function DemoPage() {
  // const result = useAtomValue(marketplaceDataAtom)
  // console.log(result)
  return (
    <div className="container mx-auto py-5 md:px-20">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
