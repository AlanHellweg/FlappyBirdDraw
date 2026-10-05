import { Text as RNText } from "react-native";
import { TextProps } from "./types";
import { styles } from "./styles";
import useAppTheme from "../../utils/Theme";

const Text = ({
  children,
  variant = "h4",
  color = "text",
  align = "left",
  style,
}: TextProps) => {
  const theme = useAppTheme();
  const _style = [
    styles.text,
    styles.color(theme, color),
    styles[variant],
    styles.align(align),
    style,
  ];

  return <RNText style={_style}>{children}</RNText>;
};

export default Text;
