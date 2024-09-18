import { configureStore } from '@reduxjs/toolkit'
import { weatherAPI } from './weatherSlice'

export const store = configureStore({
  reducer: {
    [weatherAPI.reducerPath]: weatherAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherAPI.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch