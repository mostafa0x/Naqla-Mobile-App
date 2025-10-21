import { Colors, Fonts } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

function StartButton() {
  return (
    <Button labelStyle={styles.label} style={styles.btn}>
      يلا بينا
    </Button>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: rw(300),
    height: rh(62),
    backgroundColor: Colors.startBtn,
  },
  label: {
    fontFamily: Fonts.TajawalBlack,
    fontSize: rf(40),
    color: Colors.primaryText,
    lineHeight: rf(42),
  },
});

export default memo(StartButton);
