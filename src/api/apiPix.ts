import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const api = createApi({
  reducerPath: 'apiPix',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.mercadopago.com',
    prepareHeaders(headers) {
      //adicionar token do mercadopago
      headers.set('Authorization', 'Bearer TEST-767975540366454-042314-3a5caac39ce8cac3b76943ad408400bb-235810027')

      return headers
    }
  }),
  endpoints: (build) => ({
    postPix: build.mutation({
      query: (body) => ({
        url: `/v1/payments`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { usePostPixMutation } = api