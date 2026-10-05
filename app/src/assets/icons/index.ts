import { IconProps } from "../../../components/Icon/types";
import BombIconDark from "./BombDark";
import BombIconLight from "./BombLight";
import ConfigIconDark from "./ConfigDark";
import ConfigIconLight from "./ConfigLight";
import FlagIconDark from "./FlagDark";
import FlagIconLight from "./FlagLight";

export type IconsList =
  | "bombIcon_light"
  | "bombIcon_dark"
  | "configIcon_light"
  | "configIcon_dark"
  | "flagIcon_light"
  | "flagIcon_dark";

export const Icons: {
  [key: string]: React.FC<Omit<IconProps, "icon">>;
} = {
  bombIcon_light: BombIconLight,
  bombIcon_dark: BombIconDark,
  configIcon_light: ConfigIconLight,
  configIcon_dark: ConfigIconDark,
  flagIcon_light: FlagIconLight,
  flagIcon_dark: FlagIconDark,
};
