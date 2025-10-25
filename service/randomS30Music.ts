import { pathSounds } from "@/types";
type typeNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export default function randomS30Music(): pathSounds {
  const randomNum: typeNumber = (Math.floor(Math.random() * 7) +
    1) as typeNumber;

  return `s30_${randomNum}`;
}
