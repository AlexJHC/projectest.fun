import { makeAutoObservable, observable } from 'mobx'

import { ISpecialOffers } from '../modules'
import { specialOffers } from '../utils/localData'

class SpecialOffersStore {
  @observable allSpecialOffers: ISpecialOffers[] = specialOffers

  constructor() {
    makeAutoObservable(this)
  }
}

export default new SpecialOffersStore()
