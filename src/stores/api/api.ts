import { instance } from './config'
import { ISpecialOffers, IProducts, ICategories } from '../../modules'

export const api = {
  getAllProducts() {
    return instance.get<IProducts[]>('/products')
  },
  getAllSpecialOffers() {
    return instance.get<ISpecialOffers[]>('/specialOffers')
  },
  getAllCategories() {
    return instance.get<ICategories[]>('/categories')
  },
}
