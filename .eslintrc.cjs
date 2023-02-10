/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript/recommended",
    "plugin:vue-scoped-css/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
