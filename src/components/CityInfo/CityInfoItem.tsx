import { useDispatch, useSelector } from 'react-redux'
import store from 'store'

import styles from './cityInfoItem.module.scss'
import CityInfo from './CityInfo'
import { ICityRow } from '../../types/City.d'
import { getCityNameValue, setCity } from '../../redux/slice'

import { StarIcon, XIcon } from '../../assets/svgs'
import Grade from '../_common/Grade/Grade'
import { cx } from '../../styles'
import CitiesChart from '../_common/Chart/CitiesChart'
import FavBtn from '../_common/FavBtn/FavBtn'

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
            <FavBtn data={data} active={data.Fav} />
          </div>
          <Grade item={data.IDEX_NM} />
          <CityInfo item={data} />
          <CitiesChart item={data} />
        </div>
      </div>
    )
  }
  return null
}
export default CityInfoItem
