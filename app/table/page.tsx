import { data, marketAPI } from "@/app/table/data"

import { columns } from "./columns"
import { DataTable } from "./table"

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ]
// }

export default async function DemoPage() {
  return (
    <div className="container mx-auto py-5 md:px-20">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
