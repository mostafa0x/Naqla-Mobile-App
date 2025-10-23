import MidSection from "@/components/Game/MidSection";
import SideSection from "@/components/Game/SideSection";
import SelectWinner from "@/components/Models/SelectWinner";
import WiningModel from "@/components/Models/WiningModel";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { gameOver } from "@/lib/store/AppSlice";
import { restartGame, subTime } from "@/lib/store/GameSlice";
import React, { useCallback, useEffect, useState } from "react";
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

  const [isSelectWin, setSelectWin] = useState(false);

  const closeSelectModel = useCallback(() => {
    setSelectWin(false);
  }, []);
  const openSelectModel = useCallback(() => {
    setSelectWin(true);
  }, []);

  useEffect(() => {
    let time = 0;
    if (statusGame === "playing") {
      time = setInterval(() => {
        dispatch(subTime(turn));
      }, 1000);
    }
    console.log(statusGame);

    return () => {
      clearInterval(time);
    };
  }, [statusGame, turn]);

  useEffect(() => {
    if (statusGame === "winP1") {
      dispatch(gameOver(1));
    } else if (statusGame === "winP2") {
      dispatch(gameOver(2));
    }
    return () => {};
  }, [statusGame]);

  useEffect(() => {
    return () => {
      dispatch(restartGame());
    };
  }, []);

  return (
    <>
      <View style={styles.container}>
        <SideSection
          side={2}
          player={players[player2Index]}
          turn={turn}
          time={player2Time}
          statusGame={statusGame}
          moves={player2Moves}
        />
        <MidSection statusGame={statusGame} openSelectModel={openSelectModel} />
        <SideSection
          side={1}
          player={players[player1Index]}
          turn={turn}
          time={player1Time}
          statusGame={statusGame}
          moves={player1Moves}
        />
      </View>
      <WiningModel
        Winner={
          statusGame === "winP1" || statusGame === "winP2" ? statusGame : null
        }
      />
      <SelectWinner
        isSelectWin={isSelectWin}
        closeSelectModel={closeSelectModel}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
