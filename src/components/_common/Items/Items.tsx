import { StarIcon } from '../../../assets/svgs'
import { ICityRow } from '../../../types/City.d'
import Grade from '../Grade/Grade'
import styles from './items.module.scss'
import { cx } from '../../../styles'
import { useEffect, useState } from 'react'
import CityInfo from '../../CityInfo/CityInfo'
import CitiesChart from '../Chart/CitiesChart'

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
              if (data.IDEX_NM.length > 0) {
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
                    <button type='button' className={styles.favBtn}>
                      <StarIcon className={cx(styles.starIcon1, { [styles.starIcon2]: !data.Fav })} />
                    </button>
                  </li>
                )
              }
              return null
            })
          ) : (
            <div className={styles.noResults}>No Results</div>
          )}
        </ul>
      </div>
    </div>
  )
}
export default Items
