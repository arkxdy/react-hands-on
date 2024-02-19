
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/authSclice";
import counterSlice from "./slice/counterSlice";

export const store = configureStore({
    reducer: {
        couter: counterSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;