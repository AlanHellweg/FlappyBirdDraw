// Ads.android.ts

import mobileAds, {
  AdEventType,
  InterstitialAd,
  TestIds,
} from "react-native-google-mobile-ads";
import { AD_UNITS, GAMES_PER_INTERSTITIAL } from "./adUnits";

const interstitialId = __DEV__ ? TestIds.INTERSTITIAL : AD_UNITS.interstitial;

let interstitial: InterstitialAd | null = null;
let interstitialLoaded = false;
let finishedGames = 0;

const loadInterstitial = () => {
  if (!interstitial) return;
  interstitialLoaded = false;
  interstitial.load();
};

export const initAds = async () => {
  await mobileAds().initialize();
  if (!interstitialId) return;

  interstitial = InterstitialAd.createForAdRequest(interstitialId);
  interstitial.addAdEventListener(AdEventType.LOADED, () => {
    interstitialLoaded = true;
  });
  // Preload the next one as soon as the current one is closed.
  interstitial.addAdEventListener(AdEventType.CLOSED, loadInterstitial);
  interstitial.addAdEventListener(AdEventType.ERROR, () => {
    interstitialLoaded = false;
  });
  loadInterstitial();
};

export const registerFinishedGame = () => {
  finishedGames++;
  if (finishedGames % GAMES_PER_INTERSTITIAL !== 0) return;
  if (!interstitial || !interstitialLoaded) {
    // Skip this time and try to have one ready for the next.
    loadInterstitial();
    return;
  }
  interstitial.show();
};
