import { pathSounds } from "@/types";
type typeNumber = 1 | 2 | 3 | 4;

export default function randomS50Music(): pathSounds {
  const randomNum: typeNumber = (Math.floor(Math.random() * 4) +
    1) as typeNumber;

  return `s50_${randomNum}`;
}
