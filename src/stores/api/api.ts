import { instance } from './config'
import { ICategories } from '../../modules'

export const api = {
  getAllCategories() {
    return instance.get<ICategories[]>('/categories')
  },
}
