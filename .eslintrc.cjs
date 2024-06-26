module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'prettier'],
    rules: {
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
};
