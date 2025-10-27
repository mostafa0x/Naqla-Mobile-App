import handleChangePlayer from "@/service/handleChangePlayer";
import sortLeaderboard from "@/service/sortLeaderboard";
import { actionAddPlayer } from "@/types";
import { AppSliceType } from "@/types/AppSliceType";
import { SideType } from "@/types/GameSliceType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AppSliceType = {
  players: [],
  player1: null,
  player2: null,
  Leaderborad: [],
};
const AppSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {
    addPlayer: (state, action: actionAddPlayer) => {
      if (!state.player1) {
        state.player1 = action.payload;
      } else if (!state.player2) {
        state.player2 = action.payload;
      }
      state.players.push(action.payload);
    },
    changePlayersIndex: (state, action) => {
      const side: 1 | 2 = action.payload;

      if (side === 1) {
        state.player1 = handleChangePlayer(
          state.players,
          state.player2,
          state.player1
        );
      } else {
        state.player2 = handleChangePlayer(
          state.players,
          state.player1,
          state.player2
        );
      }
    },
    gameOver: (state, aciton) => {
      const Winnger: SideType = aciton.payload;
      const p1Index = state.players.findIndex(
        (el, i) => el.id === state.player1Id
      );
      const p2Index = state.players.findIndex(
        (el, i) => el.id === state.player2Id
      );

      if (Winnger === 1) {
        const p1 = state.players[p1Index];
        const p2 = state.players[p2Index];

        const newP1 = {
          ...p1,
          winCount: p1.winCount + 1,
        };
        const newP2 = {
          ...p2,
          loseCount: p2.loseCount + 1,
        };
        state.players[p2Index] = newP1;
        state.players[p2Index] = newP2;
      } else if (Winnger === 2) {
        const p1Index = state.players.findIndex(
          (el, i) => el.id === state.player1Id
        );
        const p2Index = state.players.findIndex(
          (el, i) => el.id === state.player2Id
        );

        const p1 = state.players[p1Index];
        const p2 = state.players[p2Index];
        const newP1 = {
          ...p1,
          loseCount: p1.loseCount + 1,
        };
        const newP2 = {
          ...p2,
          winCount: p2.winCount + 1,
        };
        state.players[p1Index] = newP1;
        state.players[p2Index] = newP2;
      }
    },
    setDraw: (state) => {
      const p1Index = state.players.findIndex(
        (el, i) => el.id === state.player1Id
      );
      const p2Index = state.players.findIndex(
        (el, i) => el.id === state.player2Id
      );

      const p1 = state.players[p1Index];
      const p2 = state.players[p2Index];

      const newP1 = {
        ...p1,
        drawCount: p1.drawCount + 1,
      };
      const newP2 = {
        ...p2,
        drawCount: p2.drawCount + 1,
      };
      state.players[p1Index] = newP1;
      state.players[p2Index] = newP2;
    },
    setLeaderboard: (state) => {
      const data = state.players;
      state.Leaderborad = sortLeaderboard(data);
    },
    loadPlayers: (state, action) => {
      state.players = action.payload;
      state.player1 = state.players[0];
      state.player2 = state.players[1];
    },
    claerAll: (state) => {
      state.players = [];
      state.Leaderborad = [];
      state.player1Id = 0;
      state.player2Id = 1;
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
  loadPlayers,
  claerAll,
} = AppSlice.actions;
