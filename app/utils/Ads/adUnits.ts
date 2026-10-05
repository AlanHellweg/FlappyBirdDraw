// Production ad unit IDs from the AdMob console (Android app).
// While empty, release builds show no ads. Debug builds always use Google's test IDs.
// app.json holds Google's sample android_app_id until this app has its own.
export const AD_UNITS = {
  banner: "",
  interstitial: "",
};

// Show an interstitial once every this many finished games.
export const GAMES_PER_INTERSTITIAL = 3;
