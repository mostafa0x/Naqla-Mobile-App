import { pathSounds } from "@/types";

export default function randomMoveSound(playSound: (path: pathSounds) => void) {
  const randomNum = Math.floor(Math.random() * 2) + 1;

  return randomNum === 1 ? playSound("move") : playSound("duck");
}
