import { claerAll, loadPlayers } from "@/lib/store/AppSlice";
import { loadTime } from "@/lib/store/GameSlice";
import { player } from "@/types/AppSliceType";
import { TimeType } from "@/types/GameSliceType";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setTimes(time: TimeType[]) {
  try {
    await AsyncStorage.setItem("times", JSON.stringify(time));
  } catch (err: any) {
    console.error(err);
    throw err;
  }
}

export async function setPlayers(players: player[]) {
  try {
    await AsyncStorage.setItem("players", JSON.stringify(players));
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

    const defaultTimes = JSON.stringify([
      { name: "05m:00s", secounds: 300, id: 1 },
      { name: "10m:00s", secounds: 600, id: 2 },
      { name: "15m:00s", secounds: 900, id: 3 },
    ]);

    const time = JSON.parse(timesRaw ?? defaultTimes);

    dispatch(loadTime(time));
    dispatch(loadPlayers(players));
  } catch (err: any) {
    console.error(err);
    await clearData(dispatch);
    throw err;
  }
}

export async function clearData(dispatch: any) {
  try {
    await AsyncStorage.clear();
    dispatch(
      loadTime([
        { name: "05m:00s", secounds: 300, id: 1 },
        { name: "10m:00s", secounds: 600, id: 2 },
        { name: "15m:00s", secounds: 900, id: 3 },
      ])
    );
    dispatch(claerAll());
  } catch (err: any) {
    console.error(err);
    throw err;
  }
}
