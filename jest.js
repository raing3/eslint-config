module.exports = {
    rules: {
        // The rules below are listed in the order they appear on the eslint-plugin-jest rules page.

        // Jest
        // https://github.com/jest-community/eslint-plugin-jest#rules
        'jest/consistent-test-it': ['error', { fn: 'test' }], // eslint-disable-line id-length
        'jest/expect-expect': 'error',
        'jest/no-alias-methods': 'off',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-expect-resolves': 'error',
        'jest/no-commented-out-tests': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/no-truthy-falsy': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/require-top-level-describe': 'error',
        'jest/prefer-todo': 'error',
        'jest/valid-title': 'error'
    }
};
