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
        ignoreProperties: ["mask-size", "mask-repeat", "mask-image", "mask-position", "user-select"]
      }
    ]
  }
}