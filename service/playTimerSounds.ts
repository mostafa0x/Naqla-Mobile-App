import { pathSounds } from "@/types";
import randomS30Music from "./randomS30Music";
import randomS50Music from "./randomS50Music";

export default function playTimerSounds(
  playMusic: (path: pathSounds) => void,
  timer: number
) {
  if (timer === 30) {
    return playMusic(randomS30Music());
  } else if (timer === 50) {
    return playMusic(randomS50Music());
  }
  return "";
}
