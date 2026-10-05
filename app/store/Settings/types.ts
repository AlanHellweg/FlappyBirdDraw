export type ThemeMode = "system" | "light" | "dark";

export type Settings = {
  themeMode: ThemeMode;

  setThemeMode: (mode: ThemeMode) => void;
};
