export interface GameSliceType {
  player1Time: number;
  player2Time: number;
  player1Moves: number;
  player2Moves: number;
  turn: 1 | 2;
  statusGame: statusGame;
}

export type statusGame = "waiting" | "playing" | "pause";
