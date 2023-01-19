import store from 'store'
import useSeoul from '../../services/useSeoul'
import Grade from '../../components/_common/Grade/Grade'
import NavBar from '../../components/_common/Navbar/NavBar'
import SeoulInfo from '../../components/SeoulInfo/SeoulInfo'
import SeoulChart from '../../components/_common/Chart/SeoulChart'
import styles from './seoul.module.scss'

const Seoul = () => {
  const { dataSeoul } = useSeoul()
  if (!store.get('fav')) {
    store.set('fav', [])
  }
  if (dataSeoul) {
    const grade: string = dataSeoul.GRADE
    return (
      <div className={styles.seoul}>
        <NavBar />
        <main className={styles.main}>
          <h1 className={styles.title}>서울시 실시간 대기환경</h1>
          <section className={styles.info}>
            <div className={styles.grade}>
              <Grade item={grade} />
            </div>
            <div className={styles.data}>
              <SeoulInfo />
            </div>
            <div className={styles.data}>
              <SeoulChart item={dataSeoul} />
            </div>
          </section>
        </main>
        <aside>
          <a href='http://data.seoul.go.kr/dataList/OA-1201/S/1/datasetView.do' className={styles.link}>
            서울 열린데이터 광장 자료 이용
          </a>
        </aside>
      </div>
    )
  }
  return null
}

export default Seoul
