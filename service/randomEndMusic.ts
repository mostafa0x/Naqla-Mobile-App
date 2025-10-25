import { pathSounds } from "@/types";
import { statusGame } from "@/types/GameSliceType";
export default function randomEndMusic(
  playMusic: (path: pathSounds) => void,
  statusGame: statusGame
) {
  statusGame === "draw" ? playMusic("draw") : playMusic("win");
}
