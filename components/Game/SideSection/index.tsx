import { SideSectionType } from "@/types/SideSectionType";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NameSection from "../NameSection";

export default function SideSection({ side }: SideSectionType) {
  return (
    <View style={styles.container}>
      <NameSection label="sasa" side={side} />
      <Text>SideSection</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 3,
  },
});
