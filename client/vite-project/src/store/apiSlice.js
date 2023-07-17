import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:8080';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUri: baseURI }),
    endpoints: builder => ({
        getCategories: builder.query({
            // get: 'http://localhost:8080/api/categories'
           query: () => '/api/categories', 
           provideTags: ['categories']
        }),

        // get labels
        getLabels: builder.query({
          // get: 'http://localhost:8080/api/labels'
            query: () => '/api/labels',
            provideTags: ['transaction']
        }),

        //add new Transaction
        addTransaction: builder.mutation({
          query: (initialTransaction) => ({
            // post: 'http://localhost:8080/api/transaction'
            uri: '/api/transaction',
            method: 'POST',
            body: initialTransaction
          })  
        }),

        // delete record
        deleteTransaction: builder.mutation({
          query: recordid => ({  
            // delete: http://localhost:8080/api/transaction'
           uri: '/api/transaction',
           method: 'DELETE',
           body: recordid  
        })
     })
  })
})

export default apiSlice;













