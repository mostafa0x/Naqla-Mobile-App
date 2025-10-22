import { setStatusGame, setTurn } from "@/lib/store/GameSlice";
import { statusGame } from "@/types/GameSliceType";

export default function handleClickSides(
  dispatch: any,
  statusGame: statusGame
) {
  if (statusGame === "playing") {
    dispatch(setTurn());
  } else if (statusGame === "pause") {
    dispatch(setStatusGame("playing"));
  } else if (statusGame === "waiting") {
    dispatch(setStatusGame("playing"));
  }
}
