import MidSection from "@/components/Game/MidSection";
import SideSection from "@/components/Game/SideSection";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <SideSection />
      <MidSection />
      <SideSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
