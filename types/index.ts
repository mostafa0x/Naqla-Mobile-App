import { sounds } from "@/utils/Sounds";
import { player } from "./AppSliceType";
import { statusGame, TimeType } from "./GameSliceType";

export interface actionAddPlayer {
  type: string;
  payload: player;
}

export interface actionTypeStatusGame {
  type: string;
  payload: statusGame;
}

export interface AddTimeType {
  type: string;
  payload: TimeType;
}

export type pathSounds = keyof typeof sounds;
