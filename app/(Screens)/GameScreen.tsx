import MidSection from "@/components/Game/MidSection";
import SideSection from "@/components/Game/SideSection";
import { useAppSelector } from "@/hooks/useStore";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function GameScreen() {
  const { players, player1Index, player2Index } = useAppSelector(
    (state) => state.AppReducer
  );

  return (
    <View style={styles.container}>
      <SideSection side={2} player={players[player2Index]} />
      <MidSection />
      <SideSection side={1} player={players[player1Index]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
