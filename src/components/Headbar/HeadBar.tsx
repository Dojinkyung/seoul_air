import { useState } from 'react'
import { Bar, Wind } from '../../assets/svgs'
import styles from './headbar.module.scss'

const Header = () => {
  const [clickedButton, setClickedButton] = useState(false)

  const handleBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setClickedButton((current) => !current)
  }
  return (
    <div className={styles.nav}>
      <main className={styles.main}>
        <button type='button' className={styles.button} onClick={handleBtn}>
          <Bar />
        </button>
        <Wind className={styles.windIcon} />
      </main>
    </div>
  )
}
export default Header
