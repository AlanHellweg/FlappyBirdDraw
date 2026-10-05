module.exports = {
  root: true,
  extends: "@react-native",
  ignorePatterns: ["node_modules/", "android/", "ios/", "vendor/"],
  rules: {
    // Project code uses double quotes.
    quotes: ["warn", "double", { avoidEscape: true }],
  },
};
