import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Login, LoginResponse } from '../types/user'



export const userApiSlice = createApi({
  reducerPath: 'userApi',
  tagTypes: ['UsersPost'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
    prepareHeaders(headers) {
      headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTM1NzI4MTcsInVzZXJuYW1lIjoiYWRtaW4ifQ.Tvu6E_o3bB3YUD3BckGcynBSCSH7rAr1deNtzDRNKl0')

      return headers
    }
  }),
  endpoints: (build) => ({
    userLogin: build.mutation<LoginResponse, Login>({
      query: (body) => ({
        url: `/api/v1/auth/login`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['UsersPost'],

      transformResponse: (response: LoginResponse): LoginResponse => ({
        data: {
          username: response.data.username,
          token: response.data.token,
          userId: response.data.userId,
        },
        message: response.message
      }),

      // onQueryStarted: async (arg, { queryFulfilled, dispatch, getState }) => {
      onQueryStarted: async (queryFulfilled) => {
        try {
          const { username } = await queryFulfilled;
          // Executar ações após a mutation ser bem sucedida
          console.log('onQueryStarted => Usuario logado com sucesso:', username);
          // Por exemplo, disparar uma ação Redux
          // dispatch({ type: 'user/addSuccess', payload: user });
        } catch (error) {
          console.error("Erro ao efetuar login:", error);
        }
      }
    }),
  }),
})

export const { useUserLoginMutation } = userApiSlice