import * as React from "react";
import Svg, { Path } from "react-native-svg";

// Each color is a single Path built from 40px pixel blocks.
// One node per color renders much faster than one Rect per pixel.
const FlagIconDark = () => {
  return (
    <Svg viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
      <Path
        fill="hsl(0, 0%, 90%)"
        d="M320 120h40v40h-40zM320 160h40v40h-40zM320 200h40v40h-40zM320 240h40v40h-40zM320 280h40v40h-40zM320 320h40v40h-40zM320 360h40v40h-40zM320 400h40v40h-40zM320 440h40v40h-40zM320 480h40v40h-40zM320 520h40v40h-40zM320 560h40v40h-40zM240 600h40v40h-40zM280 600h40v40h-40zM320 600h40v40h-40zM320 600h40v40h-40zM360 600h40v40h-40zM400 600h40v40h-40zM160 640h40v40h-40zM200 640h40v40h-40zM240 640h40v40h-40zM280 640h40v40h-40zM320 640h40v40h-40zM360 640h40v40h-40zM400 640h40v40h-40zM440 640h40v40h-40zM480 640h40v40h-40z"
      />
      <Path
        fill="hsl(0, 75%, 50%)"
        d="M360 160h40v40h-40zM400 160h40v40h-40zM360 200h40v40h-40zM400 200h40v40h-40zM440 200h40v40h-40zM480 200h40v40h-40zM360 240h40v40h-40zM400 240h40v40h-40zM440 240h40v40h-40zM480 240h40v40h-40zM520 240h40v40h-40zM560 240h40v40h-40zM360 280h40v40h-40zM400 280h40v40h-40zM440 280h40v40h-40zM480 280h40v40h-40zM520 280h40v40h-40zM560 280h40v40h-40zM600 280h40v40h-40zM360 320h40v40h-40zM400 320h40v40h-40zM440 320h40v40h-40zM480 320h40v40h-40zM520 320h40v40h-40zM560 320h40v40h-40zM360 360h40v40h-40zM400 360h40v40h-40zM440 360h40v40h-40zM480 360h40v40h-40zM360 400h40v40h-40zM400 400h40v40h-40z"
      />
    </Svg>
  );
};

export default FlagIconDark;
