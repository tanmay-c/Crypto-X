import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    
              'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
              'x-rapidapi-key': '90552a7426msh8c8c38bc3c1f16bp1c14d6jsn9fcb12365f48'

}
const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url)=>({url , headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query: (count) =>createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),
    })
});

export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery
}=cryptoApi;




// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '90552a7426msh8c8c38bc3c1f16bp1c14d6jsn9fcb12365f48'
//     }
//   };