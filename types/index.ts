import { player } from "./AppSliceType";
import { statusGame } from "./GameSliceType";

export interface actionAddPlayer {
  type: string;
  payload: player;
}

export interface actionTypeStatusGame {
  type: string;
  payload: statusGame;
}
