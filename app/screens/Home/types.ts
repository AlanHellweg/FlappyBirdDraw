import { TextStyle, ViewStyle } from "react-native";

export interface StylesProp {
  container: ViewStyle;
  card: ViewStyle;
  contTitle: ViewStyle;
  title: TextStyle;
  contButton: ViewStyle;
  copyright: TextStyle;
  [key: string]: any;
}
