import Grade from '../../components/Grade/Grade'
import Header from '../../components/Headbar/HeadBar'
import styles from './seoul.module.scss'
import SeoulInfo from './SeoulInfo'
import useSeoul from '../../services/useSeoul'
import store from 'store'

const Seoul = () => {
  const { dataSeoul } = useSeoul()
  if (!store.get('fav')) {
    store.set('fav', [])
  }
  if (dataSeoul) {
    const grade: string = dataSeoul.GRADE
    return (
      <div className={styles.seoul}>
        <header className={styles.header}>
          <Header />
        </header>

        <main className={styles.main}>
          {' '}
          <h1 className={styles.title}>서울시 실시간 대기환경</h1>
          <Grade item={grade} />
          <SeoulInfo />
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
