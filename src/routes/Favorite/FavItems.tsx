import Items from '../../components/Items/Items'
import useCityConvert from '../../services/useCityConvert'

const FavItems = () => {
  const { dataCityConvert } = useCityConvert()
  const filtered = dataCityConvert?.filter((item) => item.Fav === true)
  if (filtered) {
    return <Items items={filtered} />
  }
  return null
}
export default FavItems
