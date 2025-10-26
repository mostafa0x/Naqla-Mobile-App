import Appbar from "@/components/Appbar";
import Ellipses from "@/components/Ellipses";
import LeaderBoard from "@/components/Leaderboard";
import AddPlayerModel from "@/components/Models/AddPlayerModel";
import StartButton from "@/components/StartButton";
import VS from "@/components/Vs";
import LoadingVS from "@/components/Vs/Loading";
import { useAudioContext } from "@/context/AuidoPlayerProvider";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { setLeaderboard } from "@/lib/store/AppSlice";
import { clearData } from "@/service/Storage";
import { rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Suspense, useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { stopAllAudios, playSound } = useAudioContext();
  const [modelAddPlayer, setModelAddPlayer] = useState(false);
  const { players } = useAppSelector((state) => state.AppReducer);
  const openModel = useCallback(() => {
    setModelAddPlayer(true);
  }, []);
  const closeModel = useCallback(() => {
    setModelAddPlayer(false);
  }, []);

  useEffect(() => {
    dispatch(setLeaderboard());
    return () => {};
  }, [players]);

  useEffect(() => {
    stopAllAudios();
    const clear = async () => {
      clearData(dispatch);
    };
    // clear();
    return () => {};
  }, []);

  return (
    <>
      <Ellipses type={1} />
      <Ellipses type={2} />

      <View style={styles.container}>
        <View style={styles.topSection}>
          <Appbar title="نقلة | Naqla" from="home" playSound={playSound} />
        </View>
        <View>
          <LeaderBoard openModel={openModel} playSound={playSound} />
        </View>

        <View style={styles.sectionVs}>
          <Suspense fallback={<LoadingVS />}>
            <VS from="home" playSound={playSound} />
          </Suspense>
        </View>
        <View style={styles.startBtn}>
          <StartButton router={router} />
        </View>
      </View>
      <AddPlayerModel modelAddPlayer={modelAddPlayer} closeModel={closeModel} />
      <StatusBar style="light" backgroundColor="black" hidden={true} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(19),
    paddingTop: rh(55),
  },
  topSection: {
    alignContent: "center",
    justifyContent: "center",
  },

  sectionVs: {
    marginTop: rh(54),
  },
  startBtn: {
    alignItems: "center",
    marginTop: rh(71),
  },
});
