import { configureStore } from "@reduxjs/toolkit"
import { userApiSlice } from "../api/userApi.slice"
import { api } from "../api/apiPix"
import userInfoReducer from './reducers/userInfo.slice';
import loadingBarReducer from './reducers/loadingBar.slice'


export const store = configureStore({
  reducer: {
    loadingBarState: loadingBarReducer,
    userInfo: userInfoReducer,
    [api.reducerPath]: api.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApiSlice.middleware, api.middleware)
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>