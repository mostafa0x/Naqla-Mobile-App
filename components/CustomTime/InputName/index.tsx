import { Colors, Fonts } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, TextInput } from "react-native";
function CustomTime_InputName({
  nameTime,
  setNameTime,
}: {
  nameTime: string;
  setNameTime: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <TextInput
      maxLength={50}
      placeholder={"Time Name..."}
      style={styles.inputName}
      placeholderTextColor={styles.input.color}
      contextMenuHidden
      value={nameTime}
      onChangeText={setNameTime}
    />
  );
}

const styles = StyleSheet.create({
  inputName: {
    backgroundColor: "#252525ff",
    width: rw(120),
    height: rh(42),
    borderRadius: rw(5),
    fontFamily: Fonts.TajawalMedium,
    fontSize: rf(16),
    color: Colors.primaryText,
  },
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

export default memo(CustomTime_InputName);
