import { Colors, Fonts } from "@/constants/theme";
import { useAppSelector } from "@/hooks/useStore";
import { pathSounds } from "@/types";
import { rf, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ItemVs from "./item";

export default function VS({
  playSound,
}: {
  playSound: (path: pathSounds) => void;
}) {
  const { players, player1Index, player2Index } = useAppSelector(
    (state) => state.AppReducer
  );

  return (
    <View style={styles.container}>
      {players.length < 2 ? (
        <View style={styles.emptyMessContainer}>
          <Text style={styles.emptyMess}>Number of players less than two</Text>
        </View>
      ) : (
        <>
          <ItemVs
            player={players[player1Index]}
            side={1}
            playSound={playSound}
          />
          <Text style={styles.vs}>VS</Text>
          <ItemVs
            player={players[player2Index]}
            side={2}
            playSound={playSound}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: rw(20),
    gap: rw(19),
  },
  vs: {
    fontFamily: Fonts.TajawalBlack,
    fontSize: rf(36),
    color: "#fff",
  },
  emptyMessContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyMess: {
    fontFamily: Fonts.TajawalBold,
    fontSize: rf(24),
    color: Colors.placeholder,
  },
});
