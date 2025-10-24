import { Colors, Fonts } from "@/constants/theme";
import { useAppDispatch } from "@/hooks/useStore";
import { restartGame, setCurrTimeIndex } from "@/lib/store/GameSlice";
import { TimeType } from "@/types/GameSliceType";
import { rf } from "@/utils/dimensions";
import React, { useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";

export default function Item_TimeList({
  item,
  index,
  currTimeIndex,
}: {
  item: TimeType;
  index: number;
  currTimeIndex: number;
}) {
  const disptach = useAppDispatch();
  const handlePress = useCallback(() => {
    disptach(restartGame());
    disptach(setCurrTimeIndex(index));
  }, []);

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.label} numberOfLines={1}>
        {item.name}
      </Text>
      <RadioButton
        color={Colors.winCount}
        uncheckedColor={Colors.placeholder}
        value={item.secounds.toString()}
        status={index === currTimeIndex ? "checked" : "unchecked"}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexShrink: 1,
  },
  label: {
    fontFamily: Fonts.TajawalMedium,
    color: Colors.primaryText,
    fontSize: rf(18),
  },
});
