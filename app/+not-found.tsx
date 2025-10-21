import { rf, rh, rw } from "@/utils/dimensions";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function Notfound() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Not found Screen</Text>
      <Link href={"/"} style={styles.btn}>
        Back to Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: rh(100),
  },
  label: {
    fontSize: rf(36),
    color: "red",
    fontWeight: "bold",
  },
  btn: {
    borderRadius: rw(25),
    borderWidth: rw(1),
    padding: rw(10),
    backgroundColor: "black",
    color: "white",
    fontSize: rf(16),
  },
});
