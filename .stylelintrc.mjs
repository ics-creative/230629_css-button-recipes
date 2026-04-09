export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "selector-class-pattern": null,
  },
  overrides: [
    {
      files: ["**/*.html"],
      customSyntax: "postcss-html",
    },
  ],
};
