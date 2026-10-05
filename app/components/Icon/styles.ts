import { StyleSheet } from "react-native";
import { StylesProps } from "./types";

// Dynamic style functions are intentional; StyleSheet.create only types static styles.
// @ts-expect-error
export const styles = StyleSheet.create<StylesProps>({
  icon: (width) => ({
    width,
    height: width,
    alignItems: "center",
    justifyContent: "center",
  }),
});
