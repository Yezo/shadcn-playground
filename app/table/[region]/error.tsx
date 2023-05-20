"use client"

import { useEffect } from "react"
import { RefreshCcwIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="my-40 grid place-items-center gap-8">
      <h2 className="font-medium tracking-tight">
        Oops, something went wrong!
      </h2>
      <div className="flex items-center gap-4">
        <Button variant="destructive" onClick={() => reset()}>
          <RefreshCcwIcon className="mr-2 h-4 w-4" />
          Try Again
        </Button>
        <Button>Home</Button>
      </div>
    </div>
  )
}
