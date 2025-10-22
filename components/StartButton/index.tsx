import { Colors, Fonts } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import { Router } from "expo-router";
import React, { memo, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

function StartButton({ router }: { router: Router }) {
  const handlePress = useCallback(() => router.push("/GameScreen"), [router]);

  return (
    <Button onPress={handlePress} labelStyle={styles.label} style={styles.btn}>
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
