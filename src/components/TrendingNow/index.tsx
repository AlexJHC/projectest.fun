import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Navigation, Scrollbar } from 'swiper'
import ProductCard from './ProductCard'
import SwiperNav from '../SwiperNav'

import styles from './styles.module.scss'

import { IProducts } from '../../modules'

type TrendingNowPropsType = {
  allProducts: IProducts[]
}

export default function TrendingNow({ allProducts }: TrendingNowPropsType) {
  return (
    <>
      <div className={styles.title}>
        <h3>Trending Now</h3>
        <SwiperNav nextClass={styles.next} prevClass={styles.prev} />
      </div>

      <Swiper
        scrollbar={{
          el: `.${styles.swiperScrollbar}`,
          hide: false,
          draggable: true,
          dragSize: 80,
        }}
        slidesPerView={1.3}
        spaceBetween={20}
        navigation={{
          nextEl: `.${styles.prev}`,
          prevEl: `.${styles.next}`,
        }}
        modules={[Scrollbar, Grid, Navigation]}
        className={styles.mySwiper}
        onInit={swiper => {
          swiper.scrollbar.init()
          swiper.scrollbar.updateSize()
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        lazy={{
          enabled: true,
        }}
        breakpoints={{
          960: {
            slidesPerView: 3.2,
            spaceBetween: 20,
          },
        }}
      >
        {allProducts.map((product, index) => {
          return (
            <SwiperSlide key={product.id}>
              <ProductCard {...product} index={index} />
            </SwiperSlide>
          )
        })}

        <div className={styles.swiperScrollbar}>
          <div className={'swiper-scrollbar-drag'} />
        </div>
      </Swiper>
    </>
  )
}
