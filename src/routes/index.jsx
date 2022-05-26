// import styles from './routes.module.scss'

import MenuBar from '../components/Header/Header'

// import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <MenuBar />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='dashboard' element={<SecondPage />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}

export default App
