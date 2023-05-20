export interface marketAPI {
  id: string
  gameCode: string
  name: string
  image: string
  avgPrice: number
  lowPrice: number
  recentPrice: number
  cheapestRemaining: number
  amount: number
  rarity: number
  category: string
  subcategory: string
  shortHistoric: { [key: string]: number }
  updatedAt: string
}
