const html = require("eslint-plugin-html");

module.exports = [
    {
        files: ["**/*.html"],
        plugins: {
            html
        },
        languageOptions: {
            sourceType: "module",
            ecmaVersion: "latest",
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "off"
        }
    }
];
