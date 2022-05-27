import styles from './grade.module.scss'
import { Bad, Fix, Good, Soso, VeryBad } from '../../assets/svgs'

interface props {
  item: string
}
const Grade = (props: props) => {
  const { item } = props
  if (item) {
    if (item === '좋음') {
      return (
        <div className={styles.grade}>
          <Good className={styles.goodIcon} />
          <h1 className={styles.status1}>{item}</h1>
        </div>
      )
    }
    if (item === '보통') {
      return (
        <div className={styles.grade}>
          <Soso className={styles.sosoIcon} />
          <h1 className={styles.status2}>{item}</h1>
        </div>
      )
    }
    if (item === '나쁨') {
      return (
        <div className={styles.grade}>
          <Bad className={styles.badIcon} />
          <h1 className={styles.status3}>{item}</h1>
        </div>
      )
    }
    if (item === '매우나쁨') {
      return (
        <div className={styles.grade}>
          <VeryBad className={styles.VeryBadIcon} />
          <h1 className={styles.status4}>{item}</h1>
        </div>
      )
    }
    if (item === '점검중') {
      return (
        <div className={styles.grade}>
          <Fix className={styles.fixIcon} />
          <h1 className={styles.status5}>{item}</h1>
        </div>
      )
    }
  }
  return null
}

export default Grade
