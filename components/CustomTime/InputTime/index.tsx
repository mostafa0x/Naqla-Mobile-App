import { Colors, Fonts } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, TextInput } from "react-native";

function CustomTime_InputTime({
  value,
  handleChange,
  type,
}: {
  value: string;
  handleChange: (text: string, type: 1 | 2) => void;
  type: 1 | 2;
}) {
  return (
    <TextInput
      keyboardType="numeric"
      maxLength={2}
      placeholder="00"
      style={styles.input}
      placeholderTextColor={styles.input.color}
      textAlign="center"
      textAlignVertical="center"
      contextMenuHidden
      value={value}
      onChangeText={(text) => handleChange(text, type)}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#252525ff",
    width: rw(30),
    height: rh(42),
    borderRadius: rw(5),
    fontFamily: Fonts.TajawalBlack,
    fontSize: rf(16),
    color: Colors.primaryText,
  },
});

export default memo(CustomTime_InputTime);
