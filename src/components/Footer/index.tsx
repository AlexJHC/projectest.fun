import Button from '../ButtonShop'
import ThemeSwitcher from '../ThemeSwitcher'
import SocialMedia from './SocialMedia'

import styles from './styles.module.scss'
import locationIcon from '../../sources/images/icons/location.svg'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <section className={styles.content}>
        <h1 className={styles.title}>
          <span>Stone</span>
          <span>Tile</span>
        </h1>
        <div className={styles.theme}>
          <ThemeSwitcher />
        </div>
        <div className={styles.categories}>
          <h6>Categories</h6>
          <ul>
            <li>Popular</li>
            <li>Kids</li>
            <li>Sale</li>
            <li>New</li>
            <li>Men</li>
            <li>Women</li>
          </ul>
        </div>
        <div className={styles.about}>
          <h6>About Us</h6>
          <ul>
            <li>Contacts</li>
            <li>Support</li>
          </ul>
        </div>
        <SocialMedia />
        <div className={styles.btnContainer}>
          <Button>Shop</Button>
        </div>
      </section>
      <div className={styles.location}>
        <div>
          <img src={locationIcon} alt="location icon" />
          <span>City</span>
        </div>
        <div>
          <span>Cookie Setting</span>
          <span>Terms of use</span>
        </div>
      </div>
    </footer>
  )
}
