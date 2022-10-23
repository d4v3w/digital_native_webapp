import { createReducer } from '@reduxjs/toolkit'
import { getNewsItem } from './actions'

export type NewsState = {
  data: { quote: string }
  pending: boolean
  error: boolean
}

const initialState: NewsState = {
  data: { quote: 'click that button' },
  pending: false,
  error: false,
}

export const newsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getNewsItem.pending, (state) => {
      state.pending = true
    })
    .addCase(getNewsItem.fulfilled, (state, { payload }) => {
      state.pending = false
      state.data = payload
    })
    .addCase(getNewsItem.rejected, (state) => {
      state.pending = false
      state.error = true
    })
})

export default newsReducer
