import { setStatusGame, setTurn } from "@/lib/store/GameSlice";
import { statusGame } from "@/types/GameSliceType";

export default function handleChangeStatusGame(
  dispatch: any,
  statusGame: statusGame
) {
  if (statusGame === "playing") {
    dispatch(setTurn());
  } else if (statusGame === "pause") {
    dispatch(setStatusGame("playing"));
  }
  console.log("x");
}
