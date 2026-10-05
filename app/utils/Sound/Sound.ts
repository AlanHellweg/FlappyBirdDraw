// Sound.ts
// Preloads every sound once. Names with several files pick one at random on each play.

import { Image } from "react-native";
import Sound from "react-native-sound";
import { SoundName } from "./types";

Sound.setCategory("Ambient", true);

const SOURCES: Record<SoundName, number[]> = {
  click: [
    require("../../src/assets/sounds/clickButton1.wav"),
    require("../../src/assets/sounds/clickButton2.wav"),
  ],
  win: [require("../../src/assets/sounds/finishGame.wav")],
  gameOver: [require("../../src/assets/sounds/gameOver.wav")],
};

// react-native-sound 0.13 only accepts a path, not a require() result,
// so resolve the bundled asset to its URI first.
const loadSound = (source: number) =>
  new Sound(Image.resolveAssetSource(source).uri, "", (error) => {
    if (error) console.warn("No se pudo cargar el sonido:", error);
  });

const sounds = Object.fromEntries(
  Object.entries(SOURCES).map(([name, sources]) => [
    name,
    sources.map(loadSound),
  ])
) as Record<SoundName, Sound[]>;

export const playSound = (name: SoundName, onEnd?: () => void) => {
  const options = sounds[name];
  const sound = options[Math.floor(Math.random() * options.length)];
  if (!sound.isLoaded()) return;
  // Rewind and play right away. Waiting for stop()'s callback delays the
  // sound until the JS thread is free, which is late after a heavy render.
  sound.setCurrentTime(0);
  sound.play(() => onEnd?.());
};
