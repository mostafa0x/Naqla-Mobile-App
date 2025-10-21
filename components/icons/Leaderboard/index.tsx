import { rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, View } from "react-native";
import Item from "./item";

export default function LeaderBoard() {
  return (
    <View style={styles.container}>
      <Item
        userData={{ playerName: "test", winCount: 2, loseCount: 1, rank: 1 }}
      />
      <View style={styles.lowRank}>
        <Item
          userData={{ playerName: "test", winCount: 2, loseCount: 1, rank: 3 }}
        />
        <Item
          userData={{ playerName: "test", winCount: 2, loseCount: 1, rank: 2 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: rh(48),
  },
  lowRank: {
    flexDirection: "row",
    gap: rw(115),
    marginTop: rh(23),
  },
});
