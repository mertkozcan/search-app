import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: [],
  reducers: {
    searchAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    searchToggled(state, action) {
      const search = state.find(search => search.id === action.payload)
      search.completed = !search.completed
    }
  }
})

export const { searchAdded, searchToggled } = searchSlice.actions
export default searchSlice.reducer