import { action, makeAutoObservable, observable } from 'mobx'

import { ICategories } from '../modules'

class CategoriesStore {
  @observable allCategories: ICategories[] = []

  constructor() {
    makeAutoObservable(this)
  }

  @action
  async setAllCategories(categories: ICategories[]): Promise<void> {
    this.allCategories = categories
  }
}

export default new CategoriesStore()
