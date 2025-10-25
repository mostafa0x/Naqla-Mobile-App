import { pathSounds } from "@/types";

export default function randomMoveSound(playSound: (path: pathSounds) => void) {
  const randomNum = Math.round(Math.random());

  return randomNum === 1 ? playSound("duck") : playSound("move");
}
