import { Colors } from "@/constants/theme";
import { useAppDispatch } from "@/hooks/useStore";
import { restartGame, setStatusGame } from "@/lib/store/GameSlice";
import { statusGame } from "@/types/GameSliceType";
import { rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";
function MidSection({
  statusGame,
  openSelectModel,
  openSelectTIme,
}: {
  statusGame: statusGame;
  openSelectModel: () => void;
  openSelectTIme: () => void;
}) {
  const iconSize = 32;
  const iconColor = Colors.secondaryText;
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      {statusGame === "playing" ? (
        <TouchableOpacity
          onPress={() =>
            statusGame === "playing" && dispatch(setStatusGame("pause"))
          }
        >
          <Icon source={"pause"} color={iconColor} size={rw(iconSize)} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() =>
            (statusGame === "pause" || statusGame === "waiting") &&
            dispatch(setStatusGame("playing"))
          }
        >
          <Icon source={"play"} color={iconColor} size={rw(iconSize)} />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={() => {
          statusGame === "playing" && dispatch(setStatusGame("pause"));
          openSelectModel();
        }}
      >
        <Icon source={"progress-check"} color={iconColor} size={rw(iconSize)} />
      </TouchableOpacity>
      <TouchableOpacity onPress={openSelectTIme}>
        <Icon
          source={"timer-cog-outline"}
          color={iconColor}
          size={rw(iconSize)}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dispatch(restartGame())}>
        <Icon source={"restore"} color={iconColor} size={rw(iconSize)} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: rh(94),
    backgroundColor: Colors.bg,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: rw(36),
  },
});

export default memo(MidSection);
