import { api } from '../stores/api/api'

import store from '../stores/index'

const { ProductsStore } = store

export async function getProducts(): Promise<void> {
  const res = await api.getAllProducts()
  if (res.status !== 200) throw new Error(`Can't fetch user products`)
  await ProductsStore.setAllProducts(res.data)
}
