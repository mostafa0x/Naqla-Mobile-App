import { actionTypeStatusGame, AddTimeType } from "@/types";
import { GameSliceType, SideType } from "@/types/GameSliceType";
import { createSlice } from "@reduxjs/toolkit";
const initialState: GameSliceType = {
  player1Time: 5,
  player2Time: 5,
  player1Moves: 0,
  player2Moves: 0,
  turn: 1,
  statusGame: "waiting",
  currTimeIndex: 1,
  times: [],
};
const GameSlice = createSlice({
  name: "GameSlice",
  initialState,
  reducers: {
    subTime: (state, aciton) => {
      if (state.statusGame !== "playing") return;
      const side: SideType = aciton.payload;
      if (side === 1 && state.player1Time > 0) {
        state.player1Time -= 1;
      } else if (side === 2 && state.player2Time > 0) {
        state.player2Time -= 1;
      } else if (side === 1 && state.player1Time <= 0) {
        state.statusGame = "winP2";
      } else if (side === 2 && state.player2Time <= 0) {
        state.statusGame = "winP1";
      }
    },
    setStatusGame: (state, action: actionTypeStatusGame) => {
      state.statusGame = action.payload;
    },
    setTurn: (state) => {
      const prevTurn = state.turn;
      prevTurn == 1 ? (state.player1Moves += 1) : (state.player2Moves += 1);
      state.turn = prevTurn == 1 ? 2 : 1;
    },
    restartGame: (state) => {
      state.player1Time = state.times[state.currTimeIndex].secounds;
      state.player2Time = state.times[state.currTimeIndex].secounds;
      state.player1Moves = 0;
      state.player2Moves = 0;
      state.statusGame = "waiting";
      state.turn = 1;
    },
    setCurrTimeIndex: (state, action) => {
      state.currTimeIndex = action.payload;
      state.player1Time = state.times[action.payload].secounds;
      state.player2Time = state.times[action.payload].secounds;
    },
    addTime: (state, action: AddTimeType) => {
      state.times.push(action.payload);
    },
    loadTime: (state, action) => {
      state.times = action.payload;
    },
  },
});

export const GameReducer = GameSlice.reducer;
export const {
  subTime,
  setStatusGame,
  setTurn,
  restartGame,
  setCurrTimeIndex,
  addTime,
  loadTime,
} = GameSlice.actions;
