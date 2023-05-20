import { atom } from "jotai"
import { atomWithCache } from "jotai-cache"

import { marketAPI } from "../types/marketAPI"

export const regionAtom = atom("North America East")
export const dropdownAtom = atom("Enhancement Material")

export const marketplaceDataAtom = atomWithCache<Promise<marketAPI[]>>(
  async (get) => {
    const region = get(regionAtom)
    const dropdown = get(dropdownAtom)
    const response = await fetch(
      `https://www.lostarkmarket.online/api/export-market-live/${region}?category=${dropdown}`
    )
    return response.json()
  }
)
