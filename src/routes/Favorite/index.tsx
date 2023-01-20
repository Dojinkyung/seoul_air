import Items from '../../components/_common/Items/Items'
import MobileItems from '../../components/_common/Items/MobileItems'
import NavBar from '../../components/_common/Navbar/NavBar'
import useCityConvert from '../../services/useCityConvert'
import styles from './fav.module.scss'

const Favorite = () => {
  const { dataCityConvert } = useCityConvert()
  const filtered = dataCityConvert?.filter((item) => item.Fav === true)
  if (filtered) {
    return (
      <div className={styles.fav}>
        <NavBar />
        <main className={styles.main}>
          <h1 className={styles.title}>즐겨찾기</h1>
          <section className={styles.info}>
            <Items items={filtered} />
            <MobileItems items={filtered} />
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

export default Favorite
