import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Navigation, Scrollbar } from 'swiper'
import { observer } from 'mobx-react'
import Button from '../ButtonShop'
import SwiperNav from '../SwiperNav'

import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import styles from './styles.module.scss'

import { ISpecialOffers } from '../../modules'

type SpecialOffersPropsType = {
  allSpecialOffers: ISpecialOffers[]
}

export default observer(function SpecialOffers({ allSpecialOffers }: SpecialOffersPropsType) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>Don't Miss</h3>
          <SwiperNav nextClass={styles.next} prevClass={styles.prev} />
        </div>

        <Swiper
          scrollbar={{
            el: `.${styles.swiperScrollbar}`,
            hide: false,
            draggable: true,
            dragSize: 160,
          }}
          navigation={{
            nextEl: `.${styles.prev}`,
            prevEl: `.${styles.next}`,
          }}
          modules={[Grid, Scrollbar, Navigation]}
          slidesPerView={1}
          slidesPerGroup={3}
          grid={{ rows: 3, fill: 'row' }}
          spaceBetween={0}
          className={styles.swiper}
          slidesOffsetAfter={1750}
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
            720: {
              slidesPerView: 1.8,
              spaceBetween: 21,
              slidesPerGroup: 1,
              grid: {
                fill: undefined,
                rows: 0,
              },
              scrollbar: {
                dragSize: 250,
              },
            },
            960: {
              slidesPerView: 1.8,
              spaceBetween: 21,
              slidesPerGroup: 1,
              slidesOffsetAfter: 950,
              grid: {
                fill: undefined,
                rows: 0,
              },
              scrollbar: {
                dragSize: 250,
              },
            },
            1280: {
              slidesPerView: 1.8,
              spaceBetween: 21,
              slidesPerGroup: 1,
              slidesOffsetAfter: 0,
              grid: {
                fill: undefined,
                rows: 0,
              },
              scrollbar: {
                dragSize: 250,
              },
            },
            1440: {
              slidesPerView: 2.8,
              spaceBetween: 21,
              slidesPerGroup: 1,
              slidesOffsetAfter: 1050,
              grid: {
                fill: undefined,
                rows: 0,
              },
              scrollbar: {
                dragSize: 450,
              },
            },
            1920: {
              slidesPerView: 2.8,
              spaceBetween: 21,
              slidesPerGroup: 1,
              slidesOffsetAfter: 0,
              grid: {
                fill: undefined,
                rows: 0,
              },
              scrollbar: {
                dragSize: 450,
              },
            },
          }}
        >
          {allSpecialOffers.map(offer => {
            return (
              <SwiperSlide className={styles.slide} key={offer.id}>
                <picture className={styles.content}>
                  <source srcSet={offer.images.smallUrl} media="(max-width: 719px)" />
                  <img src={offer.images.largeUrl} alt="New in Town" />
                </picture>
                <div className={styles.cardContent}>
                  <h4>{offer.title}</h4>
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
