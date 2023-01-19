import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import CityInfoItem from '../../CityInfo/CityInfoItem'
import { setCityNameValue } from '../../../redux/slice'
import { ICityRow } from '../../../types/City.d'
import Grade from '../Grade/Grade'
import styles from './mobileItems.module.scss'
import FavBtn from '../FavBtn/FavBtn'

interface props {
  items: ICityRow[]
}
const MobileItems = (props: props) => {
  const { items } = props
  const [cityName, setCityName] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  const handleCityInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setCityName(event.currentTarget.value)
    setIsOpen(true)
  }

  const closeReq = () => {
    setIsOpen(false)
  }
  useEffect(() => {
    dispatch(setCityNameValue(cityName))
  }, [dispatch, cityName])
  return (
    <ul className={styles.ul}>
      {items.map((data: ICityRow) => {
        if (data.IDEX_NM.length > 0) {
          return (
            <li key={data.MSRSTE_NM}>
              <button type='button' className={styles.button} onClick={handleCityInfo} value={data.MSRSTE_NM}>
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
                <FavBtn data={data} active={data.Fav} />
              </button>
              {isOpen && <CityInfoItem data={data} open={isOpen} close={closeReq} />}
            </li>
          )
        }
        return null
      })}
    </ul>
  )
}
export default MobileItems
