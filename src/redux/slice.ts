import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { fetchRegions } from './services/api'

const INIT_STATE = false

export interface DataState {
  menu: boolean
  cityName: string
  infoModal: boolean
}

const initialState: DataState = {
  menu: INIT_STATE,
  cityName: '',
  infoModal: INIT_STATE,
}

const reducers = {
  setMenu: (state: DataState, action: PayloadAction<boolean>) => {
    state.menu = action.payload
  },
  setCityNameValue: (state: DataState, action: PayloadAction<string>) => {
    state.cityName = action.payload
  },
  setInfoModal: (state: DataState, action: PayloadAction<boolean>) => {
    state.infoModal = action.payload
  },
}

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers,
})
export const getInfoModal = (state: DataState): boolean => state.infoModal
export const getMenu = (state: DataState): boolean => state.menu
export const getCityNameValue = (state: DataState): string => state.cityName
export default reducer
export const { setMenu, setCityNameValue, setInfoModal } = actions
