import { useEffect, useMemo } from "react";
import { View } from "react-native";
import { IconProps } from "./types";
import { Icons } from "../../src/assets/icons";
import { styles } from "./styles";

const Icon = ({ icon, width, iconStyles }: IconProps) => {
  const Component = useMemo(() => Icons[icon], [icon]);

  useEffect(() => {
    if (!Component) {
      console.warn("No existe un Icon con el nombre:", icon);
    }
  }, [Component, icon]);

  const _iconStyles = useMemo(() => {
    return [styles.icon(width || 30), iconStyles];
  }, [width, iconStyles]);

  if (!Component) {
    return null;
  }

  return (
    <View style={_iconStyles}>
      <Component />
    </View>
  );
};
export default Icon;
