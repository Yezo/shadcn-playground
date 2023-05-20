import React from "react"

import { columns } from "@/app/table/columns"
import { DataTable } from "@/app/table/table"

type Props = {
  params: {
    region: string
    category: string
  }
  searchParams: {
    category: string | undefined
  }
}

async function getData(region: string, category: string | undefined) {
  const res = await fetch(
    `https://www.lostarkmarket.online/api/export-market-live/${region}?category=${category}`
  )
  if (!res.ok) throw new Error("failed to fetch data")

  return res.json()
}

export default async function page({
  params,
  searchParams,
}: {
  params: Props["params"]
  searchParams: Props["searchParams"]
}) {
  const data = await getData(params.region, searchParams.category)

  return (
    <div className="container mx-auto py-5 md:px-20">
      {searchParams?.category || "Hello!"}
      {data ? (
        <DataTable
          columns={columns}
          data={data}
          region={params.region}
          category={searchParams.category}
        />
      ) : (
        "No"
      )}
    </div>
  )
}
