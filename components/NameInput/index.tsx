import { Colors } from "@/constants/theme";
import { rf, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PlusIcon from "../icons/PlusIcon";

export default function NameInput() {
  return (
    <View style={styles.container}>
      <View style={styles.secContainer}>
        <PlusIcon />
        <TextInput
          placeholderTextColor={Colors.placeholder}
          style={styles.input}
          placeholder="الاسم"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  secContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#6F6D6D",
    width: rw(312),
    paddingHorizontal: rw(11),
  },
  input: {
    textAlign: "right",
    color: Colors.primaryText,
    fontSize: rf(32),
  },
});
