import { Colors, Fonts } from "@/constants/theme";
import { useAppDispatch } from "@/hooks/useStore";
import { changePlayersIndex } from "@/lib/store/AppSlice";
import { player } from "@/types/AppSliceType";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function ItemVs({ player, side }: { player: player; side: 1 | 2 }) {
  const dispatch = useAppDispatch();

  return (
    <TouchableOpacity
      onPress={() => dispatch(changePlayersIndex(side))}
      style={styles.container}
    >
      <Text style={styles.namePlayer}>{player.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(121),
    height: rh(51),
    borderRadius: rw(20),
    backgroundColor: Colors.bannaer,
    justifyContent: "center",
    alignItems: "center",
  },
  namePlayer: {
    fontFamily: Fonts.TajawalBlack,
    color: Colors.secondaryText,
    fontSize: rf(24),
  },
});

export default memo(ItemVs);
