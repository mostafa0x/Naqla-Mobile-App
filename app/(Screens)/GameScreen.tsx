import MidSection from "@/components/Game/MidSection";
import SideSection from "@/components/Game/SideSection";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { subTime } from "@/lib/store/GameSlice";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

export default function GameScreen() {
  const dispatch = useAppDispatch();
  const { players, player1Index, player2Index } = useAppSelector(
    (state) => state.AppReducer
  );
  const {
    player1Time,
    player2Time,
    statusGame,
    turn,
    player1Moves,
    player2Moves,
  } = useAppSelector((state) => state.GameReducer);

  useEffect(() => {
    let time = 0;
    if (statusGame === "playing") {
      time = setInterval(() => {
        dispatch(subTime(turn));
      }, 1000);
    }
    return () => {
      clearInterval(time);
    };
  }, [statusGame, turn]);

  return (
    <View style={styles.container}>
      <SideSection
        side={2}
        player={players[player2Index]}
        turn={turn}
        time={player2Time}
        statusGame={statusGame}
        moves={player2Moves}
      />
      <MidSection statusGame={statusGame} />
      <SideSection
        side={1}
        player={players[player1Index]}
        turn={turn}
        time={player1Time}
        statusGame={statusGame}
        moves={player1Moves}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
