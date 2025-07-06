import { configureStore } from "@reduxjs/toolkit";
import { bookapi } from "./api/bookapi";

export const store = configureStore({
    reducer: {
        [bookapi.reducerPath]: bookapi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bookapi.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch