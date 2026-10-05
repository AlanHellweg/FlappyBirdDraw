import { StyleSheet } from "react-native";
import { StylesProps } from "./types";

// Every variant uses the same border width so switching variants keeps the button size.
// Dynamic style functions are intentional; StyleSheet.create only types static styles.
// @ts-expect-error
export const styles = StyleSheet.create<StylesProps>({
  background: (theme) => ({
    backgroundColor: theme.colors.gray,
  }),

  button_contained: (theme, color) => ({
    backgroundColor: theme.colors[color],
    borderColor: theme.colors[color],
    borderWidth: 3,
  }),
  button_contained_pressed: (theme, color) => ({
    top: 0,
    left: 0,
    backgroundColor: theme.colors[color],
    borderColor: theme.colors[color],
    borderWidth: 3,
  }),
  button_contained_disabled: (theme, color) => ({
    backgroundColor: theme.colors[color],
    borderColor: theme.colors[color],
    borderWidth: 3,
    opacity: 0.5,
    top: 0,
    left: 0,
  }),
  button_outlined: (theme, color) => ({
    borderColor: theme.colors[color],
    borderWidth: 3,
  }),
  button_outlined_pressed: (theme, color) => ({
    top: 0,
    left: 0,
    borderColor: theme.colors[color],
    borderWidth: 3,
  }),
  button_outlined_disabled: (theme, color) => ({
    borderColor: theme.colors[color],
    borderWidth: 3,
    opacity: 0.5,
    top: 0,
    left: 0,
  }),
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    position: "relative",
    top: 4,
    left: 4,
  },
});
