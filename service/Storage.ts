import { loadTime } from "@/lib/store/GameSlice";
import { player } from "@/types/AppSliceType";
import { TimeType } from "@/types/GameSliceType";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setTimes(time: TimeType[]) {
  console.log(time);

  try {
    await AsyncStorage.setItem("times", JSON.stringify(time));
    console.log("saved");
  } catch (err: any) {
    console.error(err);
    throw err;
  }
}

export async function setPlayers(players: player[]) {
  try {
    await AsyncStorage.setItem("players", JSON.stringify(players));
    console.log("saved");
  } catch (err: any) {
    console.error(err);
    throw err;
  }
}

export async function getData(dispatch: any) {
  try {
    const store = await AsyncStorage.multiGet(["players", "times"]);
    const [playersRaw, timesRaw] = store.map((item) => item[1]);
    const players = JSON.parse(playersRaw ?? "[]");
    const time = JSON.parse(timesRaw ?? "[]");
    dispatch(loadTime(time));
    console.log(timesRaw);
  } catch (err: any) {
    console.error(err);
    throw err;
  }
}

export async function clearData() {
  try {
    await AsyncStorage.clear();
  } catch (err: any) {
    console.error(err);
    throw err;
  }
}
