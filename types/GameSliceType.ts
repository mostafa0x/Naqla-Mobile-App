export interface GameSliceType {
  player1Time: number;
  player2Time: number;
  player1Moves: number;
  player2Moves: number;
  turn: SideType;
  statusGame: statusGame;
  currTimeIndex: number;
  times: TimeType[];
}

export type statusGame = "waiting" | "playing" | "pause" | "winP1" | "winP2";

export type SideType = 1 | 2;

export type TimeType = {
  name: string;
  secounds: number;
};
