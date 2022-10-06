import { useState } from 'react'
import ThemeSwitcher from '../ThemeSwitcher'
import Button from '../ButtonShop'
import HeaderSlider from './HeaderSlider'
import Search from './Search'

import styles from './styles.module.scss'
import imageSmall from '../../sources/images/newCollection/NewCollection_small.jpg'
import imageLarge from '../../sources/images/newCollection/NewCollection_large.jpg'
import searchIcon from '../../sources/images/icons/search.svg'
import avatarIcon from '../../sources/images/icons/avatar.svg'
import basketIcon from '../../sources/images/icons/basket.svg'
import heartIcon from '../../sources/images/icons/heart.svg'

export default function Header() {
  const [isSearch, setIsSearch] = useState<boolean>(false)

  const showSearch = () => setIsSearch(true)
  const hideSearch = () => setIsSearch(false)

  return (
    <header className={styles.container}>
      <Search isSearch={isSearch} hideSearch={hideSearch} />
      <picture>
        <source srcSet={imageSmall} media="(max-width: 720px)" />
        <img src={imageLarge} alt="New Collection" loading="lazy" />
      </picture>
      <nav>
        <ThemeSwitcher />
        <div className={styles.menu}>
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sale</li>
            <li>More</li>
          </ul>
        </div>
        <div className={styles.buttons}>
          <button className={styles.search} onClick={showSearch}>
            <img src={searchIcon} alt="search" width="32" height="32" />
          </button>
          <button className={styles.like}>
            <img src={heartIcon} alt="search" width="32" height="32" />
          </button>
          <button className={styles.basket}>
            <img src={basketIcon} alt="search" width="32" height="32" />
          </button>
          <button className={styles.avatar}>
            <img src={avatarIcon} alt="search" width="32" height="32" />
          </button>
          <div className={styles.hamburger} />
        </div>
      </nav>
      <section>
        <h3>
          New <br />
          Collection
        </h3>
        <p>
          Inspired by city explorers.
          <br />
          Made to move.
          <br />
          Built for tomorrow
        </p>
        <Button style={{ width: '93px' }}>Shop</Button>
      </section>
      <HeaderSlider />
    </header>
  )
}
