import { Colors, Fonts } from "@/constants/theme";
import { useAppDispatch } from "@/hooks/useStore";
import { formatTime } from "@/service/formatTime";
import handleChangeStatusGame from "@/service/handleChangeStatusGame";
import { SideSectionType } from "@/types/SideSectionType";
import { rf } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import NameSection from "../NameSection";

function SideSection({
  side,
  player,
  time,
  turn,
  statusGame,
}: SideSectionType) {
  const dispatch = useAppDispatch();
  return (
    <TouchableOpacity
      onPress={() =>
        turn === side && handleChangeStatusGame(dispatch, statusGame)
      }
      style={[
        styles.container,
        side === 2 && styles.containerRotate,
        turn === side && styles.myTurn,
      ]}
    >
      <NameSection label={player.name} side={side} />
      <Text style={[styles.timeLabel, side === 2 && styles.timeLabelSide2]}>
        {formatTime(time)}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.notMyTurnBg,
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  myTurn: {
    backgroundColor: Colors.myTurnBg,
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
