import { Colors, Fonts } from "@/constants/theme";
import { rf, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

function SaveTimeBtn({
  isDis,
  nameTime,
  handleAdd,
}: {
  isDis: boolean;
  handleAdd: () => void;
  nameTime: string;
}) {
  return (
    <Button
      onPress={handleAdd}
      disabled={isDis}
      labelStyle={styles.labelBtn}
      style={[styles.btn, !isDis && nameTime.length > 0 && styles.active]}
    >
      Save
    </Button>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.placeholder,
    width: rw(70),
    alignSelf: "center",
  },
  active: {
    backgroundColor: Colors.startBtn,
  },
  labelBtn: {
    fontFamily: Fonts.TajawalBold,
    fontSize: rf(18),
    color: Colors.primaryText,
    lineHeight: rf(18),
  },
});

export default memo(SaveTimeBtn);
