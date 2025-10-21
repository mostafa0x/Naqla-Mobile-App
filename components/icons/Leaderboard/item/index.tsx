import { Colors, Fonts } from "@/constants/theme";
import { ItemLeaderBoardTypes } from "@/types/ItemLeaderBoardTypes";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import Rank1Icon from "../../Rank1Icon";
import Rank2Icon from "../../Rank2Icon";
import Rank3Icon from "../../Rank3Icon";

function Item_LeaderBoard({
  userData: { playerName = "empty", winCount = 0, loseCount = 0, rank = 1 },
}: ItemLeaderBoardTypes) {
  const checkIcon = useMemo(
    () =>
      rank === 1
        ? styles.rank1Icon
        : rank === 2
        ? styles.rank2Icon
        : styles.rank3Icon,
    [rank]
  );
  return (
    <View style={styles.container}>
      <View style={checkIcon}>
        {rank === 1 && <Rank1Icon />}
        {rank === 2 && <Rank2Icon />}
        {rank === 3 && <Rank3Icon />}
      </View>
      <View style={[styles.topSection, rank !== 1 && styles.topSectionEdit]}>
        <Text style={[styles.labelName, rank !== 1 && styles.labelNameEdit]}>
          {playerName}
        </Text>
      </View>
      <View style={styles.botSection}>
        <View style={styles.winBar}>
          <Text style={styles.count}>{winCount}</Text>
        </View>
        <View style={styles.loseBar}>
          <Text style={styles.count}>{loseCount}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  topSection: {
    paddingVertical: rw(10),
    backgroundColor: Colors.bannaer,
    borderRadius: rw(20),
    width: rw(125),
    height: rh(49),
    marginBottom: rh(6),
  },
  topSectionEdit: {
    width: rw(81),
    height: rh(38),
  },
  botSection: {
    gap: rh(2),
  },
  labelName: {
    textAlign: "center",
    color: Colors.primaryText,
    fontFamily: Fonts.TajawalMedium,
    lineHeight: rh(30),
    fontSize: rh(25),
  },
  labelNameEdit: {
    fontSize: rh(15),
    lineHeight: rh(18),
  },
  winBar: {
    width: rw(87),
    height: rh(14),
    backgroundColor: Colors.winCount,
    borderRadius: rw(5),
  },
  loseBar: {
    width: rw(87),
    height: rh(14),
    backgroundColor: Colors.loseCount,
    borderRadius: rw(5),
  },
  count: {
    color: Colors.primaryText,
    fontFamily: Fonts.TajawalBlack,
    fontSize: rf(10),
    textAlign: "center",
  },
  rank1Icon: {
    alignSelf: "center",
  },
  rank2Icon: {
    alignSelf: "flex-end",
  },
  rank3Icon: {
    alignSelf: "flex-start",
  },
});

export default memo(Item_LeaderBoard);
