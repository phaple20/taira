module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        //'@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'space-before-function-paren': 0,
        'generator-star-spacing': 'off',
        'no-irregular-whitespace': 'off'
    }
}
//'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',