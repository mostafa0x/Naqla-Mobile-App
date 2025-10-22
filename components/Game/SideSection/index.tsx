import { SideSectionType } from "@/types/SideSectionType";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SideSection({}: SideSectionType) {
  return (
    <View style={styles.container}>
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
