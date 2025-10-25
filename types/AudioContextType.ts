import { AudioPlayer } from "expo-audio";
import { pathSounds } from ".";

export interface AudioContextType {
  audioSounds: AudioPlayer | null;
  audioMusic: AudioPlayer | null;

  playSound: (path: pathSounds) => void;
  playMusic: (path: pathSounds) => void;
}
