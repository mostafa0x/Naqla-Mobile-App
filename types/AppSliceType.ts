export interface AppSliceType {
  players: player[];
  player1: player | null;
  player2: player | null;
  Leaderborad: player[];
}

export interface player {
  id: number;
  name: string;
  winCount: number;
  loseCount: number;
  drawCount: number;
  points?: number;
}
