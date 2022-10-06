import { action, autorun, makeAutoObservable, observable } from 'mobx'

import { IProducts } from '../modules'
import { products } from '../utils/localData'

class ProductsStore {
  @observable allProducts: IProducts[] = products
  @observable searchProductsTitle: string[] = []
  @observable searchResult: string[] = []

  constructor() {
    makeAutoObservable(this)
    autorun(() => {
      this.searchProductsTitle = this.allProducts
        .map(({ title }) => title.toLowerCase())
        .sort((a, b) => a.localeCompare(b))
    })
  }

  @action setSearchResult(search: string) {
    this.searchResult = this.searchProductsTitle.filter(result => result.match(search)).slice(0, 5)
  }
}

export default new ProductsStore()
