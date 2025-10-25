import MidSection from "@/components/Game/MidSection";
import SideSection from "@/components/Game/SideSection";
import GameOver from "@/components/Models/GameOver";
import SelectTIme from "@/components/Models/SelectTIme";
import SelectWinner from "@/components/Models/SelectWinner";
import { useAudioContext } from "@/context/AuidoPlayerProvider";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { gameOver } from "@/lib/store/AppSlice";
import { addToTimer, restartGame, subTime } from "@/lib/store/GameSlice";
import playTimerSounds from "@/service/playTimerSounds";
import randomEndMusic from "@/service/randomEndMusic";
import { setPlayers } from "@/service/Storage";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

export default function GameScreen() {
  const dispatch = useAppDispatch();
  const { playMusic, playSound } = useAudioContext();
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
    timerP1,
    timerP2,
    times,
  } = useAppSelector((state) => state.GameReducer);

  const [isSelectWin, setSelectWin] = useState(false);
  const [isSelectTime, setIsSelectTime] = useState(false);

  const closeSelectModel = useCallback(() => {
    setSelectWin(false);
  }, []);
  const openSelectModel = useCallback(() => {
    setSelectWin(true);
  }, []);

  const closeSelectTIme = useCallback(() => {
    setIsSelectTime(false);
  }, []);
  const openSelectTIme = useCallback(() => {
    setIsSelectTime(true);
  }, []);

  useEffect(() => {
    let time = 0;
    if (statusGame === "playing") {
      time = setInterval(() => {
        dispatch(addToTimer(turn));
        dispatch(subTime(turn));
      }, 1000);
    }

    return () => {
      clearInterval(time);
    };
  }, [statusGame, turn]);

  useEffect(() => {
    const timer = turn === 1 ? timerP1 : timerP2;
    playTimerSounds(playMusic, timer);
    return () => {};
  }, [timerP1, timerP2, turn]);

  useEffect(() => {
    if (
      statusGame === "winP1" ||
      statusGame === "winP2" ||
      statusGame === "draw"
    ) {
      statusGame === "winP1" && dispatch(gameOver(1));
      statusGame === "winP2" && dispatch(gameOver(2));
      randomEndMusic(playMusic, statusGame);
    }
    return () => {};
  }, [statusGame]);

  useEffect(() => {
    return () => {
      setPlayers(players);
    };
  }, [players]);

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
        <MidSection
          statusGame={statusGame}
          openSelectModel={openSelectModel}
          openSelectTIme={openSelectTIme}
        />
        <SideSection
          side={1}
          player={players[player1Index]}
          turn={turn}
          time={player1Time}
          statusGame={statusGame}
          moves={player1Moves}
        />
      </View>
      <GameOver
        Winner={
          statusGame === "winP1" ||
          statusGame === "winP2" ||
          statusGame === "draw"
            ? statusGame
            : null
        }
      />
      <SelectWinner
        isSelectWin={isSelectWin}
        closeSelectModel={closeSelectModel}
      />
      <SelectTIme
        isSelectTime={isSelectTime}
        closeSelectTIme={closeSelectTIme}
        playSound={playSound}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
