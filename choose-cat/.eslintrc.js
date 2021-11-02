module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:vue/recommended',
    'plugin:jest/recommended',
  ],
  plugins: [
    'nuxt',
    'vue',
    'jest',
  ],
  rules: {
    'no-debugger': ['warn'],
    'default-param-last': ['warn'],
    'comma-dangle': [
      'warn',
      'always-multiline',
    ],
    curly: ['error', 'all'],
    indent: ['warn', 2, {
      SwitchCase: 1,
    }],
    'linebreak-style': 'off',
    'max-len': ['warn', 120],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-underscore-dangle': ['error', {
      allow: ['_setOptions', '_create', '_super', '__svg__', '_events'],
      allowAfterThis: true,
    }],
    'no-param-reassign': ['error', { props: false }],
    'object-shorthand': 'off',
    'no-plusplus': 'off',
    'func-names': ['error', 'never'],
    'vars-on-top': ['error'],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'never', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'no-restricted-globals': ['warn'],
    'function-paren-newline': ['off'],
    'prefer-destructuring': [
      'warn',
      {
        object: true,
        array: false,
      },
    ],
    'no-unused-vars': [
      'warn',
    ],
    'prefer-promise-reject-errors': ['off'],
    'object-curly-newline': ['off'],
    'no-trailing-spaces': ['warn'],
    camelcase: ['warn'],
    'no-multi-spaces': ['warn'],
    'semi-style': ['warn'],
    'vue/html-closing-bracket-spacing': ['warn',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    'vue/this-in-template': ['warn'],
    'vue/html-closing-bracket-newline': [
      'warn',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/max-attributes-per-line': ['warn',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/no-side-effects-in-computed-properties': ['warn'],
    'vue/mustache-interpolation-spacing': [
      'warn',
      'always',
    ],
    'vue/require-v-for-key': ['warn'],
    'vue/return-in-computed-property': ['warn'],
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'never',
        math: 'never',
      },
    ],
    'vue/require-prop-types': ['error'],
    'vue/attributes-order': ['warn', {
      order: [
        'DEFINITION',
        'CONDITIONALS',
        'LIST_RENDERING',
        'RENDER_MODIFIERS',
        'TWO_WAY_BINDING',
        'CONTENT',
        'GLOBAL',
        'UNIQUE',
        'OTHER_ATTR',
        'EVENTS',
      ],
    }],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          [
            'delimiters',
            'comments',
          ],
          [
            'components',
            'directives',
            'filters',
          ],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          [
            'props',
            'propsData',
          ],
          'data',
          'computed',
          'LIFECYCLE_HOOKS',
          'methods',
          'watch',
          [
            'template',
            'render',
          ],
          'renderError',
        ],
      }],
    'vue/attribute-hyphenation': [
      'warn',
      'never',
    ],
    'vue/require-default-prop': ['warn'],
    'vue/html-indent': [
      'warn', 2,
      {
        attribute: 1,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignores: [],
      },
    ],
    'vue/require-valid-default-prop': ['warn'],
    'vue/valid-v-for': [1],
    'vue/valid-template-root': [1],
    'vue/v-bind-style': [1],
    'vue/v-on-style': [1],
    'vue/html-quotes': [1],
    'vue/no-multi-spaces': [1],
    'vue/no-dupe-keys': [1],
    'vue/require-prop-type-constructor': ['warn'],
    'vue/valid-v-on': [1],
    'vue/no-async-in-computed-properties': [1],
    'vue/no-parsing-error': [1],
    'no-mixed-spaces-and-tabs': [1],
    'no-tabs': [1],
    'import/extensions': [1],
    'import/no-unresolved': [2],
    'import/named': [2],
    'import/prefer-default-export': [0],
    'class-methods-use-this': [0],
    'no-multiple-empty-lines': [1],
    'operator-linebreak': [
      'warn',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
          '||': 'before',
          '&&': 'before',
        },
      },
    ],
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: [
          'webpack.config.js',
          '**/*.spec.js',
        ],
      },
    ],
    'vue/object-curly-spacing': ['error', 'always'],
  },
  overrides: [
    {
      files: [
        '*.vue',
      ],
      rules: {
        indent: 'off',
        'vue/script-indent': [
          'warn',
          2,
          {
            baseIndent: 1,
            switchCase: 1,
          },
        ],
      },
    },
    {
      files: ["cypress/**/*.spec.js"],
      rules: {
        "jest/expect-expect": "off",
      },
    },
  ],
  settings: {
    jest: {
      jestConfigFile: './jest.config.js',
    },
  },
}
