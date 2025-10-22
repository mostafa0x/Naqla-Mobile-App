import { actionAddPlayer } from "@/types";
import { AppSliceType } from "@/types/AppSliceType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AppSliceType = {
  players: [],
};
const AppSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {
    addPlayer: (state, action: actionAddPlayer) => {
      state.players.push(action.payload);
    },
  },
});

export const AppReducer = AppSlice.reducer;
export const { addPlayer } = AppSlice.actions;
