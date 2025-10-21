import { configureStore } from "@reduxjs/toolkit";
import { AppReducer } from "./AppSlice";

export const store = configureStore({
  reducer: {
    AppReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDisptach = typeof store.dispatch;
