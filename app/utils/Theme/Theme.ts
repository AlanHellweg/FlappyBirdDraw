// Theme.tsx

import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { MyThemeType } from "./types";
import { useColorScheme } from "react-native";
import { useSettings } from "@store";

export const MyLightTheme: MyThemeType = {
  ...DefaultTheme,
  gradients: {},
  colors: {
    ...DefaultTheme.colors,
    background: "#7aefff",
    gray: "#a1a1a1",
    primary: "#f4f4f4",
    card: "#ffffff",
    border: "#e0e0e0",
  },
};

export const MyDarkTheme: MyThemeType = {
  ...DarkTheme,
  gradients: {
    primary: ["#121212", "#1e1e1e"],
  },
  colors: {
    ...DarkTheme.colors,
    background: "#909090",
    gray: "#5e5e5e",
    primary: "#1c1c1c",
    card: "#121212",
    border: "#e1e1e1",
  },
};

export const useAppTheme = () => {
  const systemScheme = useColorScheme();
  const themeMode = useSettings((state) => state.themeMode);
  const colorScheme = themeMode === "system" ? systemScheme : themeMode;
  return colorScheme === "dark" ? MyDarkTheme : MyLightTheme;
};
