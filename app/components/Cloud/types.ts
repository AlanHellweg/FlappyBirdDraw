import { ViewStyle } from "react-native";

export interface CloudProps {
  width: number;
}

export type StyleProps = {
  cloud: (top: number, left: number) => ViewStyle;
  [key: string]: any;
};
