import { player } from "@/types/AppSliceType";

export default function handleChangePlayer(
  players: player[],
  indexPlayer: number,
  myIndex: number
) {
  let newIndex = myIndex;

  for (let i = 1, len = players.length; i < len; i++) {
    const nextIndex = (myIndex + i) % players.length;
    if (nextIndex !== myIndex && nextIndex !== indexPlayer) {
      newIndex = nextIndex;
      break;
    }
  }

  return newIndex;
}
