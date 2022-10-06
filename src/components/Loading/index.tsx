import styles from './styles.module.scss'

export default function Loading() {
  return (
    <div className={styles.loading}>
      <p>Stone</p>
      <p className={styles.second}>Tile</p>
    </div>
  )
}
