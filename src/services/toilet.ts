import axios from 'axios'

const DISEASE_BASE_URL = 'http://openAPI.seoul.go.kr:8088/'

interface Params {
  START_INDEX: number
  END_INDEX: number
}

export const getDiseaseInfoAPI = (params: Params) =>
  axios({
    method: 'get',
    url: `${DISEASE_BASE_URL}`,
    params: {
      REACT_API_KEY: process.env.REACT_APP_API_KEY,
      _type: 'json',
      TYPE: `GeoInfoPublicToiletWGS`,
      ...params,
    },
  })
