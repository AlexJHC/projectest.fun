import styles from './styles.module.scss'
import arrowIcon from '../../sources/images/icons/arrowright.svg'

type SwiperNavPropsType = {
  nextClass: string
  prevClass: string
}

export default function SwiperNav({ prevClass, nextClass }: SwiperNavPropsType) {
  return (
    <div className={styles.swiperNavButtons}>
      <div className={`${styles.next} ${nextClass}`}>
        <img src={arrowIcon} alt="arrow icon" />
      </div>
      <div className={`${styles.prev} ${prevClass}`}>
        <img src={arrowIcon} alt="arrow icon" />
      </div>
    </div>
  )
}
