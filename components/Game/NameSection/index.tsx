import { Colors, Fonts } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";

function NameSection({ label, side }: { label: string; side: 1 | 2 }) {
  return (
    <View style={[styles.nameContainer, side == 2 && styles.nameSide2]}>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
      <TouchableOpacity>
        <Icon source={"flag"} size={rw(42)} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nameContainer: {
    width: rw(218),
    height: rh(53),
    backgroundColor: Colors.nameBg,
    borderTopLeftRadius: rw(20),
    borderTopRightRadius: rw(20),
    alignItems: "center",
    position: "absolute",
    left: rw(87.68),
    bottom: rh(-15),
    zIndex: 9999,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: rw(15),
    flexShrink: 1,
  },
  nameSide2: {
    top: rh(-10),
    borderBottomLeftRadius: rw(20),
    borderBottomRightRadius: rw(20),
    transform: [{ rotate: "179.35deg" }],
  },
  label: {
    fontFamily: Fonts.TajawalBold,
    fontSize: rf(32),
    color: Colors.primaryText,
    width: rw(150),
    textAlign: "center",
  },
});

export default memo(NameSection);
