import { addPlayer } from "@/lib/store/AppSlice";

export default function handelAddPlayer(
  dispatch: any,
  nameTxt: string,
  closeModel: () => void
) {
  dispatch(addPlayer({ name: nameTxt, winCount: 0, loseCount: 0 }));
  closeModel();
}
