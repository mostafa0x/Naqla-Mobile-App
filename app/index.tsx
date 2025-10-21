import Item_LeaderBoard from "@/components/icons/Leaderboard/item";
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
      <View style={{ flexDirection: "row" }}>
        <Item_LeaderBoard
          userData={{ playerName: "Test", winCount: 4, loseCount: 2, rank: 1 }}
        />
      </View>

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
