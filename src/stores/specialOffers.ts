import { action, makeAutoObservable, observable } from 'mobx'

import { ISpecialOffers } from '../modules'

class SpecialOffersStore {
  @observable allSpecialOffers: ISpecialOffers[] = []

  constructor() {
    makeAutoObservable(this)
  }

  @action
  async setAllSpecialOffers(specialOffers: ISpecialOffers[]): Promise<void> {
    this.allSpecialOffers = specialOffers
  }
}

export default new SpecialOffersStore()
