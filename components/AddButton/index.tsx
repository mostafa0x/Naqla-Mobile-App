import { Colors, Fonts } from "@/constants/theme";
import { pathSounds } from "@/types";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import PlusIcon from "../icons/PlusIcon";
function AddButton({
  openModel,
  playSound,
}: {
  openModel: () => void;
  playSound: (path: pathSounds) => void;
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        playSound("click");
        openModel();
      }}
      style={styles.container}
    >
      <PlusIcon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: rh(12),
    width: rw(24),
    height: rw(24),
    backgroundColor: Colors.bannaer,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: rw(10),
  },
  btn: {
    width: rw(90),
    height: rh(39),
    borderRadius: rw(20),
  },
  label: {
    fontSize: rf(16),
    lineHeight: rf(18),
    fontFamily: Fonts.TajawalBold,
    color: Colors.primaryText,
    paddingTop: rh(5),
  },
});

export default memo(AddButton);
