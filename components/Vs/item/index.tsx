import { Colors, Fonts } from "@/constants/theme";
import { useAppDispatch } from "@/hooks/useStore";
import { changePlayersIndex } from "@/lib/store/AppSlice";
import { pathSounds } from "@/types";
import { player } from "@/types/AppSliceType";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo, useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";

function ItemVs({
  player,
  side,
  playSound,
}: {
  player: player;
  side: 1 | 2;
  playSound: (path: pathSounds) => void;
}) {
  const dispatch = useAppDispatch();

  const handlePress = useCallback(() => {
    playSound("click");
    dispatch(changePlayersIndex(side));
  }, []);

  return (
    <View style={styles.upperContainer}>
      <Icon
        source={"chess-queen"}
        color={side === 1 ? "#fff" : "#000000ff"}
        size={rf(42)}
      />
      <TouchableOpacity onPress={handlePress} style={styles.container}>
        <Text style={styles.namePlayer}>{player.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  upperContainer: {
    alignItems: "center",
  },
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
