import { View } from "react-native";
import { CardProps } from "./types";
import { styles } from "./styles";
import useAppTheme from "../../utils/Theme";

const Card = ({ children, style }: CardProps) => {
  const theme = useAppTheme();
  const _style = [styles.card(theme), style];
  return <View style={_style}>{children}</View>;
};

export default Card;
