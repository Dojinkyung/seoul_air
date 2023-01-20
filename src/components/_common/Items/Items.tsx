import { ICityRow } from '../../../types/City.d'
import Grade from '../Grade/Grade'
import styles from './items.module.scss'
import { useEffect, useState } from 'react'
import CityInfo from '../../CityInfo/CityInfo'
import CitiesChart from '../Chart/CitiesChart'
import FavBtn from '../FavBtn/FavBtn'

interface props {
  items: ICityRow[]
}
const Items = (props: props) => {
  const { items } = props
  const show = 1
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cityItem, setCityItem] = useState<ICityRow[]>()
  useEffect(() => {
    setCityItem(items)
  }, [items])
  const next = () => {
    if (currentIndex < items.length - show) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }
  return (
    <div className={styles.carouselWrapper}>
      {currentIndex > 0 && (
        <button type='button' onClick={prev} className={styles.leftArrow}>
          &lt;
        </button>
      )}
      {currentIndex < items.length - show && (
        <button type='button' onClick={next} className={styles.rightArrow}>
          &gt;
        </button>
      )}
      <div className={styles.carouselContentWrapper}>
        <ul className={styles.carouselContent} style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}>
          {cityItem ? (
            cityItem.map((data: ICityRow) => {
              return (
                <li key={data.MSRSTE_NM}>
                  <div className={styles.head}>
                    <div className={styles.grade}>
                      <Grade item={data.IDEX_NM} />
                    </div>
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
                  </div>
                  <div className={styles.data}>
                    <CityInfo item={data} />
                  </div>
                  <div className={styles.data}>
                    <CitiesChart item={data} />
                  </div>
                  <div className={styles.favBtn}>
                    <FavBtn data={data} active={data.Fav} />
                  </div>
                </li>
              )
            })
          ) : (
            <div className={styles.noResults}>Loading</div>
          )}
        </ul>
      </div>
    </div>
  )
}
export default Items
