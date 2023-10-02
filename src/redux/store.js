import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

export const store = configureStore({
    reducer: {
        spend: productSlice,
    },
});