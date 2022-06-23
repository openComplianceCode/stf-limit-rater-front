module.exports = {
  root: true,

  env: {
    node: true
  },

  plugins: ["vuetify"],

  extends: ["vuetify","plugin:vue/vue2-recommended", "prettier"],

  parserOptions: {
    parser: "babel-eslint"
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    // https://github.com/babel/babel-eslint/issues/681#issuecomment-420663038
    "template-curly-spacing": "off",
    indent: "off",
    //
    "no-unused-vars": "warn",
    "vue/script-indent": [
      "error",
      2,
      {
        baseIndent: 0,
        switchCase: 0,
        ignores: []
      }
    ],
    "vue/max-attributes-per-line": [
      "off",
      {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }
    ]
  },

  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
