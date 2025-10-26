import { Colors, Fonts } from "@/constants/theme";
import { useAppDispatch } from "@/hooks/useStore";
import { setDraw } from "@/lib/store/AppSlice";
import { restartGame, setStatusGame } from "@/lib/store/GameSlice";
import { clearData } from "@/service/Storage";
import { pathSounds } from "@/types";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function CustomButton({
  label = "Back",
  type,
  color = "#2E8B57",
  colorTxt = "#fff",
  closeSelectModel,
  playSound,
}: {
  label: string;
  type: number;
  color?: string;
  colorTxt?: string;
  closeSelectModel?: () => void;
  playSound?: (path: pathSounds) => void;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handlePress = async () => {
    playSound && playSound("click");
    if (type === 1) {
      router.replace("/");
    } else if (type === 2) {
      dispatch(restartGame());
    } else if (type === 3) {
      dispatch(setStatusGame("winP1"));
      closeSelectModel && closeSelectModel();
    } else if (type === 4) {
      dispatch(setDraw());
      dispatch(setStatusGame("draw"));
      // dispatch(restartGame());

      closeSelectModel && closeSelectModel();
    } else if (type === 5) {
      dispatch(setStatusGame("winP2"));
      closeSelectModel && closeSelectModel();
    } else if (type === 6) {
      await clearData(dispatch);
    }
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.container, { backgroundColor: color }]}
    >
      <Text style={[styles.lebel, { color: colorTxt }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(124),
    height: rh(49),
    borderRadius: rw(20),
    justifyContent: "center",
    alignItems: "center",
  },
  lebel: {
    fontFamily: Fonts.TajawalBold,
    fontSize: rf(20),
    color: Colors.primaryText,
  },
});

export default memo(CustomButton);
