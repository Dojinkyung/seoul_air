import styles from './routes.module.scss'
import Seoul from './Seoul'
import City from './City'
import CityInfo from './CitiInfo'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div className={styles.app}>
      <Seoul />
      <City />
      <CityInfo />
    </div>
  )
}

export default App
