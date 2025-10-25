import { pathSounds } from "@/types";
import { AudioContextType } from "@/types/AudioContextType";
import { sounds } from "@/utils/Sounds";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import React, { createContext, useCallback, useContext } from "react";

const AudioContext = createContext<AudioContextType>({
  audioSounds: null,
  audioMusic: null,
  statusSounds: null,
  playMusic: () => {},
  playSound: () => {},
  stopAllAudios: () => {},
  muteOrNotAllAudios: () => {},
});
export default function AuidoPlayerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioSounds = useAudioPlayer();
  const audioMusic = useAudioPlayer();
  const statusSounds = useAudioPlayerStatus(audioSounds);
  const statusMusic = useAudioPlayerStatus(audioMusic);

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

  const muteOrNotAllAudios = useCallback(() => {
    const value = audioSounds.muted ? false : true;
    audioMusic.muted = value;
    audioSounds.muted = value;
  }, []);

  return (
    <AudioContext.Provider
      value={{
        audioMusic,
        audioSounds,
        statusSounds,
        playSound,
        playMusic,
        stopAllAudios,
        muteOrNotAllAudios,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export const useAudioContext = () => useContext(AudioContext);
