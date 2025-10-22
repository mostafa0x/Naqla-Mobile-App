import { player } from "./AppSliceType";

export interface actionAddPlayer {
  type: string;
  payload: player;
}
