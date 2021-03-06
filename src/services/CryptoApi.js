import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const baseUrl = 'https://coinranking1.p.rapidapi.com'
const cryptoApiHeaders ={

        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
        'X-RapidAPI-Key': 'b2825139d3msheb724c60413bbe0p13a772jsnfd0fb98d8760'
    
}
 
const createRequest = (url) =>({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        })
    })
})

export const{
    useGetCryptosQuery,
    useGetCryptoDetailsQuery
} = cryptoApi;