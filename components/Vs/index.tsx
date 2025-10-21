import { Fonts } from "@/constants/theme";
import { rf, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ItemVs from "./item";

export default function VS() {
  return (
    <View style={styles.container}>
      <ItemVs />
      <Text style={styles.vs}>VS</Text>
      <ItemVs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: rw(20),
    gap: rw(19),
  },
  vs: {
    fontFamily: Fonts.TajawalBlack,
    fontSize: rf(36),
    color: "#E51B1B",
  },
});
