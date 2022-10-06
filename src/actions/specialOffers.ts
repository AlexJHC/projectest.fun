import { api } from '../stores/api/api'

import store from '../stores/index'

const { SpecialOffersStore } = store

export async function getSpecialOffers(): Promise<void> {
  const res = await api.getAllSpecialOffers()
  if (res.status !== 200) throw new Error(`Can't fetch special offers`)
  await SpecialOffersStore.setAllSpecialOffers(res.data)
}
