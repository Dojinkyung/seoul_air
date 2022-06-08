import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BarIcon, WindIcon } from '../../../assets/svgs'
import { setMenu } from '../../../redux/slice'

import Menu from '../Menu/Menu'
import styles from './headbar.module.scss'

const Header = () => {
  const [clickedButton, setClickedButton] = useState(false)
  const dispatch = useDispatch()
  const handleBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setClickedButton((current) => !current)
  }
  useEffect(() => {
    dispatch(setMenu(clickedButton))
  }, [clickedButton, dispatch])

  return (
    <>
      <div className={styles.nav}>
        <main className={styles.main}>
          <button type='button' className={styles.button} onClick={handleBtn}>
            <BarIcon />
          </button>
          <WindIcon className={styles.windIcon} />
        </main>
      </div>
      <Menu />
    </>
  )
}
export default Header
