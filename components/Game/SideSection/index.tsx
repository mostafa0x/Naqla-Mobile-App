import { Colors, Fonts } from "@/constants/theme";
import { SideSectionType } from "@/types/SideSectionType";
import { rf } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import NameSection from "../NameSection";

function SideSection({ side, player }: SideSectionType) {
  return (
    <View style={[styles.container, side === 2 && styles.containerRotate]}>
      <NameSection label={player.name} side={side} />
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
  containerRotate: {
    transform: [{ rotate: "179.35deg" }],
  },
  timeLabel: {
    fontFamily: Fonts.TajawalLight,
    fontSize: rf(128),
    color: Colors.primaryText,
  },
  timeLabelSide2: {},
});

export default memo(SideSection);
