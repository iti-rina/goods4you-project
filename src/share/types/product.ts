export type Product = {
  id: string
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  tags: Array<string>
  stock: number
  warrantyInformation: string
  shippingInformation: string
  images: Array<string>
  thumbnail: string
}