import { createAsyncThunk } from '@reduxjs/toolkit'

export const getNewsItem = createAsyncThunk('news/newsItem', async () => {
  try {
    const res = await fetch('api/pages?type=news&id=1')
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
})

export const getNewsItems = createAsyncThunk('news/newsItems', async () => {
  try {
    const res = await fetch('api/pages?type=news')
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
})
