import { player } from "@/types/AppSliceType";

export default function sortLeaderboard(data: player[]) {
  const newData = data.map((p) => {
    const total = p.winCount * 1 + p.drawCount * 0.5;
    return (p.points = total);
  });
  const sortData = data.sort((a, b) => {
    const aa = a.points ?? -Infinity;
    const bb = b.points ?? -Infinity;
    return bb - aa;
  });
  return sortData;
}
