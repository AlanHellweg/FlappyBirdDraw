import { create } from "zustand";
import { Settings } from "./types";

export const useSettings = create<Settings>((set) => ({
  themeMode: "system",

  setThemeMode: (mode) => set({ themeMode: mode }),
}));
