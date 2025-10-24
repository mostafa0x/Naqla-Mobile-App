import { TimeType } from "@/types/GameSliceType";

export default function getTime(times: TimeType[], currTimeId: number) {
  const data = times.find((i) => i.id === currTimeId);
  if (data) {
    return data.secounds;
  } else {
    return 600;
  }
}
