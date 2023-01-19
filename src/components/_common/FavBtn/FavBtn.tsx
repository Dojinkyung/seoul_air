import { useDispatch } from 'react-redux'
import { setCity } from '../../../redux/slice'
import { ICityRow } from '../../../types/City.d'
import { StarIcon } from '../../../assets/svgs'
import styles from './favBtn.module.scss'
import store from 'store'
import { useState } from 'react'

interface props {
  data: ICityRow
  active: boolean
}
const FavBtn = (props: props) => {
  const { data } = props
  const { active } = props
  const dispatch = useDispatch()
  const [fav, setFav] = useState(active)
  const handleFav = (event: { stopPropagation: () => void }) => {
    event.stopPropagation()
    if (data.Fav === false) {
      data.Fav = true
      setFav((prev) => !prev)
      store.set('fav', [...store.get('fav'), data])
      dispatch(setCity(store.get('fav')))
    } else {
      data.Fav = false
      setFav((prev) => !prev)
      store.set(
        'fav',
        [...store.get('fav')].filter((stored: ICityRow) => stored.MSRSTE_NM !== data?.MSRSTE_NM)
      )
      dispatch(setCity(store.get('fav')))
    }
  }
  return (
    <button type='button' className={styles.favBtn} onClick={handleFav}>
      <StarIcon className={fav ? `${styles.starIcon1}` : `${styles.starIcon2}`} />
    </button>
  )
}

export default FavBtn
