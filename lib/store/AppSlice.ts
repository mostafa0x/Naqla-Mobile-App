import handleChangePlayer from "@/service/handleChangePlayer";
import { actionAddPlayer } from "@/types";
import { AppSliceType } from "@/types/AppSliceType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AppSliceType = {
  players: [
    { name: "x1", winCount: 0, loseCount: 0 },
    { name: "x2", winCount: 0, loseCount: 0 },
    { name: "x3", winCount: 0, loseCount: 0 },
    { name: "x4", winCount: 0, loseCount: 0 },
  ],
  player1Index: 0,
  player2Index: 1,
  isChangeingPlayers: false,
};
const AppSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {
    addPlayer: (state, action: actionAddPlayer) => {
      state.players.push(action.payload);
    },
    changePlayersIndex: (state, action) => {
      const side: 1 | 2 = action.payload;

      if (side === 1) {
        state.player1Index = handleChangePlayer(
          state.players,
          state.player2Index,
          state.player1Index
        );
      } else {
        state.player2Index = handleChangePlayer(
          state.players,
          state.player1Index,
          state.player2Index
        );
      }
      // if (state.player1Index === state.player2Index) console.log("error");
    },
  },
});

export const AppReducer = AppSlice.reducer;
export const { addPlayer, changePlayersIndex } = AppSlice.actions;
