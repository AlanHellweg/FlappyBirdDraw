import { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ContainerProps } from "./types";
import { styles } from "./styles";
import useAppTheme from "../../utils/Theme";
import { View } from "react-native";
import Cloud from "../Cloud/Cloud";

const cloudNumber = 13;

const Container = ({ children, backgroundStyles, style }: ContainerProps) => {
  const theme = useAppTheme();

  const _backgroundStyles = useMemo(() => {
    return [backgroundStyles, styles.background(theme)];
  }, [backgroundStyles, theme]);

  const _containerStyles = useMemo(() => {
    return [style, styles.container];
  }, [style]);

  const cloudWidth = useMemo(() => {
    const cloudWidth = [];
    for (let i = 0; i < cloudNumber; i++) {
      cloudWidth.push(Math.floor(Math.random() * 70) + 30);
    }
    return cloudWidth;
  }, []);

  const Clouds = useMemo(() => {
    return cloudWidth.map((width, index) => (
      <Cloud key={index} width={width} />
    ));
  }, [cloudWidth]);

  return (
    <SafeAreaView style={_backgroundStyles}>
      {Clouds}
      <View style={_containerStyles}>{children}</View>
    </SafeAreaView>
  );
};

export default Container;
