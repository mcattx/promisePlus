module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint-config-airbnb-es5",
    "parserOptions": {
        "ecmaVersion": 5
    },
    "rules": {
        "no-undefined": "off",
        "func-names": "off",
        "no-extend-native": "off",
        "no-param-reassign": "off"
    },
    "overrides": [
        {
            "files": [ "src/*.js" ],
            "excludedFiles": "*.test.js"
        }
    ]
};
