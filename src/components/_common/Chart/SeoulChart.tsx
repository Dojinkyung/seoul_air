import { IRow } from '../../../types/Seoul.d'
import Chart from './Chart'

interface props {
  item: IRow
}
const SeoulChart = (props: props) => {
  const { item } = props
  const data1 = [
    { x: '이산화질소', y: item.NITROGEN, label: `${item.NITROGEN}ppm` },
    { x: '오존', y: item.OZONE, label: `${item.OZONE}ppm` },
    { x: '일산화탄소', y: item.CARBON, label: `${item.CARBON}ppm` },
    { x: '아황산가스', y: item.SULFUROUS, label: `${item.SULFUROUS}ppm` },
  ]
  const data2 = [
    { x: '미세먼지', y: item.PM10, label: `${item.PM10}㎍/㎥` },
    { x: '초미세먼지', y: item.PM25, label: `${item.PM25}㎍/㎥` },
  ]
  return <Chart data1={data1} data2={data2} />
}
export default SeoulChart
