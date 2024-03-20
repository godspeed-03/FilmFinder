import { configureStore } from '@reduxjs/toolkit'

import Homesclice from './Homesclice'

export const store = configureStore({
  reducer: {
    home : Homesclice
  },
})