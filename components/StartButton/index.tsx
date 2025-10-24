import { Colors, Fonts } from "@/constants/theme";
import { useAudioContext } from "@/context/AuidoPlayerProvider";
import { useAppSelector } from "@/hooks/useStore";
import { rf, rh, rw } from "@/utils/dimensions";
import { Router } from "expo-router";
import React, { memo, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

function StartButton({ router }: { router: Router }) {
  const { playAudio } = useAudioContext();

  const { players } = useAppSelector((state) => state.AppReducer);
  const active = players.length >= 2;
  const handlePress = useCallback(() => {
    playAudio("yallaBena");
    active && router.push("/GameScreen");
  }, [router, active]);
  return (
    <Button
      disabled={!active}
      onPress={handlePress}
      labelStyle={styles.label}
      style={[styles.btn, active && styles.active]}
    >
      Start Game
    </Button>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: rw(300),
    height: rh(62),
    backgroundColor: "#929090ff",
  },
  label: {
    fontFamily: Fonts.TajawalBlack,
    fontSize: rf(40),
    color: Colors.primaryText,
    lineHeight: rf(56),
  },
  active: {
    backgroundColor: Colors.startBtn,
  },
});

export default memo(StartButton);
