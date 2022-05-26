import { Bar, Toilet } from '../../assets/svgs'
import styles from './header.module.scss'

const HeaderBar = () => {
  return (
    <div className={styles.header}>
      <Toilet className={styles.toilet} />
      <h1 className={styles.title}>내 주변 화장실!</h1>
      <button type='button' className={styles.button}>
        <Bar className={styles.baricon} />
      </button>
    </div>
  )
}
export default HeaderBar
