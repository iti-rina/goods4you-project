export type Product = {
  id: string
  name: string
  description: string
  firstPrice: string
  discountPrice: string
  rating: number
  categories: Array<string>
  stock: boolean
  stockQnt: number
  warranty: string
  ship: string
  images: Array<string>
  coverImage: string
}