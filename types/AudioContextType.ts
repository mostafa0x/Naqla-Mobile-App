import { AudioPlayer, AudioStatus } from "expo-audio";
import { pathSounds } from ".";

export interface AudioContextType {
  audioSounds: AudioPlayer | null;
  audioMusic: AudioPlayer | null;
  statusSounds: AudioStatus | null;

  playSound: (path: pathSounds) => void;
  playMusic: (path: pathSounds) => void;
  stopAllAudios: () => void;
  muteOrNotAllAudios: () => void;
}
