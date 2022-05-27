import { Wind } from '../../assets/svgs'
import styles from './menu.module.scss'

const Menu = (prop: boolean) => {
  if (prop === true) {
    return (
      <div className={styles.nav}>
        <main className={styles.main}>
          <Wind className={styles.windIcon} />
        </main>
        <aside>
          <a href='http://data.seoul.go.kr/dataList/OA-1201/S/1/datasetView.do'>서울 열린데이터 광장 자료 이용</a>
        </aside>
      </div>
    )
  }
  return null
}
export default Menu
