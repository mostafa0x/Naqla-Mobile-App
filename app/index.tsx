import AddButton from "@/components/AddButton";
import LeaderBoard from "@/components/Leaderboard";
import AddPlayerModel from "@/components/Models/AddPlayerModel";
import VS from "@/components/Vs";
import { Colors, Fonts } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [modelAddPlayer, setModelAddPlayer] = useState(false);

  const openModel = useCallback(() => {
    setModelAddPlayer(true);
  }, []);
  const closeModel = useCallback(() => {
    setModelAddPlayer(false);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View>
            <Text style={styles.mainLabel}>اسياد اللعبه</Text>
          </View>
        </View>
        <View style={styles.sectionLeaderBoard}>
          <LeaderBoard />
        </View>
        <View style={styles.sectionAddBtn}>
          <AddButton openModel={openModel} />
        </View>
        <View style={styles.sectionVs}>
          <VS />
        </View>
      </View>
      <AddPlayerModel modelAddPlayer={modelAddPlayer} closeModel={closeModel} />
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
  sectionLeaderBoard: {},
  sectionAddBtn: {
    marginTop: rh(146),
    alignSelf: "flex-end",
  },
  sectionVs: {
    marginTop: rh(54),
  },
});
