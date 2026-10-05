import { Dimensions, StyleSheet } from "react-native";
import { StylesProp } from "./types";

export const styles = StyleSheet.create<StylesProp>({
  container: {
    justifyContent: "center",
  },
  card: {
    gap: 10,
    width: "100%",
    paddingVertical: 20,
  },
  contTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 40,
  },
  title: {
    marginRight: 10,
  },
  contButton: {
    width: "100%",
    gap: 20,
  },
  copyright: {
    position: "absolute",
    width: Dimensions.get("window").width,
    top: Dimensions.get("window").height * 0.9,
  },
});
