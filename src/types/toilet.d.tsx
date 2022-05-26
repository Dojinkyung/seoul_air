export interface IGeoInfoPublicToiletWGS {
  list_total_count: number
  RESULT: RESULT
  row: IRow[]
}

export interface IRow {
  OBJECTID: number
  GU_NM: string
  HNR_NAM: string
  MTC_AT: string
  MASTERNO: string
  SLAVENO: string
  NEADRES_NM: string
  CREAT_DE: string
  LAT: string
  LNG: string
}

interface RESULT {
  CODE: string
  MESSAGE: string
}
