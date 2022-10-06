import React from 'react'

import styles from './styles.module.scss'
import linkedInIcon from '../../../sources/images/icons/social/linkedIn.svg'
import facebookIcon from '../../../sources/images/icons/social/facebook.svg'
import instagramIcon from '../../../sources/images/icons/social/instagram.svg'

export default React.memo(function SocialMedia() {
  return (
    <div className={styles.social}>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        <img src={linkedInIcon} alt="linkedIn icon" />
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <img src={facebookIcon} alt="facebook icon" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <img src={instagramIcon} alt="instagram icon" />
      </a>
    </div>
  )
})
