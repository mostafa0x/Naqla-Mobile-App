import { Colors, Fonts } from "@/constants/theme";
import { useAppDispatch } from "@/hooks/useStore";
import { formatTime } from "@/service/formatTime";
import handleClickSides from "@/service/handleClickSides";
import { SideSectionType } from "@/types/SideSectionType";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NameSection from "../NameSection";

function SideSection({
  side,
  player,
  time = 0,
  turn = 1,
  statusGame = "waiting",
  moves = 0,
}: SideSectionType) {
  const dispatch = useAppDispatch();
  return (
    <>
      <NameSection label={player.name} side={side} />
      <TouchableOpacity
        disabled={side !== turn}
        onPress={() => turn === side && handleClickSides(dispatch, statusGame)}
        style={[
          styles.container,
          side === 2 && styles.containerRotate,
          turn === side && styles.myTurn,
        ]}
      >
        <View style={styles.movesContainer}>
          <Text numberOfLines={1} style={styles.movesLabel}>
            Moves:{moves}
          </Text>
        </View>
        <Text style={[styles.timeLabel, side === 2 && styles.timeLabelSide2]}>
          {formatTime(time)}
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.notMyTurnBg,
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  movesContainer: {
    position: "absolute",
    right: rw(10),
    top: rh(10),
  },
  movesLabel: {
    fontFamily: Fonts.TajawalLight,
    fontSize: rf(16),
    color: Colors.primaryText,
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
