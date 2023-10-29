module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/typescript/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2021,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'import/prefer-default-export': 'off',
        'vue/multi-word-component-names': 'off',
        'indent': ['error', 4],
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'key-spacing': [
            'error',
            {
                'align': 'value',
            }
        ],
        'vue/max-attributes-per-line': [
            'error', {
                singleline: 1,
            },
        ],
    },
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
    },
};
