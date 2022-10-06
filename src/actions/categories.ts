import { api } from '../stores/api/api'

import store from '../stores/index'

const { CategoriesStore } = store

export async function getCategories(): Promise<void> {
  const res = await api.getAllCategories()
  if (res.status !== 200) throw new Error(`Can't fetch categories`)
  await CategoriesStore.setAllCategories(res.data)
}
