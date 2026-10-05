import { Pressable, View } from "react-native";
import { ButtonProps } from "./types";
import Text from "../Text";
import { styles } from "./styles";
import useAppTheme from "../../utils/Theme";
import { playSound } from "../../utils/Sound";

const Button = ({
  children,
  variant = "contained",
  color = "primary",
  disabled = false,
  textProps,
  onPress,
}: ButtonProps) => {
  const theme = useAppTheme();

  const _buttonStyle = ({ pressed }: { pressed: boolean }) => [
    styles.button,
    pressed
      ? styles[`button_${variant}_pressed`](theme, color)
      : styles[`button_${variant}${disabled ? "_disabled" : ""}`](theme, color),
  ];

  const _onPress = () => {
    playSound("click");
    onPress?.();
  };

  return (
    <View style={styles.background(theme)}>
      <Pressable style={_buttonStyle} disabled={disabled} onPress={_onPress}>
        <Text {...textProps}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
