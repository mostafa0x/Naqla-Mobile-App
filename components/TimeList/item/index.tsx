import { Colors, Fonts } from "@/constants/theme";
import { useAppDispatch } from "@/hooks/useStore";
import { deleteTime, restartGame, setCurrTimeId } from "@/lib/store/GameSlice";
import { TimeType } from "@/types/GameSliceType";
import { rf } from "@/utils/dimensions";
import React, { memo, useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon, RadioButton } from "react-native-paper";

function Item_TimeList({
  item,
  currTimeId,
}: {
  item: TimeType;
  currTimeId: number;
}) {
  const disptach = useAppDispatch();
  const activeBtn = item.id === currTimeId;
  const handlePress = useCallback(() => {
    disptach(restartGame());
    disptach(setCurrTimeId(item.id));
  }, []);

  const handleDelete = useCallback(() => {
    disptach(deleteTime(item.id));
  }, [item]);

  return (
    <View style={styles.upperContainer}>
      <TouchableOpacity onPress={handlePress} style={styles.container}>
        <Text style={styles.label} numberOfLines={1}>
          {item.name}
        </Text>
        <RadioButton
          color={Colors.winCount}
          uncheckedColor={Colors.placeholder}
          value={item.secounds.toString()}
          onPress={handlePress}
          status={activeBtn ? "checked" : "unchecked"}
        />
      </TouchableOpacity>
      <TouchableOpacity disabled={activeBtn} onPress={handleDelete}>
        <Icon
          source={"delete-outline"}
          size={rf(26)}
          color={activeBtn ? "#6969699d" : Colors.secondaryText}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  upperContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexShrink: 1,
    flex: 2,
  },
  label: {
    fontFamily: Fonts.TajawalMedium,
    color: Colors.primaryText,
    fontSize: rf(18),
  },
});

export default memo(Item_TimeList, (prev, next) => {
  return prev.item.id === next.item.id && prev.currTimeId === next.currTimeId;
});
