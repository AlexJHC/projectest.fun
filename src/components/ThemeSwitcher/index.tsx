import { observer } from 'mobx-react'
import { useStore } from '../../stores'

import styles from './styles.module.scss'
import moonIcon from '../../sources/images/icons/theme/moon.svg'
import sunIcon from '../../sources/images/icons/theme/sun.svg'

export default observer(function ThemeSwitcher() {
  const { AppStore } = useStore()
  const { theme } = AppStore

  const toggleTheme = () => AppStore.setTheme(theme === 'dark' ? 'light' : 'dark')

  const sunActiveStyle = theme === 'light' ? `${styles.sun} ${styles.active}` : styles.sun
  const moonActiveStyle = theme === 'dark' ? `${styles.moon} ${styles.active}` : styles.moon

  return (
    <div className={styles.switcher} onClick={toggleTheme}>
      <img src={moonIcon} alt="moon icon" width="32" height="32" className={moonActiveStyle} />
      <img src={sunIcon} alt="moon icon" width="32" height="32" className={sunActiveStyle} />
    </div>
  )
})
