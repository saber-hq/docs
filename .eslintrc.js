module.exports = {
  extends: ["@saberhq/eslint-config-react"],
  env: {
    browser: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "tsconfig.json",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
