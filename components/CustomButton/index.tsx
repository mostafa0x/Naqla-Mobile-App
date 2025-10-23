import { Colors, Fonts } from "@/constants/theme";
import { useAppDispatch } from "@/hooks/useStore";
import { restartGame } from "@/lib/store/GameSlice";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function CustomButton({
  label = "Back",
  type,
  color = "#2E8B57",
  colorTxt = "#fff",
}: {
  label: string;
  type: number;
  color?: string;
  colorTxt?: string;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handlePress = () => {
    if (type === 1) {
      router.replace("/");
    } else if (type === 2) {
      dispatch(restartGame());
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
    fontSize: rf(18),
    color: Colors.primaryText,
  },
});

export default memo(CustomButton);
