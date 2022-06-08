import { BadIcon, FixIcon, GoodIcon, SosoIcon, VeryBadIcon } from '../../../assets/svgs'
import styles from './grade.module.scss'

interface props {
  item: string
}
const Grade = (props: props) => {
  const { item } = props
  if (item) {
    if (item === '좋음') {
      return (
        <div className={styles.grade}>
          <GoodIcon className={styles.goodIcon} />
          <h1 className={styles.status1}>{item}</h1>
        </div>
      )
    }
    if (item === '보통') {
      return (
        <div className={styles.grade}>
          <SosoIcon className={styles.sosoIcon} />
          <h1 className={styles.status2}>{item}</h1>
        </div>
      )
    }
    if (item === '나쁨') {
      return (
        <div className={styles.grade}>
          <BadIcon className={styles.badIcon} />
          <h1 className={styles.status3}>{item}</h1>
        </div>
      )
    }
    if (item === '매우나쁨') {
      return (
        <div className={styles.grade}>
          <VeryBadIcon className={styles.veryBadIcon} />
          <h1 className={styles.status4}>{item}</h1>
        </div>
      )
    }
    if (item === '점검중') {
      return (
        <div className={styles.grade}>
          <FixIcon className={styles.fixIcon} />
          <h1 className={styles.status5}>{item}</h1>
        </div>
      )
    }
  }
  return null
}

export default Grade
