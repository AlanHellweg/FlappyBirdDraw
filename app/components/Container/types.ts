import { ViewStyle } from "react-native";
import { MyThemeType } from "../../utils/Theme/types";

export interface ContainerProps {
  children: React.ReactNode;
  backgroundStyles?: ViewStyle;
  style?: ViewStyle;
}

export type StylesProps = {
  background: (theme: MyThemeType) => ViewStyle;
  container: ViewStyle;
  [key: string]: any;
};
