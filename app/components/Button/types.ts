import { ViewStyle } from "react-native";
import { MyThemeType } from "../../utils/Theme/types";
import { TextProps } from "../Text/types";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: buttonVariants;
  color?: Exclude<keyof MyThemeType["colors"], "opacity">;
  disabled?: boolean;
  textProps?: Omit<TextProps, "children">;
  onPress?: () => void;
}

export type buttonVariants = "contained" | "outlined";

export type StylesProps = {
  background: (theme: MyThemeType) => ViewStyle;
  button_contained: (
    theme: MyThemeType,
    color: Exclude<keyof MyThemeType["colors"], "opacity">
  ) => ViewStyle;
  button_contained_pressed: (
    theme: MyThemeType,
    color: Exclude<keyof MyThemeType["colors"], "opacity">
  ) => ViewStyle;
  button_contained_disabled: (
    theme: MyThemeType,
    color: Exclude<keyof MyThemeType["colors"], "opacity">
  ) => ViewStyle;
  button_outlined: (
    theme: MyThemeType,
    color: Exclude<keyof MyThemeType["colors"], "opacity">
  ) => ViewStyle;
  button_outlined_pressed: (
    theme: MyThemeType,
    color: Exclude<keyof MyThemeType["colors"], "opacity">
  ) => ViewStyle;
  button_outlined_disabled: (
    theme: MyThemeType,
    color: Exclude<keyof MyThemeType["colors"], "opacity">
  ) => ViewStyle;
  button: ViewStyle;
  [key: string]: any;
};
