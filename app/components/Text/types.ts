import { TextStyle } from "react-native";
import { MyThemeType } from "../../utils/Theme/types";

export interface TextProps {
  children: React.ReactNode;
  variant?: textVariants;
  color?: Exclude<keyof MyThemeType["colors"], "opacity">;
  align?: "center" | "left" | "right";
  style?: TextStyle;
}

type textVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "small"
  | "caption";

export interface Styles {
  color: (
    theme: MyThemeType,
    _color: Exclude<keyof MyThemeType["colors"], "opacity">
  ) => TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  h6: TextStyle;
  p: TextStyle;
  small: TextStyle;
  caption: TextStyle;
  align: (aling: "center" | "left" | "right") => TextStyle;
  style?: TextStyle;
  [key: string]: any;
}
