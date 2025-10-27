import { addPlayer } from "@/lib/store/AppSlice";

export default function handelAddPlayer(
  dispatch: any,
  nameTxt: string,
  closeModel: () => void
) {
  if (nameTxt.length < 3) return undefined;
  dispatch(
    addPlayer({
      id: Date.now(),
      name: nameTxt,
      winCount: 0,
      loseCount: 0,
      drawCount: 0,
    })
  );
  closeModel();
}
