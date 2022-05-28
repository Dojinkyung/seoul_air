import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import Grade from '../../../components/Grade/Grade'
import { ICityRow } from '../../../types/City.d'
import useCity from '../../../services/useCity'
import styles from './allItem.module.scss'
import { setCityNameValue } from '../../../redux/slice'
import CityInfoItem from '../CitiInfo/CityInfoItem'
import { Star } from '../../../assets/svgs'

const AllItems = () => {
  const { dataCity } = useCity()
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

  if (dataCity) {
    return (
      <ul className={styles.ul}>
        {dataCity.map((data: ICityRow) => (
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
              {data.Fav ? <Star className={styles.star} /> : null}
            </button>
            {isOpen ? <CityInfoItem data={data} open={isOpen} close={closeReq} /> : null}
          </li>
        ))}
      </ul>
    )
  }
  return null
}
export default AllItems
