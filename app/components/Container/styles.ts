import { StyleSheet } from "react-native";
import { StylesProps } from "./types";

// Dynamic style functions are intentional; StyleSheet.create only types static styles.
// @ts-expect-error
export const styles = StyleSheet.create<StylesProps>({
  background: (theme) => ({
    flex: 1,
    backgroundColor: theme.colors.background,
  }),
  container: {
    flex: 1,
    zIndex: 3000,
    // backgroundColor: "red",
    padding: 16,
  },
});
