import PlayIcon from "@/components/icons/PlayIcon";
import RestartIcon from "@/components/icons/RestartIcon";
import Time from "@/components/Time";
import { useAppDispatch } from "@/hooks/useStore";
import { setStatusGame } from "@/lib/store/GameSlice";
import { statusGame } from "@/types/GameSliceType";
import { rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";
function MidSection({ statusGame }: { statusGame: statusGame }) {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      {statusGame === "playing" ? (
        <TouchableOpacity onPress={() => dispatch(setStatusGame("pause"))}>
          <Icon source={"pause"} size={rw(40)} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => dispatch(setStatusGame("playing"))}>
          <PlayIcon />
        </TouchableOpacity>
      )}
      <Time label="15 د.ق" />
      <RestartIcon />
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
