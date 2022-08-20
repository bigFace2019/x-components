module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
        node: true,
        jest: true,
    },
    globals: {
        ga: true,
        chrome: false,
        __DEV__: true,
    },
    // 解析 .vue 文件
    parser: "vue-eslint-parser",
    extends: ["plugin:json/recommended"],
    plugins: ["@typescript-eslint"],
    parserOptions: {
        parser: "@typescript-eslint/parser", // 解析 .ts 文件
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        'no-unused-vars': 'warn',
    },
};
