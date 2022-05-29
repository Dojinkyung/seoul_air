import Header from '../../components/Headbar/HeadBar'
import styles from './fav.module.scss'
import FavItems from './FavItems'

const Favorite = () => {
  return (
    <div className={styles.fav}>
      <header className={styles.header}>
        <Header />
      </header>
      <h1 className={styles.title}>즐겨찾기</h1>
      <main className={styles.main}>
        <FavItems />
      </main>
      <aside>
        <a href='http://data.seoul.go.kr/dataList/OA-1201/S/1/datasetView.do' className={styles.link}>
          서울 열린데이터 광장 자료 이용
        </a>
      </aside>
    </div>
  )
}

export default Favorite
