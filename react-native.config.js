module.exports = {
  assets: ["./app/src/assets/fonts"],
  dependencies: {
    // Ads are Android only for now. Skipping iOS linking avoids the startup
    // crash the SDK throws when no ios_app_id is set in app.json.
    "react-native-google-mobile-ads": {
      platforms: {
        ios: null,
      },
    },
  },
};
