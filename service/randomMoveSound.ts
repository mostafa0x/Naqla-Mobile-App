import { pathSounds } from "@/types";
type typeNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export default function randomMoveSound(
  playSound: (path: pathSounds) => void,
  moves: number
) {
  const arr = [1, 1, 1, 2, 3];
  const randomNum = (Math.floor(Math.random() * 11) + 1) as typeNumber;
  const randomNumForPlay = arr[Math.floor(Math.random() * arr.length)];

  if (moves % 2 === 0 && moves !== 0 && randomNumForPlay === 1) {
    return playSound(`move${randomNum}`);
  } else {
    return playSound("click2");
  }
}
