import { AudioPlayer } from "expo-audio";
import { pathSounds } from ".";

export interface AudioContextType {
  audio: AudioPlayer | null;
  playAudio: (path: pathSounds) => void;
}
