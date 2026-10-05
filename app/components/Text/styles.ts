import { StyleSheet } from "react-native";
import { Styles } from "./types";

// Dynamic style functions are intentional; StyleSheet.create only types static styles.
// @ts-expect-error
export const styles: Styles = StyleSheet.create<Styles>({
  color: (theme, _color) => ({
    color: theme.colors[_color],
  }),
  h1: {
    fontSize: 32,
  },
  h2: {
    fontSize: 28,
  },
  h3: {
    fontSize: 24,
  },
  h4: {
    fontSize: 20,
  },
  h5: {
    fontSize: 18,
  },
  h6: {
    fontSize: 16,
  },
  p: {
    fontSize: 14,
  },
  small: {
    fontSize: 12,
  },
  caption: {
    fontSize: 10,
  },
  align: (align) => ({
    textAlign: align,
  }),
  text: {
    fontFamily: "Silkscreen",
  },
});
