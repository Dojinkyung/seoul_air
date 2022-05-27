import Grade from '../../components/Grade/Grade'
import Header from '../../components/Headbar/HeadBar'
import styles from './seoul.module.scss'
import SeoulInfo from './SeoulInfo'
import useSeoul from '../../services/useSeoul'

const Seoul = () => {
  const { dataSeoul } = useSeoul()

  if (dataSeoul) {
    const grade: string = dataSeoul.GRADE
    return (
      <div className={styles.seoul}>
        <header className={styles.header}>
          <Header />
        </header>
        <main className={styles.main}>
          <Grade item={grade} />
          <SeoulInfo />
        </main>
      </div>
    )
  }
  return null
}

export default Seoul
