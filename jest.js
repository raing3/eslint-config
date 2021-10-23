module.exports = {
    'extends': ['plugin:jest/recommended'],
    plugins: ['jest'],
    rules: {
        // The rules below are listed in the order they appear on the eslint-plugin-jest rules page.

        // Jest
        // https://github.com/jest-community/eslint-plugin-jest#rules
        'jest/consistent-test-it': ['error', { fn: 'test' }], // eslint-disable-line id-length
        'jest/no-duplicate-hooks': 'error',
        'jest/no-restricted-matchers': [
            'warn', {
                resolves: 'Use `expect(await promise)` instead.',
                toBeTruthy: 'Avoid `toBeTruthy`',
                toBeFalsy: 'Avoid `toBeFalsy`'
            }
        ],
        'jest/no-test-return-statement': 'error',
        'jest/prefer-expect-resolves': 'warn',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-to-be': 'warn',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/require-to-throw-message': 'warn',
        'jest/require-top-level-describe': 'error',
        'jest/prefer-todo': 'error'
    }
};
