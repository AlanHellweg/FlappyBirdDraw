import { View } from "react-native";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import { AD_UNITS } from "../../utils/Ads/adUnits";
import { styles } from "./styles";

const bannerId = __DEV__ ? TestIds.ADAPTIVE_BANNER : AD_UNITS.banner;

const AdBanner = () => {
  if (!bannerId) return null;
  return (
    <View style={styles.banner}>
      <BannerAd
        unitId={bannerId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
    </View>
  );
};

export default AdBanner;
