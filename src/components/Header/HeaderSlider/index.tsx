import { useEffect, useState } from 'react'

import styles from './styles.module.scss'

export default function HeaderSlider() {
  const [hideSlide, setHideSlide] = useState<boolean>(true)

  const hideFirstSpan = hideSlide ? `${styles.hide}` : ''
  const hideSecondSpan = !hideSlide ? `${styles.hide}` : ''

  useEffect(() => {
    const timerId = setInterval(() => setHideSlide(!hideSlide), 8000)

    return () => clearInterval(timerId)
  }, [hideSlide])
  return (
    <div className={styles.slider}>
      <span className={hideFirstSpan}>We’ve extended our returns period to 60 days</span>
      <span className={hideSecondSpan}>COVID-19: Information</span>
    </div>
  )
}
