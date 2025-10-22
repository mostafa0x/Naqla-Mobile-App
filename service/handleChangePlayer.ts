// import { player } from "@/types/AppSliceType";

// export default function handleChangePlayer(
//   player: player[],
//   indexPlayer: number,
//   myIndex: number
// ) {
//   let newIndex = myIndex;
// player.every((i)=> console.log(i);
// )
//   for (let i = myIndex, len = player.length; i < len; i++) {
//     if (i !== myIndex && i !== indexPlayer) {
//       newIndex = i;
//       return newIndex;
//     }
//   }

//   return newIndex;
// }

import { player } from "@/types/AppSliceType";

export default function handleChangePlayer(
  player: player[],
  indexPlayer: number,
  myIndex: number
) {
  let newIndex = myIndex == player.length - 1 ? 0 : myIndex;

  for (let i = newIndex, len = player.length; i < len; i++) {
    if (i !== myIndex && i !== indexPlayer) {
      newIndex = i;
      return newIndex;
    }
  }

  return newIndex === indexPlayer ? myIndex : newIndex;
}
