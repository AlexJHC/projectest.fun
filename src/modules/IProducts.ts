export interface IProducts {
  id: number
  title: string
  categories: string
  price: number
  discount: number | null
  newProduct: boolean
  images: image[]
}

export type image = {
  smallUrl: string
  largeUrl: string
}
