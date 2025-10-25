import { Colors, Fonts } from "@/constants/theme";
import { rf } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LoadingVS() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Loading Players...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: Fonts.TajawalBold,
    fontSize: rf(18),
    color: Colors.placeholder,
  },
});
