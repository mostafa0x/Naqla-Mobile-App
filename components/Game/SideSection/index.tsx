import { Colors, Fonts } from "@/constants/theme";
import { useAudioContext } from "@/context/AuidoPlayerProvider";
import { useAppDispatch } from "@/hooks/useStore";
import { formatTime } from "@/service/formatTime";
import handleClickSides from "@/service/handleClickSides";
import randomMoveSound from "@/service/randomMoveSound";
import { SideSectionType } from "@/types/SideSectionType";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function SideSection({
  side,
  player,
  time = 0,
  turn = 1,
  statusGame = "waiting",
  moves = 0,
}: SideSectionType) {
  const { playSound } = useAudioContext();
  const dispatch = useAppDispatch();

  return (
    <TouchableOpacity
      disabled={side !== turn}
      onPress={() => {
        if (turn === side) {
          randomMoveSound(playSound, moves);
          handleClickSides(dispatch, statusGame, turn);
        }
      }}
      style={[
        styles.container,
        side === 2 && styles.containerRotate,
        turn === side &&
          (statusGame === "pause" ||
          statusGame === "waiting" ||
          statusGame === "winP1" ||
          statusGame === "winP2" ||
          statusGame === "draw"
            ? styles.myTurnPause
            : styles.myTurn),
      ]}
    >
      <View style={styles.NameContainer}>
        <Text numberOfLines={1} style={styles.nameLabel}>
          {player?.name}
        </Text>
      </View>
      <View style={styles.movesContainer}>
        <Text numberOfLines={1} style={styles.movesLabel}>
          Moves: {moves}
        </Text>
      </View>
      <Text style={[styles.timeLabel, side === 2 && styles.timeLabelSide2]}>
        {formatTime(time)}
      </Text>
      {side === turn &&
        (statusGame === "pause" || statusGame === "waiting") && (
          <Text style={styles.labelStart}>Tap to Start</Text>
        )}
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
  movesContainer: {
    position: "absolute",
    right: rw(10),
    top: rh(10),
  },
  NameContainer: {
    position: "absolute",
    left: rw(10),
    top: rh(10),
  },
  nameLabel: {
    fontFamily: Fonts.TajawalBold,
    fontSize: rf(24),
    color: Colors.primaryText,
  },
  movesLabel: {
    fontFamily: Fonts.TajawalLight,
    fontSize: rf(16),
    color: Colors.primaryText,
  },
  myTurn: {
    backgroundColor: Colors.myTurnBg,
  },
  myTurnPause: {
    backgroundColor: Colors.MyTurnBgWaiting,
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
  labelStart: {
    fontFamily: Fonts.TajawalLight,
    fontSize: rf(24),
    color: Colors.secondaryText,
  },
});

export default memo(SideSection);
