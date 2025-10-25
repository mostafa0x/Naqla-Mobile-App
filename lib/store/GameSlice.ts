import getTime from "@/service/getTime";
import { actionTypeStatusGame, AddTimeType } from "@/types";
import { GameSliceType, SideType } from "@/types/GameSliceType";
import { createSlice } from "@reduxjs/toolkit";
const initialState: GameSliceType = {
  player1Time: 5,
  player2Time: 5,
  player1Moves: 0,
  player2Moves: 0,
  timerP1: 0,
  timerP2: 0,
  turn: 1,
  statusGame: "waiting",
  currTimeId: 1,
  times: [
    { name: "05m:00s", secounds: 300, id: 1 },
    { name: "10m:00s", secounds: 600, id: 2 },
    { name: "15m:00s", secounds: 900, id: 3 },
  ],
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
      const lenTimes = state.times.length;
      state.player1Time = getTime(state.times, state.currTimeId);
      state.player2Time = getTime(state.times, state.currTimeId);
      state.player1Moves = 0;
      state.player2Moves = 0;
      state.timerP1 = 0;
      state.timerP2 = 0;
      state.statusGame = "waiting";
      state.turn = 1;
    },
    setCurrTimeId: (state, action) => {
      state.currTimeId = action.payload;
      state.player1Time = getTime(state.times, action.payload);
      state.player2Time = getTime(state.times, action.payload);
    },
    addTime: (state, action: AddTimeType) => {
      state.times.push(action.payload);
    },
    deleteTime: (state, action) => {
      const timeId: number = action.payload;
      const newtimes = state.times.filter((time) => time.id !== timeId);
      state.times = newtimes;
    },
    loadTime: (state, action) => {
      state.times = action.payload;
      state.currTimeId = action.payload.length > 0 ? action.payload[0].id : 0;
      state.player1Time = getTime(state.times, state.currTimeId);
      state.player2Time = getTime(state.times, state.currTimeId);
    },
    addToTimer: (state, action) => {
      const timerId = action.payload;
      if (timerId === 1) {
        state.timerP1 += 1;
      } else if (timerId === 2) {
        state.timerP2 += 1;
      }
    },
    restartTimers: (state, action) => {
      const timerId = action.payload;
      if (timerId === 1) {
        state.timerP1 = 0;
      } else if (timerId === 2) {
        state.timerP2 = 0;
      }
    },
  },
});

export const GameReducer = GameSlice.reducer;
export const {
  subTime,
  setStatusGame,
  setTurn,
  restartGame,
  setCurrTimeId,
  addTime,
  loadTime,
  deleteTime,
  addToTimer,
  restartTimers,
} = GameSlice.actions;
