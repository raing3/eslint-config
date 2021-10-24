module.exports = {
    'extends': ['eslint:recommended'],
    rules: {
        // The rules below are listed in the order they appear on the eslint rules page.
        // http://eslint.org/docs/rules/

        // Possible Problems
        // http://eslint.org/docs/rules/#possible-problems
        // ---------------------------------------------
        'no-console': 'error',
        'no-duplicate-imports': 'error',
        'no-extra-parens': [
            'error', 'all', {
                ignoreJSX: 'multi-line',
                returnAssign: false,
                nestedBinaryExpressions: false,
                enforceForArrowConditionals: false,
                enforceForNewInMemberExpressions: false
            }
        ],
        'no-loss-of-precision': 'error', // recommended in eslint8
        'no-promise-executor-return': 'error',
        'no-template-curly-in-string': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-optional-chaining': 'error', // recommended in eslint8
        'no-use-before-define': 'error',
        'no-useless-backreference': 'error', // recommended in eslint8
        'require-atomic-updates': 'error',

        // Suggestions
        // http://eslint.org/docs/rules/#suggestions
        // --------------------------------------------
        'accessor-pairs': 'error',
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        complexity: 'error',
        'consistent-return': 'error',
        curly: 'error',
        'default-case-last': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'default-param-last': 'error',
        'grouped-accessor-pairs': 'error',
        'init-declarations': 'error',
        'max-classes-per-file': 'error',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-constructor-return': 'error',
        'no-else-return': 'error',
        'no-empty-function': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-nonoctal-decimal-escape': 'error', // recommended in eslint8
        'no-octal-escape': 'error',
        'no-proto': 'error',
        'no-restricted-globals': ['error', 'self'],
        'no-return-assign': ['error', 'always'],
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': 'error',
        'no-throw-literal': 'error',
        'no-undef-init': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': [
            'error', {
                destructuring: 'all'
            }
        ],
        'prefer-numeric-literals': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'require-await': 'error',
        'sort-imports': ['error', { ignoreCase: true }],
        'symbol-description': 'error',
        'wrap-iife': 'error',

        // Layout & Formatting
        // https://eslint.org/docs/rules/#layout-formatting
        // ----------------------------------------------
        'array-bracket-newline': 'error',
        'array-bracket-spacing': 'error',
        'array-element-newline': ['error', 'consistent'],
        'arrow-spacing': 'error',
        'block-spacing': 'error',
        'brace-style': 'error',
        camelcase: 'error',
        'comma-dangle': 'error',
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'consistent-this': 'error',
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'func-name-matching': 'error',
        'function-call-argument-newline': ['error', 'consistent'],
        'function-paren-newline': ['error', 'multiline-arguments'],
        'generator-star-spacing': 'error',
        'id-length': [
            'error',
            { min: 3,
                exceptions: [
                    // loops
                    'e',
                    'i',
                    'j',
                    // common variable/function/import names
                    'fs',
                    'id',
                    'db',
                    'on',
                    // db
                    'up',
                    // material ui styling system: https://mui.com/system/the-sx-prop/
                    'sx',
                    'm',
                    'mt',
                    'mr',
                    'mb',
                    'ml',
                    'mx',
                    'my',
                    'p',
                    'pt',
                    'pr',
                    'pb',
                    'pl',
                    'px',
                    'py'
                ] }
        ],
        'implicit-arrow-linebreak': 'error',
        indent: ['error', 4, { SwitchCase: 1 }],
        'jsx-quotes': 'error',
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'linebreak-style': 'error',
        'lines-between-class-members': 'error',
        'max-depth': 'error',
        'max-len': ['error', 120],
        'max-nested-callbacks': 'error',
        'max-statements-per-line': 'error',
        'new-cap': ['error', { capIsNew: false }],
        'new-parens': 'error',
        'no-array-constructor': 'error',
        'no-lonely-if': 'error',
        'no-mixed-operators': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-tabs': 'error',
        'no-trailing-spaces': 'error',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-newline': 'error',
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': ['error', 'always'],
        'operator-assignment': 'error',
        'operator-linebreak': ['error', 'after'],
        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
        ],
        'prefer-object-spread': 'error',
        'quote-props': ['error', 'as-needed', { keywords: true }],
        quotes: ['error', 'single', 'avoid-escape'],
        'rest-spread-spacing': 'error',
        semi: 'error',
        'semi-spacing': 'error',
        'semi-style': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error', {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'error',
        'switch-colon-spacing': 'error',
        'template-curly-spacing': 'error',
        'template-tag-spacing': 'error',
        'unicode-bom': 'error',
        'yield-star-spacing': 'error'
    }
};
