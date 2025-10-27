import { player } from "@/types/AppSliceType";

export default function handleChangePlayer(
  players: player[],
  otherPlayer: player | null,
  myPlayer: player | null
) {
  const myPIndex = players.findIndex((el) => el.id === myPlayer?.id);
  const otherPIndex = players.findIndex((el) => el.id === otherPlayer?.id);

  let newPlayer = null;

  for (let i = 1, len = players.length; i < len; i++) {
    const nextIndex = (myPIndex + i) % players.length;
    if (nextIndex !== myPIndex && nextIndex !== otherPIndex) {
      newPlayer = players[nextIndex];
      break;
    }
  }

  return newPlayer ? newPlayer : myPlayer;
}
