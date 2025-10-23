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
}: {
  label: string;
  type: 1 | 2;
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
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.lebel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#407BFF",
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
