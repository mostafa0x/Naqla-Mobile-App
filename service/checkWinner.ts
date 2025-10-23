import { player } from "@/types/AppSliceType";

export default function checkWinner(
  Winner: "winP1" | "winP2" | null,
  players: player[],
  player1Index: number,
  player2Index: number
) {
  if (Winner === "winP1") {
    return players[player1Index].name;
  } else if (Winner === "winP2") {
    return players[player2Index].name;
  }

  return "Waiting Game...";
}
