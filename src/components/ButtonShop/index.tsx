import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import styles from './styles.module.scss'

type ButtonShopPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export default function Button({ ...props }: ButtonShopPropsType) {
  return <button className={styles.shop} {...props} />
}
