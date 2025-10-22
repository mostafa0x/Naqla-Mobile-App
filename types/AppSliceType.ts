export interface AppSliceType {
  players: player[];
  player1Index: number;
  player2Index: number;
  isChangeingPlayers: boolean;
}

export interface player {
  name: string;
  winCount: number;
  loseCount: number;
}
