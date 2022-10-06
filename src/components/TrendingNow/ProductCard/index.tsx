import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './styles.module.scss'
import 'swiper/css'
import 'swiper/css/pagination'
import heartIcon from '../../../sources/images/icons/heart.svg'

import { IProducts } from '../../../modules'

type ProductCardPropsType = IProducts & { index: number }

export default function ProductCard({
  index,
  title,
  discount,
  id,
  newProduct,
  images,
  price,
  categories,
}: ProductCardPropsType) {
  const productDiscountPrice = discount && (price - (price * discount) / 100).toFixed(2)

  return (
    <>
      <div className={styles.container}>
        <img className={styles.like} src={heartIcon} alt="heart icon" width="32" height="32" />
        <div className={styles.discount}>
          {discount && <span className={styles.discountAmount}>{`-${discount}%`}</span>}
          {newProduct && <span className={styles.discountNew}>New</span>}
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          modules={[Pagination, Autoplay]}
          pagination={true}
          autoplay={{
            delay: index * 400 + 1000,
          }}
          className={styles.mySwiper}
          lazy={{
            enabled: true,
          }}
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide key={id * index}>
                <picture>
                  <source srcSet={image.smallUrl} media="(max-width: 720px)" />
                  <img src={image.largeUrl} alt={title} />
                </picture>
              </SwiperSlide>
            )
          })}
        </Swiper>

        <div className={styles.title}>
          <div>
            <h5>{title}</h5>
            {discount ? <span>{`€${productDiscountPrice}`}</span> : <span>{`€${price}`}</span>}
          </div>
          <div>
            <span>{categories}</span>
            {discount && <span className={styles.price}>{`€${price}`}</span>}
          </div>
        </div>
      </div>
    </>
  )
}
