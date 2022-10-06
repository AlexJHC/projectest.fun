import { action, autorun, makeAutoObservable, observable } from 'mobx'

import { IProducts } from '../modules'

class ProductsStore {
  @observable allProducts: IProducts[] = []
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

  @action
  async setAllProducts(products: IProducts[]): Promise<void> {
    this.allProducts = products
  }

  @action setSearchResult(search: string) {
    this.searchResult = this.searchProductsTitle.filter(result => result.match(search)).slice(0, 5)
  }
}

export default new ProductsStore()
