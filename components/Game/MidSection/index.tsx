import { useAppDispatch } from "@/hooks/useStore";
import { setStatusGame } from "@/lib/store/GameSlice";
import { statusGame } from "@/types/GameSliceType";
import { rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";
function MidSection({ statusGame }: { statusGame: statusGame }) {
  const iconSize = 42;
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      {statusGame === "playing" ? (
        <TouchableOpacity
          onPress={() =>
            statusGame === "playing" && dispatch(setStatusGame("pause"))
          }
        >
          <Icon source={"pause"} size={rw(iconSize)} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() =>
            (statusGame === "pause" || statusGame === "waiting") &&
            dispatch(setStatusGame("playing"))
          }
        >
          <Icon source={"play"} size={rw(iconSize)} />
        </TouchableOpacity>
      )}

      <Icon source={"timer-cog-outline"} size={rw(iconSize)} />

      <Icon source={"restore"} size={rw(iconSize)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: rh(94),
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: rw(36),
  },
});

export default memo(MidSection);
