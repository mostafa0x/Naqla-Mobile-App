import { Colors, Fonts } from "@/constants/theme";
import { rf, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

function Item_LeaderBoard() {
  return (
    <View style={styles.contntContainer}>
      <View style={styles.rankContainer}>
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.rankLabel}>
          1
        </Text>
      </View>
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.nameLabel}>
        Btata{" "}
      </Text>
      <Text numberOfLines={1} style={styles.contantLabel}>
        0
      </Text>
      <Text numberOfLines={1} style={styles.contantLabel}>
        0
      </Text>
      <Text numberOfLines={1} style={styles.contantLabel}>
        0
      </Text>
      <Text numberOfLines={1} style={styles.pLabel}>
        0
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
    width: rw(47),
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
    backgroundColor: Colors.loseCount,
    borderTopStartRadius: rw(10),
    paddingLeft: rw(6),
    marginRight: rw(8),
  },
  rankLabel: {
    fontFamily: Fonts.TajawalBold,
    fontSize: rf(20),
    color: Colors.placeholder,
    width: rw(12),
  },
});

export default memo(Item_LeaderBoard);
