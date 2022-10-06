import { createContext, useContext } from 'react'
import { configure, observable } from 'mobx'

import ProductsStore from './products'
import SpecialOffersStore from './specialOffers'
import AppStore from './app'
import CategoriesStore from './categories'

configure({ enforceActions: 'observed', useProxies: 'never' })

class RootStore {
  @observable ProductsStore = ProductsStore
  @observable SpecialOffersStore = SpecialOffersStore
  @observable AppStore = AppStore
  @observable CategoriesStore = CategoriesStore
}

const rootStore = new RootStore()

export const StoreContext = createContext<RootStore>(rootStore)

export const useStore = (): RootStore => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  return store
}

export default new RootStore()
