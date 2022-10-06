import React, { useEffect } from 'react'
import { Provider, observer } from 'mobx-react'
import store, { useStore } from '../../stores'

// components
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SpecialOffers from '../../components/SpecialOffers'
import NewProduct from '../../components/NewProduct'
import TrendingNow from '../../components/TrendingNow'
import Categories from '../../components/Categories'
import Loading from '../../components/Loading'

//actions
import * as productsActions from '../../actions/products'
import * as specialOffersActions from '../../actions/specialOffers'
import * as categoriesActions from '../../actions/categories'

export default observer(function App() {
  const { ProductsStore, SpecialOffersStore, AppStore, CategoriesStore } = useStore()
  const { allProducts } = ProductsStore
  const { allSpecialOffers } = SpecialOffersStore
  const { isLoading } = AppStore
  const { allCategories } = CategoriesStore

  const init = async (): Promise<void> => {
    AppStore.setIsLoading(true)
    AppStore.setDefaultTheme()
    try {
      await productsActions.getProducts()
      await specialOffersActions.getSpecialOffers()
      await categoriesActions.getCategories()
    } finally {
      AppStore.setIsLoading(false)
    }
  }

  useEffect(() => {
    init()
  }, [])

  if (isLoading) return <Loading />

  return (
    <Provider {...store}>
      <Header />
      <TrendingNow allProducts={allProducts} />
      <Categories allCategories={allCategories} />
      <SpecialOffers allSpecialOffers={allSpecialOffers} />
      <NewProduct />
      <Footer />
    </Provider>
  )
})
