import { ICityRow } from '../../types/City.d'
import styles from './cityInfo.module.scss'

interface props {
  item: ICityRow
}
const CityInfo = (props: props) => {
  const { item } = props
  if (item) {
    return (
      <div className={styles.info}>
        <dl className={styles.dl}>
          <div className={styles.item}>
            <dt>이산화질소</dt>
            <dd>{item.NO2}ppm</dd>
          </div>
          <div className={styles.item}>
            <dt>오존</dt>
            <dd>{item.O3}ppm</dd>
          </div>
          <div className={styles.item}>
            <dt>일산화탄소</dt>
            <dd>{item.CO}ppm</dd>
          </div>
          <div className={styles.item}>
            <dt>아황산가스</dt>
            <dd>{item.SO2}ppm</dd>
          </div>
          <div className={styles.item}>
            <dt>미세먼지</dt>
            <dd>{item.PM10}㎍/㎥</dd>
          </div>
          <div className={styles.item}>
            <dt>초미세먼지</dt>
            <dd>{item.PM25}㎍/㎥</dd>
          </div>
        </dl>
      </div>
    )
  }
  return null
}

export default CityInfo
