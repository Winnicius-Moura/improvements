import { configureStore } from "@reduxjs/toolkit"
import { userApiSlice } from "../api/userApi.slice"
import { api } from "../api/apiPix"


export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApiSlice.middleware, api.middleware)
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>