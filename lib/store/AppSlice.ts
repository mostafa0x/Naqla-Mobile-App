import handleChangePlayer from "@/service/handleChangePlayer";
import sortLeaderboard from "@/service/sortLeaderboard";
import { actionAddPlayer } from "@/types";
import { AppSliceType } from "@/types/AppSliceType";
import { SideType } from "@/types/GameSliceType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AppSliceType = {
  players: [
    { name: "x1", winCount: 0, loseCount: 1, drawCount: 0 },
    { name: "x2", winCount: 1, loseCount: 0, drawCount: 0 },
  ],
  player1Index: 0,
  player2Index: 1,
  Leaderborad: [],
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
    gameOver: (state, aciton) => {
      const Winnger: SideType = aciton.payload;
      if (Winnger === 1) {
        const p1 = state.players[state.player1Index];
        const p2 = state.players[state.player2Index];

        const newP1 = {
          ...p1,
          winCount: p1.winCount + 1,
        };
        const newP2 = {
          ...p2,
          loseCount: p2.loseCount + 1,
        };
        state.players[state.player1Index] = newP1;
        state.players[state.player2Index] = newP2;
      } else if (Winnger === 2) {
        const p1 = state.players[state.player1Index];
        const p2 = state.players[state.player2Index];

        const newP1 = {
          ...p1,
          loseCount: p1.loseCount + 1,
        };
        const newP2 = {
          ...p2,
          winCount: p2.winCount + 1,
        };
        state.players[state.player1Index] = newP1;
        state.players[state.player2Index] = newP2;
      }
    },
    setDraw: (state) => {
      const p1 = state.players[state.player1Index];
      const p2 = state.players[state.player2Index];
      const newP1 = {
        ...p1,
        drawCount: p1.drawCount + 1,
      };
      const newP2 = {
        ...p2,
        drawCount: p2.drawCount + 1,
      };
      state.players[state.player1Index] = newP1;
      state.players[state.player2Index] = newP2;
    },
    setLeaderboard: (state) => {
      const data = state.players;
      state.Leaderborad = sortLeaderboard(data);
    },
  },
});

export const AppReducer = AppSlice.reducer;
export const {
  addPlayer,
  changePlayersIndex,
  gameOver,
  setDraw,
  setLeaderboard,
} = AppSlice.actions;
