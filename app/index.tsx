import LeaderBoard from "@/components/icons/Leaderboard";
import { Colors, Fonts } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View>
          <Text style={styles.mainLabel}>اسياد اللعبه</Text>
        </View>
      </View>
      <LeaderBoard />
      <Link href={"/GameScreen"}>Game button</Link>
    </View>
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
});
