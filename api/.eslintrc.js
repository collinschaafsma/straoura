module.exports = {
  "root": true,
  "env": {
      "node": true,
  },
  "plugins": ["@typescript-eslint"],
  "extends": ["plugin:@typescript-eslint/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "project": "./tsconfig.json",
  },
  "rules": {
      "indent": "off",
      "object-curly-spacing": ["error", "always"],
      "@typescript-eslint/camelcase": ["warn"],
      "@typescript-eslint/explicit-function-return-type": [
          "warn",
          {
              "allowExpressions": true
          }
      ],
      "@typescript-eslint/indent": ["error", 2],
      "@typescript-eslint/no-unused-vars": [
          "error",
          {
              "argsIgnorePattern": "^_",
              "varsIgnorePattern": "^_"
          }
      ],
  },
};