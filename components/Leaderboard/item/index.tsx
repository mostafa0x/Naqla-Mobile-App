import { Colors, Fonts } from "@/constants/theme";
import { rf, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

function Item_LeaderBoard() {
  return (
    <View style={styles.contntContainer}>
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.nameLabel}>
        ٍBtata{" "}
      </Text>
      <Text numberOfLines={1} style={styles.contantLabel}>
        23
      </Text>
      <Text numberOfLines={1} style={styles.contantLabel}>
        2
      </Text>
      <Text numberOfLines={1} style={styles.contantLabel}>
        77
      </Text>
      <Text numberOfLines={1} style={styles.pLabel}>
        222
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
    paddingHorizontal: rw(24),
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
});

export default memo(Item_LeaderBoard);
