module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom", "turbo", "eslint:recommended"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"]
  },
};
