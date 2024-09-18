import { configureStore } from '@reduxjs/toolkit'
import { weatherAPI } from './weatherSlice'
import  searchReducer from './searchslice'

export const store = configureStore({
  reducer: {
    [weatherAPI.reducerPath]: weatherAPI.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherAPI.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch