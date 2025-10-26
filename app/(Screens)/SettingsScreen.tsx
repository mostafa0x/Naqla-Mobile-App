import Appbar from "@/components/Appbar";
import Ellipses from "@/components/Ellipses";
import { rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  return (
    <>
      <Ellipses type={1} />
      <Ellipses type={2} />
      <View style={styles.container}>
        <Appbar title="Settings" from="setting" />
        <Text>SettingsScreen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(19),
    paddingTop: rh(55),
  },
});
