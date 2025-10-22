import PlayIcon from "@/components/icons/PlayIcon";
import RestartIcon from "@/components/icons/RestartIcon";
import Time from "@/components/Time";
import { rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function MidSection() {
  return (
    <View style={styles.container}>
      <PlayIcon />
      <Time label="15 د.ق" />
      <RestartIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: rh(94),
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: rw(36),
  },
});
