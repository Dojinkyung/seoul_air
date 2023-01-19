import { ICityRow } from '../../../types/City.d'
import Chart from './Chart'

interface props {
  item: ICityRow
}
const CitiesChart = (props: props) => {
  const { item } = props
  const data1 = [
    { x: '이산화질소', y: item.NO2, label: `${item.NO2}ppm` },
    { x: '오존', y: item.O3, label: `${item.O3}ppm` },
    { x: '일산화탄소', y: item.CO, label: `${item.CO}ppm` },
    { x: '아황산가스', y: item.SO2, label: `${item.SO2}ppm` },
  ]
  const data2 = [
    { x: '미세먼지', y: item.PM10, label: `${item.PM10}㎍/㎥` },
    { x: '초미세먼지', y: item.PM25, label: `${item.PM25}㎍/㎥` },
  ]
  return <Chart data1={data1} data2={data2} />
}
export default CitiesChart
