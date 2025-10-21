export interface ItemLeaderBoardTypes {
  userData: {
    playerName: String;
    winCount: number;
    loseCount: number;
    rank: 1 | 2 | 3;
  };
}
