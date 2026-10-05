import { StyleSheet } from "react-native";
import { StyleProps } from "./types";

// Dynamic style functions are intentional; StyleSheet.create only types static styles.
// @ts-expect-error
export const styles = StyleSheet.create<StyleProps>({
  cloud: (top, left) => ({
    position: "absolute",
    top: top,
    left: left,
    zIndex: 1,
  }),
});
