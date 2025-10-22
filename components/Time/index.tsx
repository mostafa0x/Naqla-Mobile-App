import { Colors, Fonts } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

function Time({ label = "0 د.ق" }: { label: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(144),
    height: rh(63),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5D5E5F",
    borderRadius: rw(10),
  },
  label: {
    fontFamily: Fonts.TajawalBold,
    fontSize: rf(32),
    color: Colors.primaryText,
  },
});

export default memo(Time);
