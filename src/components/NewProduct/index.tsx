import Button from '../ButtonShop'

import styles from './styles.module.scss'
import imageLarge from '../../sources/images/newProduct/newProduct_large.jpg'
import imageSmall from '../../sources/images/newProduct/newProduct_small.jpg'

export default function NewProduct() {
  return (
    <div className={styles.container}>
      <picture>
        <source srcSet={imageSmall} media="(max-width: 720px)" />
        <img src={imageLarge} alt="New in Town" />
      </picture>
      <div className={styles.content}>
        <h4>
          New <br /> in Town
        </h4>
        <p>Made to move. Built for tomorrow</p>
        <Button style={{ width: '93px' }}>Shop</Button>
      </div>
    </div>
  )
}
