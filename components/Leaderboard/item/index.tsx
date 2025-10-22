import Rank1Icon from "@/components/icons/Rank1Icon";
import Rank2Icon from "@/components/icons/Rank2Icon";
import Rank3Icon from "@/components/icons/Rank3Icon";
import { Colors, Fonts } from "@/constants/theme";
import { ItemLeaderBoardTypes } from "@/types/ItemLeaderBoardTypes";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

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
    width: rw(125),
    height: rh(38),
  },
  botSection: {
    gap: rh(2),
  },
  labelName: {
    textAlign: "center",
    color: Colors.primaryText,
    fontFamily: Fonts.TajawalMedium,
    lineHeight: rf(30),
    fontSize: rf(25),
  },
  labelNameEdit: {
    fontSize: rf(22),
    lineHeight: rf(22),
  },

  rank1Icon: {
    alignSelf: "center",
  },
  rank2Icon: {
    paddingRight: rw(5),
  },
  rank3Icon: {
    paddingLeft: rw(5),
  },
});

export default memo(Item_LeaderBoard);
