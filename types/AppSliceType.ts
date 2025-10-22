export interface AppSliceType {
  players: player[];
}

export interface player {
  name: string;
  winCount: number;
  loseCount: number;
}
