import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { getMenu } from '../../../redux/slice'
import { cx } from '../../../styles'
import styles from './menu.module.scss'

const Menu = () => {
  const menu = useSelector(getMenu)
  if (menu) {
    return (
      <div className={styles.nav}>
        <NavLink className={({ isActive }) => cx(styles.navBtn, { [styles.isActive]: isActive })} to='/'>
          서울시
        </NavLink>
        <NavLink className={({ isActive }) => cx(styles.navBtn, { [styles.isActive]: isActive })} to='/city'>
          지역별
        </NavLink>
        <NavLink className={({ isActive }) => cx(styles.navBtn, { [styles.isActive]: isActive })} to='/favorite'>
          즐겨찾기
        </NavLink>
      </div>
    )
  }
  return null
}
export default Menu
