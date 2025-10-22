import { Colors, Fonts } from "@/constants/theme";
import { SideSectionType } from "@/types/SideSectionType";
import { rf } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NameSection from "../NameSection";

export default function SideSection({ side }: SideSectionType) {
  return (
    <View
      style={[
        styles.container,
        side === 2 && { transform: [{ rotate: "179.35deg" }] },
      ]}
    >
      <NameSection label="sasa" side={side} />
      <Text style={[styles.timeLabel, side === 2 && styles.timeLabelSide2]}>
        10 : 50
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  timeLabel: {
    fontFamily: Fonts.TajawalLight,
    fontSize: rf(128),
    color: Colors.primaryText,
  },
  timeLabelSide2: {},
});
