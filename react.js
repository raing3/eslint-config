module.exports = {
    'extends': ['plugin:react/recommended'],
    plugins: ['react'],
    rules: {
        // The rules below are listed in the order they appear on the eslint-plugin-react rules page.

        // React
        // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
        'react/boolean-prop-naming': 'error',
        'react/button-has-type': 'error',
        'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],
        'react/function-component-definition': [
            'error', {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function'
            }
        ],
        'react/no-danger': 'error',
        'react/no-multi-comp': ['error', { ignoreStateless: true }],
        'react/no-array-index-key': 'error',
        'react/no-namespace': 'error',
        'react/no-redundant-should-component-update': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'error',
        'react/no-unescaped-entities': 'off',
        'react/no-unstable-nested-components': 'error',
        'react/no-unused-prop-types': 'error',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': ['error', 'disallow-in-func'],
        'react/prefer-stateless-function': 'error',
        'react/prop-types': ['error', { ignore: ['children'] }],
        'react/self-closing-comp': ['error', { html: false }],
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',

        // JSX
        // https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules
        'react/jsx-boolean-value': ['error', 'always'],
        'react/jsx-closing-bracket-location': ['error', 'after-props'],
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-curly-brace-presence': 'error',
        'react/jsx-curly-newline': 'error',
        'react/jsx-curly-spacing': ['error', 'never'],
        'react/jsx-equals-spacing': 'error',
        'react/jsx-fragments': ['error', 'syntax'],
        'react/jsx-handler-names': 'error',
        'react/jsx-indent': 'error',
        'react/jsx-indent-props': 'error',
        'react/jsx-max-depth': ['error', { max: 10 }],
        'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
        'react/jsx-no-constructed-context-values': 'error',
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-tag-spacing': 'error',
        'react/jsx-wrap-multilines': 'error'
    }
};
