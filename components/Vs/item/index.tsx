import { Colors, Fonts } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function ItemVs() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.namePlayer}>ItemVs</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(121),
    height: rh(51),
    borderRadius: rw(20),
    backgroundColor: "#F1F3FC",
    justifyContent: "center",
    alignItems: "center",
  },
  namePlayer: {
    fontFamily: Fonts.TajawalBlack,
    color: Colors.secondaryText,
    fontSize: rf(24),
  },
});

export default memo(ItemVs);
