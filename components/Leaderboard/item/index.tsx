import { Colors, Fonts } from "@/constants/theme";
import { player } from "@/types/AppSliceType";
import { rf, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

function Item_LeaderBoard({ item, index }: { item: player; index: number }) {
  return (
    <View style={styles.contntContainer}>
      <View
        style={[
          styles.rankContainer,
          index === 1 && styles.rank1,
          index === 2 && styles.rank2,
          index === 3 && styles.rank3,
        ]}
      >
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.rankLabel}>
          {index}
        </Text>
      </View>
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.nameLabel}>
        {item.name}
      </Text>
      <Text numberOfLines={1} style={styles.contantLabel}>
        {item.winCount}
      </Text>
      <Text numberOfLines={1} style={styles.contantLabel}>
        {item.drawCount}
      </Text>
      <Text numberOfLines={1} style={styles.contantLabel}>
        {item.loseCount}
      </Text>
      <Text numberOfLines={1} style={styles.pLabel}>
        {item.points}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contntContainer: {
    flexDirection: "row",
    backgroundColor: Colors.bannaer2,
    borderRadius: rw(20),
    flexShrink: 1,
  },
  nameLabel: {
    fontFamily: Fonts.TajawalBold,
    fontSize: rf(20),
    color: Colors.placeholder,
    width: rw(60),
  },

  contantLabel: {
    fontFamily: Fonts.TajawalBold,
    fontSize: rf(20),
    color: Colors.placeholder,
    width: rw(46),
    textAlign: "center",
  },
  pLabel: {
    fontFamily: Fonts.TajawalBold,
    fontSize: rf(20),
    color: Colors.placeholder,
    width: rw(47),
    textAlign: "right",
  },
  rankContainer: {
    backgroundColor: Colors.notMyTurnBg,
    borderTopStartRadius: rw(10),
    paddingLeft: rw(6),
    marginRight: rw(8),
  },
  rankLabel: {
    fontFamily: Fonts.TajawalMedium,
    fontSize: rf(20),
    color: "#0d110dff",
    width: rw(12),
  },
  rank1: {
    backgroundColor: "#FFAA04",
  },
  rank2: {
    backgroundColor: "#9E9E9E",
  },
  rank3: {
    backgroundColor: "#FF6E04",
  },
});

export default memo(Item_LeaderBoard);
