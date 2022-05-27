import { useQuery } from 'react-query'
import { isAxiosError } from '../utils/axios'
import { axios } from '../hooks/worker'
import { IRow } from '../types/Seoul.d'

const BASE_URL = `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_API_KEY}/json/ListAvgOfSeoulAirQualityService/1/1`

const useSeoul = () => {
  const { data } = useQuery(
    'getSeoulAirAPI',
    () => axios.get(BASE_URL).then((res) => res.data.ListAvgOfSeoulAirQualityService.row[0]),
    {
      refetchOnWindowFocus: false,
      refetchInterval: 60 * 10000,

      onError(err) {
        if (isAxiosError(err)) {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      },
    }
  )
  const dataSeoul: IRow = data
  return { dataSeoul }
}

export default useSeoul
