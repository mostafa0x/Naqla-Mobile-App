import { restartTimers, setStatusGame, setTurn } from "@/lib/store/GameSlice";
import { SideType, statusGame } from "@/types/GameSliceType";

export default function handleClickSides(
  dispatch: any,
  statusGame: statusGame,
  turn: SideType
) {
  if (statusGame === "playing") {
    dispatch(restartTimers(turn));
    dispatch(setTurn());
  } else if (statusGame === "pause") {
    dispatch(setStatusGame("playing"));
  } else if (statusGame === "waiting") {
    dispatch(setStatusGame("playing"));
  }
}
