import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import store from 'store'

import styles from './cityInfoItem.module.scss'
import Chart from './Chart/Chart'
import CityInfo from './CityInfo'
import { ICityRow } from '../../types/City.d'
import { getCityNameValue, setCity } from '../../redux/slice'
import { cx } from '../../styles'
import { Star, XIcon } from '../../assets/svgs'
import Grade from '../Grade/Grade'

interface props {
  data: ICityRow
  open: boolean
  close: () => void
}
const CityInfoItem = (props: props) => {
  const cityName = useSelector(getCityNameValue)
  const dispatch = useDispatch()
  const { data, open, close } = props
  const handleFav = () => {
    if (data.Fav === false) {
      data.Fav = true
      store.set('fav', [...store.get('fav'), data])
      dispatch(setCity(store.get('fav')))
    } else {
      data.Fav = false
      store.set(
        'fav',
        [...store.get('fav')].filter((fav: ICityRow) => fav.MSRSTE_NM !== data?.MSRSTE_NM)
      )
      dispatch(setCity(store.get('fav')))
    }
    close()
  }
  if (data.MSRSTE_NM === cityName) {
    return (
      <div className={cx({ [styles.bg]: open })}>
        <div className={cx({ [styles.modalActive]: open })}>
          <div className={styles.head}>
            <button type='button' onClick={close} className={styles.backBTN}>
              <XIcon className={styles.backIcon} />
            </button>
            <button type='button' onClick={handleFav} className={styles.favBTN}>
              <Star className={cx(styles.starIcon1, { [styles.starIcon2]: !data.Fav })} />
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
              <dd>{dayjs(data.MSRDT).format('YYYY-MM-DD HH:mm')}</dd>
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
