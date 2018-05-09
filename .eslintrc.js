// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: ['vue'],
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // http://eslint.cn/docs/rules/no-console
        // 禁用 console
        'no-console': ['off'],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // http://eslint.cn/docs/rules/curly
        // 要求遵循大括号约定
        curly: ['error', 'all'],
        // http://eslint.cn/docs/rules/indent
        // 强制使用一致的缩进
        // 可以--fix
        indent: ['error', 4, { SwitchCase: 1 }],
        // http://eslint.cn/docs/rules/semi
        // 要求或禁止使用分号代替 ASI
        // 可以--fix
        semi: ['error', 'always'],
        // http://eslint.cn/docs/rules/brace-style
        // 大括号风格要求
        // 可以--fix
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        // http://eslint.cn/docs/rules/arrow-parens
        // 要求箭头函数的参数使用圆括号
        // 可以--fix
        // 箭头函数参数必须使用圆括号
        'arrow-parens': ['error', 'always'],
        // http://eslint.cn/docs/rules/arrow-spacing
        // 要求箭头函数的箭头之前或之后有空格
        // 可以--fix
        // 箭头函数两侧要用空格
        'arrow-spacing': ['error', { before: true, after: true }],
        // http://eslint.cn/docs/rules/quote-props
        // 要求对象字面量属性名称使用引号
        // 可以--fix
        // 必要是需要，关键字必须要有
        'quote-props': ['error', 'as-needed', { keywords: true }]
    }
};
