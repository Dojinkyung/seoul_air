import useCity from '../../services/useCity'
import dayjs from 'dayjs'
import Grade from '../../components/Grade/Grade'
import styles from './cityInfoItem.module.scss'
import { ICityRow } from '../../types/City.d'
import Chart from './Chart/Chart'
import CityInfo from './CityInfo'

const CityInfoItem = () => {
  const { dataCity } = useCity()
  if (dataCity) {
    return (
      <ul className={styles.ul}>
        {dataCity.map((data: ICityRow) => (
          <li key={data.MSRSTE_NM}>
            <div className={styles.button}>
              <Grade item={data.IDEX_NM} />
              <dl className={styles.dl}>
                <div className={styles.item}>
                  <dt>권역명</dt>
                  <dd>{data.MSRRGN_NM}</dd>
                </div>
                <div className={styles.item}>
                  <dt>측정소</dt>
                  <dd>{data.MSRSTE_NM}</dd>
                </div>
                <div className={styles.item}>
                  <dt>측정일시</dt>
                  <dd>{dayjs(data.MSRDT).format('YYYY-MM-DD HH:DD')}</dd>
                </div>
              </dl>
              <Chart item={data} />
              <CityInfo item={data} />
            </div>
          </li>
        ))}
      </ul>
    )
  }
  return null
}
export default CityInfoItem
