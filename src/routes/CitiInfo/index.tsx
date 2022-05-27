import Header from '../../components/Headbar/HeadBar'
import CityInfoItem from './CityInfoItem'

const CityInfo = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <h1>서울시 권역별 실시간 대기환경 현황 세부</h1>
      <main>
        <CityInfoItem />
      </main>
    </div>
  )
}

export default CityInfo
