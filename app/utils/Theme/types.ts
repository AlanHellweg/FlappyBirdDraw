import { Theme } from "@react-navigation/native";

export type MyThemeType = Theme & {
  colors: {
    background: string;
    gray: string;
    card: string;
    border: string;
  };
  gradients: {};
};
