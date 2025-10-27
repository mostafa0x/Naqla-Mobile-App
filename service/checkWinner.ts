import { player } from "@/types/AppSliceType";

export default function checkWinner(
  Winner: "winP1" | "winP2" | "draw" | null,
  player1: player | null,
  player2: player | null
) {
  if (Winner === "winP1") {
    return `${player1?.name} won`;
  } else if (Winner === "winP2") {
    return `${player2?.name} won`;
  } else if (Winner === "draw") {
    return "Draw";
  }

  return "Waiting Game...";
}
