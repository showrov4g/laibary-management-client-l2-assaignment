import type { IBook, IBorrow } from '@/type/type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IUpdateBookArgs {
    id: string;
    bookData: IBook;
}

export const bookApi = createApi({
    reducerPath: "bookAPi",
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
        // create book api 
        createBook: builder.mutation<IBook, IBook>({
            query: (bookData) => ({
                url: "/books",
                method: "POST",
                body: bookData
            }),
            invalidatesTags: ["books"],
        }),
        // update book api 
        updateBook: builder.mutation<IBook, IUpdateBookArgs>({
            query: ({ bookData, id }) => ({
                url: `/books/${id}`,
                method: "PUT",
                body: bookData
            }),
            invalidatesTags: ["books"],
        }),
        // book delete 
        deleteBook: builder.mutation<void, string>({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: [{ type: 'books' }]
        }),
        // book borrow 
        getAllBorrow: builder.query({
            query: () => ({
                url: "/borrow",
                method: "GET"
            }),
            providesTags: ["borrows"],
        }),
        // borrow book 
        createBorrow: builder.mutation<IBorrow, IBorrow>({
            query: (borrowData) => ({
                url: "/borrow",
                method: "POST",
                body: borrowData
            }),
            invalidatesTags: ["books", "borrows"],
        }),
    })
});

export const { useGetAllBookQuery, useGetSingleBookQuery, useCreateBookMutation, useUpdateBookMutation, useDeleteBookMutation, useGetAllBorrowQuery, useCreateBorrowMutation } = bookApi;