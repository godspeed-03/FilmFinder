import { createSlice } from '@reduxjs/toolkit'

export const Homesclice = createSlice({
  name: 'home',
  initialState: {
    url:{},
    genres :{}
  },
  reducers: {
    getApiConfig:(state, action) =>{
        state.url = action.payload
    },
    getGenreConfig:(state, action) =>{
        state.genres = action.payload
    }
    
  },
})

export const {getApiConfig,  getGenreConfig } = Homesclice.actions

export default Homesclice.reducer 