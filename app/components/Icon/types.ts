import { ViewStyle } from "react-native";
import { IconsList } from "../../src/assets/icons";

export interface IconProps {
  icon: IconsList;
  width?: number;
  height?: number;
  iconStyles?: ViewStyle;
}

export type StylesProps = {
  icon: (witdh: number) => ViewStyle;
  [key: string]: any;
};
