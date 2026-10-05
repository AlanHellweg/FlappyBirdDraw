import { ViewStyle } from "react-native";
import { MyThemeType } from "../../utils/Theme/types";

export interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export type StylesProps = {
  card: (theme: MyThemeType) => ViewStyle;
  [key: string]: any;
};
