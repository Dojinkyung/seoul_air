import styles from './routes.module.scss'
import Seoul from './Seoul'
import City from './City'
import Favorite from './Favorite'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Seoul />} />
          <Route path='city' element={<City />} />
          <Route path='favorite' element={<Favorite />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
