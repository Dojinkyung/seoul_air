import { useQuery } from 'react-query'
import { isAxiosError } from '../utils/axios'
import { axios } from '../hooks/worker'
import { ICityRow } from '../types/City.d'

const BASE_URL = `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_API_KEY}/json/RealtimeCityAir/1/25`

const useCity = () => {
  const { data } = useQuery('getCityAirAPI', () => axios.get(BASE_URL).then((res) => res.data.RealtimeCityAir.row), {
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 10000,

    onError(err) {
      if (isAxiosError(err)) {
        // eslint-disable-next-line no-console
        console.log(err)
      }
    },
  })
  const dataCity: ICityRow[] = data
  return { dataCity }
}

export default useCity
