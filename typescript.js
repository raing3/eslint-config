module.exports = {
    rules: {
        // TypeScript
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: ['camelCase']
            },
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE']
            },
            {
                selector: 'parameter',
                format: ['camelCase']
            },
            {
                selector: 'memberLike',
                modifiers: ['private'],
                format: ['camelCase']
            },
            {
                selector: 'typeLike',
                format: ['PascalCase']
            },
            {
                selector: 'enumMember',
                format: ['PascalCase']
            },
            {
                selector: 'property',
                format: ['camelCase', 'UPPER_CASE']
            }
        ],
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/no-unused-vars-experimental': ['error', { ignoreArgsIfArgsAfterAreUsed: true }],
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/unified-signatures': 'error',

        // Extension Rules
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules
        'brace-style': 'error',
        '@typescript-eslint/brace-style': 'error',
        camelcase: 'off',
        '@typescript-eslint/camelcase': 'off',
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': 'error',
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': 'error',
        indent: 'off',
        '@typescript-eslint/indent': ['error', 4, { SwitchCase: 1 }],
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': 'error',
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'error',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        quotes: 'off',
        '@typescript-eslint/quotes': ['error', 'single', 'avoid-escape'],
        'no-return-await': 'off',
        '@typescript-eslint/return-await': 'error',
        semi: 'off',
        '@typescript-eslint/semi': 'error',
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': [
            'error', {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ]
    }
};
