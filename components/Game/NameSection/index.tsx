import { Colors, Fonts } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

function NameSection({ label, side }: { label: string; side: 1 | 2 }) {
  return (
    <View style={[styles.nameContainer, side == 2 && styles.nameSide2]}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nameContainer: {
    width: rw(218),
    height: rh(53),
    backgroundColor: Colors.nameBg,
    borderTopLeftRadius: rw(20),
    borderTopRightRadius: rw(20),

    alignItems: "center",
    position: "absolute",
    left: rw(87.68),
    bottom: rh(-15),
  },
  nameSide2: {
    top: rh(-20),
    justifyContent: "flex-end",
    borderBottomLeftRadius: rw(20),
    borderBottomRightRadius: rw(20),
  },
  label: {
    fontFamily: Fonts.TajawalBold,
    fontSize: rf(32),
    color: Colors.primaryText,
  },
});

export default memo(NameSection);
