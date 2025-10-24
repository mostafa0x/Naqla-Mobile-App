import { pathSounds } from "@/types";
import { AudioContextType } from "@/types/AudioContextType";
import { sounds } from "@/utils/Sounds";
import { useAudioPlayer } from "expo-audio";
import React, { createContext, useCallback, useContext } from "react";

const AudioContext = createContext<AudioContextType>({
  audio: null,
  playAudio: () => {},
});
export default function AuidoPlayerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const audio = useAudioPlayer();

  const playAudio = useCallback(
    (key: pathSounds) => {
      audio.replace(sounds[key]);
      audio.seekTo(0);
      audio.play();
    },
    [audio]
  );

  return (
    <AudioContext.Provider value={{ audio, playAudio }}>
      {children}
    </AudioContext.Provider>
  );
}

export const useAudioContext = () => useContext(AudioContext);
