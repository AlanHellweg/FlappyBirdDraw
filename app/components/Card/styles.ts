import { StyleSheet } from "react-native";
import { StylesProps } from "./types";

// Dynamic style functions are intentional; StyleSheet.create only types static styles.
// @ts-expect-error
export const styles = StyleSheet.create<StylesProps>({
  card: (theme) => ({
    padding: 16,
    backgroundColor: theme.colors.card,
    borderColor: theme.colors.border,
    borderWidth: 5,
    justifyContent: "center",
  }),
});
