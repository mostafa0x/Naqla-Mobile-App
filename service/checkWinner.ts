import { player } from "@/types/AppSliceType";

export default function checkWinner(
  Winner: "winP1" | "winP2" | "draw" | null,
  players: player[],
  player1Index: number,
  player2Index: number
) {
  if (Winner === "winP1") {
    return `${players[player1Index].name} won`;
  } else if (Winner === "winP2") {
    return `${players[player2Index].name} won`;
  } else if (Winner === "draw") {
    return "Draw";
  }

  return "Waiting Game...";
}
