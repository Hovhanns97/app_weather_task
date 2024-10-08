import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

export interface SearchState {
  search: string
}

const initialState: SearchState = {
  search: '',
}

export const searchSlice = createSlice({
  name: 'serach',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
        state.search = action.payload
    }
  },
})

export const { setSearch } = searchSlice.actions

export default searchSlice.reducer