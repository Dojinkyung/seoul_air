import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { BarIcon, WindIcon } from '../../../assets/svgs'
import { setMenu } from '../../../redux/slice'

import Menu from '../Menu/Menu'
import styles from './navbar.module.scss'

const NavBar = () => {
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
    <nav className={styles.nav}>
      <div className={styles.links}>
        <button type='button' className={styles.button} onClick={handleBtn}>
          <BarIcon />
        </button>
        <NavLink to='/'>
          <WindIcon className={styles.windIcon} />
        </NavLink>
      </div>
      <Menu />
    </nav>
  )
}
export default NavBar
