import { actionTypeStatusGame } from "@/types";
import { GameSliceType } from "@/types/GameSliceType";
import { createSlice } from "@reduxjs/toolkit";
const initialState: GameSliceType = {
  player1Time: 600,
  player2Time: 600,
  player1Moves: 0,
  player2Moves: 0,
  turn: 1,
  statusGame: "waiting",
  mainTime: 1,
};
const GameSlice = createSlice({
  name: "GameSlice",
  initialState,
  reducers: {
    subTime: (state, aciton) => {
      const side: 1 | 2 = aciton.payload;
      if (side === 1 && state.player1Time > 0) {
        state.player1Time -= 1;
      } else if (side === 2 && state.player2Time > 0) {
        state.player2Time -= 1;
      }
    },
    setStatusGame: (state, action: actionTypeStatusGame) => {
      state.statusGame = action.payload;
    },
    setTurn: (state) => {
      state.turn = state.turn == 1 ? 2 : 1;
    },
  },
});

export const GameReducer = GameSlice.reducer;
export const { subTime, setStatusGame, setTurn } = GameSlice.actions;
