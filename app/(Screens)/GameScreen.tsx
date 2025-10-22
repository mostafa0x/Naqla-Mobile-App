import PlayIcon from "@/components/icons/PlayIcon";
import RestartIcon from "@/components/icons/RestartIcon";
import Time from "@/components/Time";
import { rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionTop} />
      <View style={styles.sectionMid}>
        <PlayIcon />
        <Time label="15 د.ق" />
        <RestartIcon />
      </View>
      <View style={styles.sectionBot} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    width: "100%",
  },
  sectionTop: {
    backgroundColor: "blue",
    flex: 3,
  },

  sectionMid: {
    height: rh(94),
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: rw(36),
  },
  sectionBot: {
    backgroundColor: "red",
    flex: 3,
  },
});
