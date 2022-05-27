import Grade from '../../../components/Grade/Grade'
import { ICityRow } from '../../../types/City.d'
import useCity from '../../../services/useCity'
import styles from './item.module.scss'

const Items = () => {
  const { dataCity } = useCity()
  if (dataCity) {
    return (
      <ul className={styles.ul}>
        {dataCity.map((data: ICityRow) => (
          <li key={data.MSRSTE_NM}>
            <button type='button' className={styles.button}>
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
              </dl>
            </button>
          </li>
        ))}
      </ul>
    )
  }
  return null
}
export default Items
