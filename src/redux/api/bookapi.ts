import type { IBook, IBorrow } from '@/type/type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IUpdateBookArgs {
    id: string;
    bookData: IBook;
}

export const bookapi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://library-management-api-pearl.vercel.app/api" }),
    tagTypes: ["books", "borrows"],
    endpoints: (builder) => ({
        getAllBook: builder.query({
            query: () => ({
                url: "/books",
                method: "GET"
            }),
            providesTags: ["books"],
        }),
        getSingleBook: builder.query({
            query: (id) => ({
                url: `/books/${id}`,
                method: "GET"
            }),
            providesTags: (id) => [{ type: 'books', id }],
        }),
       
    })
});

export const { useGetAllBookQuery, useGetSingleBookQuery, useCreateBookMutation, useUpdateBookMutation, useDeleteBookMutation, useGetAllBorrowQuery, useCreateBorrowMutation } = bookapi;