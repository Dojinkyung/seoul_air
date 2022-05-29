interface RealtimeCityAir {
  list_total_count: number
  RESULT: RESULT
  row: Row[]
}
export interface ICityRow {
  MSRDT: string
  MSRRGN_NM: string
  MSRSTE_NM: string
  PM10: number
  PM25: number
  O3: number
  NO2: number
  CO: number
  SO2: number
  IDEX_NM: string
  IDEX_MVL: number
  ARPLT_MAIN: string
  Fav?: boolean
}

interface RESULT {
  CODE: string
  MESSAGE: string
}
