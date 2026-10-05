import { View, Image, useWindowDimensions } from "react-native";
import { CloudProps } from "./types";
import { styles } from "./styles";
import useAppTheme from "../../utils/Theme";

const Cloud = ({ width }: CloudProps) => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const theme = useAppTheme();

  const image = theme.dark
    ? require("../../src/assets/images/cloud_dark.png")
    : require("../../src/assets/images/cloud_light.png");

  return (
    <View
      style={styles.cloud(
        Math.floor(Math.random() * windowHeight),
        Math.floor(Math.random() * windowWidth)
      )}
    >
      <Image source={image} style={{ width: width, height: width }} />
    </View>
  );
};

export default Cloud;
