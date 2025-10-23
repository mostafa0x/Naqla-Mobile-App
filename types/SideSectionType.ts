import { player } from "./AppSliceType";
import { statusGame } from "./GameSliceType";

export interface SideSectionType {
  side: 1 | 2;
  player: player;
  time: number;
  turn: 1 | 2;
  statusGame: statusGame;
  moves: number;
}
