import useCityConvert from '../../../services/useCityConvert'
import Items from '../../../components/Items/Items'

const AllItems = () => {
  const { dataCityConvert } = useCityConvert()

  if (dataCityConvert) {
    return <Items items={dataCityConvert} />
  }
  return null
}
export default AllItems
