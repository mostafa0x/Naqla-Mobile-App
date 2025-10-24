import Ellipses from "@/components/Ellipses";
import LeaderBoard from "@/components/Leaderboard";
import AddPlayerModel from "@/components/Models/AddPlayerModel";
import StartButton from "@/components/StartButton";
import VS from "@/components/Vs";
import { Colors, Fonts } from "@/constants/theme";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { setLeaderboard } from "@/lib/store/AppSlice";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [modelAddPlayer, setModelAddPlayer] = useState(false);
  const { players } = useAppSelector((state) => state.AppReducer);
  const openModel = useCallback(() => {
    setModelAddPlayer(true);
  }, []);
  const closeModel = useCallback(() => {
    setModelAddPlayer(false);
  }, []);

  useEffect(() => {
    console.log(players);
    console.log(players.length);

    dispatch(setLeaderboard());
    return () => {};
  }, [players]);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Ellipses type={1} />
      <Ellipses type={2} />

      <View style={styles.container}>
        <View style={styles.topSection}>
          <View>
            <Text style={styles.mainLabel}>نقلة | Naqla</Text>
          </View>
        </View>
        <View>
          <LeaderBoard openModel={openModel} />
        </View>

        <View style={styles.sectionVs}>
          <VS />
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
  mainLabel: {
    fontSize: rf(40),
    fontFamily: Fonts.TajawalBold,
    color: Colors.primaryText,
    textAlign: "center",
  },

  sectionVs: {
    marginTop: rh(54),
  },
  startBtn: {
    alignItems: "center",
    marginTop: rh(71),
  },
});
