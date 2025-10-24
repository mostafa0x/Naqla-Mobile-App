export interface AppSliceType {
  players: player[];
  player1Index: number;
  player2Index: number;
  Leaderborad: player[];
}

export interface player {
  name: string;
  winCount: number;
  loseCount: number;
  drawCount: number;
}
