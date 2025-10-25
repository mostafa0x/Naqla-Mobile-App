import { pathSounds } from "@/types";
import { AudioContextType } from "@/types/AudioContextType";
import { sounds } from "@/utils/Sounds";
import { useAudioPlayer } from "expo-audio";
import React, { createContext, useCallback, useContext } from "react";

const AudioContext = createContext<AudioContextType>({
  audioSounds: null,
  audioMusic: null,
  playMusic: () => {},
  playSound: () => {},
  stopAllAudios: () => {},
});
export default function AuidoPlayerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioSounds = useAudioPlayer();
  const audioMusic = useAudioPlayer();

  const playSound = useCallback((key: pathSounds) => {
    audioSounds.replace(sounds[key]);
    audioSounds.seekTo(0);
    audioSounds.play();
  }, []);

  const playMusic = useCallback((key: pathSounds) => {
    audioMusic.replace(sounds[key]);
    audioMusic.seekTo(0);
    audioMusic.play();
  }, []);

  const stopAllAudios = useCallback(() => {
    audioMusic.replace("");
    audioSounds.replace("");
  }, []);

  return (
    <AudioContext.Provider
      value={{ audioMusic, audioSounds, playSound, playMusic, stopAllAudios }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export const useAudioContext = () => useContext(AudioContext);
