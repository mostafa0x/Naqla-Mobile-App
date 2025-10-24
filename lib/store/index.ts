import { configureStore } from "@reduxjs/toolkit";
import { AppReducer } from "./AppSlice";
import { GameReducer } from "./GameSlice";

export const store = configureStore({
  reducer: {
    AppReducer,
    GameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDisptach = typeof store.dispatch;
