import { ICityRow } from '../types/City.d'
import useCity from './useCity'
import store from 'store'

const useCityConvert = () => {
  const { dataCity } = useCity()
  if (dataCity) {
    const map = new Map()
    for (const character of dataCity) {
      map.set(JSON.stringify(character), character)
    }
    const tmp: ICityRow[] = Array.from(map.values())

    tmp.map((air: ICityRow) =>
      store.get('fav').find((fav: ICityRow) => fav.MSRSTE_NM === air.MSRSTE_NM)
        ? Object.assign(air, { Fav: true })
        : Object.assign(air, { Fav: false })
    )
    const dataCityConvert: ICityRow[] = tmp
    return { dataCityConvert }
  }
  return { dataCity }
}
export default useCityConvert
