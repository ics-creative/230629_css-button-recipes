module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order",
  ],
  rules: {
    "scss/at-mixin-pattern": null,
    "selector-class-pattern": null,
    "property-no-vendor-prefix": [
      true,
      {
        ignoreProperties: ["user-select"]
      }
    ]
  }
}
