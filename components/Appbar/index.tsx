import { Colors, Fonts } from "@/constants/theme";
import { rf, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackIcon from "../icons/BackIcon";
import SettingIcon from "../icons/SettingIcon";

function Appbar({
  title = "نقلة | Naqla",
  from = "home",
}: {
  title: string;
  from: "home" | "setting";
}) {
  const router = useRouter();

  function handlePress() {
    const path = from === "home" ? "/SettingsScreen" : "/";
    router.push(path);
  }
  return (
    <View style={styles.container}>
      {from === "setting" && (
        <TouchableOpacity onPress={handlePress} style={styles.btnIcon}>
          <BackIcon />
        </TouchableOpacity>
      )}
      <Text style={styles.mainLabel}>{title}</Text>

      {from === "home" && (
        <TouchableOpacity style={styles.btnIcon}>
          <SettingIcon onPress={handlePress} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mainLabel: {
    fontSize: rf(40),
    fontFamily: Fonts.TajawalBold,
    color: Colors.primaryText,
    textAlign: "center",
    width: rw(285),
  },
  btnIcon: {
    alignItems: "center",
  },
});

export default memo(Appbar);
