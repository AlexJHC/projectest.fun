import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Navigation, Scrollbar } from 'swiper'
import { observer } from 'mobx-react'
import Button from '../ButtonShop'
import SwiperNav from '../SwiperNav'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/scrollbar'
import styles from './style.module.scss'

import { ICategories } from '../../modules'

type CategoriesPropsType = {
  allCategories: ICategories[]
}

export default observer(function Categories({ allCategories }: CategoriesPropsType) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>Categories</h3>
          <SwiperNav prevClass={styles.prev} nextClass={styles.next} />
        </div>

        <Swiper
          scrollbar={{
            el: `.${styles.swiperScrollbar}`,
            hide: false,
            draggable: true,
            dragSize: 280,
          }}
          slidesPerView={'auto'}
          centeredSlides={false}
          grid={{
            rows: 2,
          }}
          spaceBetween={0}
          navigation={{
            nextEl: `.${styles.prev}`,
            prevEl: `.${styles.next}`,
          }}
          modules={[Grid, Scrollbar, Navigation]}
          className={styles.swiper}
          onInit={swiper => {
            swiper.scrollbar.init()
            swiper.scrollbar.updateSize()
            swiper.navigation.init()
            swiper.navigation.update()
          }}
          lazy
          breakpoints={{
            720: {
              slidesPerView: 1.27,
              spaceBetween: 15,
              grid: {
                fill: undefined,
                rows: 0,
              },
              scrollbar: {
                dragSize: 500,
              },
            },
            960: {
              slidesPerView: 1.72,
              spaceBetween: 15,
              grid: {
                fill: undefined,
                rows: 0,
              },
              scrollbar: {
                dragSize: 500,
              },
            },
            1440: {
              slidesPerView: 2.7,
              spaceBetween: 15,
              grid: {
                fill: undefined,
                rows: 0,
              },
              scrollbar: {
                dragSize: 800,
              },
            },
            1800: {
              slidesPerView: 3.5,
              spaceBetween: 15,
              grid: {
                fill: undefined,
                rows: 0,
              },
              scrollbar: {
                dragSize: 800,
              },
            },
          }}
        >
          {allCategories.map(category => {
            return (
              <SwiperSlide
                key={category.id}
                className={styles.slide}
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className={styles.cardContent}>
                  <h4>{category.title}</h4>
                  <Button style={{ width: '93px' }}>Shop</Button>
                </div>
              </SwiperSlide>
            )
          })}

          <div className={styles.swiperScrollbar}>
            <div className={'swiper-scrollbar-drag'} />
          </div>
        </Swiper>
      </div>
    </>
  )
})
