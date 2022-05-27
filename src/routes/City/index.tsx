import Header from '../../components/Headbar/HeadBar'
import styles from './city.module.scss'
import Items from './Item/items'

const City = () => {
  return (
    <div className={styles.city}>
      <header className={styles.header}>
        <Header />
      </header>
      <h1 className={styles.title}>서울시 권역별 실시간 대기환경 현황</h1>
      <main className={styles.main}>
        <Items />
      </main>
    </div>
  )
}

export default City
