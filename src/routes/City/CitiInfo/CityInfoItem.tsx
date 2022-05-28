import dayjs from 'dayjs'
import { useSelector } from 'react-redux'

import styles from './cityInfoItem.module.scss'
import Chart from './Chart/Chart'
import CityInfo from './CityInfo'
import { getCityNameValue } from '../../../redux/slice'
import { ICityRow } from '../../../types/City.d'
import { cx } from '../../../styles'
import { XIcon } from '../../../assets/svgs'
import Grade from '../../../components/Grade/Grade'

interface props {
  data: ICityRow
  open: boolean
  close: () => void
}
const CityInfoItem = (props: props) => {
  const cityName = useSelector(getCityNameValue)
  const { data, open, close } = props

  if (data.MSRSTE_NM === cityName) {
    return (
      <div className={cx({ [styles.bg]: open })}>
        <div className={cx({ [styles.modalActive]: open })}>
          <div className={styles.head}>
            <button type='button' onClick={close} className={styles.backBTN}>
              <XIcon className={styles.backIcon} />
            </button>
          </div>
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
      </div>
    )
  }
  return null
}
export default CityInfoItem
