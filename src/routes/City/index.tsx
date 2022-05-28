import Header from '../../components/Headbar/HeadBar'
import styles from './city.module.scss'
import AllItems from './Item/allItems'

const City = () => {
  return (
    <div className={styles.city}>
      <header className={styles.header}>
        <Header />
      </header>
      <h1 className={styles.title}>서울시 지역별 실시간 대기환경 현황</h1>
      <main className={styles.main}>
        <AllItems />
      </main>
      <aside>
        <a href='http://data.seoul.go.kr/dataList/OA-1201/S/1/datasetView.do' className={styles.link}>
          서울 열린데이터 광장 자료 이용
        </a>
      </aside>
    </div>
  )
}

export default City
