module.exports = {
    extends: [
        "eslint:recommended",
    ],
    env: {
        // 这个包含了 parserOptions.ecmaVersion: 12
        es2021: true,
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        // 很多语言单括号用于 char 类型，这里保持一致使用双括号。
        "quotes": ["error", "double", {
            avoidEscape: true,
        }],

        // 空格缩进都是异端！
        "indent": ["error", "tab", {
            SwitchCase: 1,
        }],

        // 换行用俩字符确实多余，统一使用 \n
        "linebreak-style": ["error", "unix"],

        // 函数名和括号间不加空格，关键字与括号间加。
        "space-before-function-paren": ["error", {
            anonymous: "always",
            named: "never",
            asyncArrow: "always",
        }],

        // 单行对象的大括号内加一个空格
        "object-curly-spacing": ["error", "always"],

        // 代码块与前面的标识符之间加一个空格
        "space-before-blocks": "error",

        // 对象键值之间的冒号后面加一个空格
        "key-spacing": "error",

        // 我应该不会这么写吧，不过还是加上以免意外。
        "no-array-constructor": "error",

        // 永远使用三等号，避免一些无聊的问题。
        // 有时候其它语言写多了，回来会忘。
        "eqeqeq": "error",

        // 永远不要使用 for-in，这个遗留的糟粕已经被其他写法取代了。
        // 同样 Python 写多了可能会忘。
        "no-restricted-syntax": ["error", "ForInStatement"],

        // 一些永远不要使用的特性。
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-label-var": "error",

        // 不加分号是有坑的，不知道为什么默认不启用这规则。
        "semi": ["error", "always"],

        // 多行元素末尾一律加逗号，便于删除和调整顺序。
        "comma-dangle": ["error", "always-multiline"],

        // window 对象上一些容易混淆的成员，要求必须以 `window.*` 来调用。
        // 该列表参考了：
        // https://github.com/facebook/create-react-app/tree/master/packages/confusing-browser-globals
        // 这里比它的规则少些，删除了一些常用的。
        "no-restricted-globals": ["error",
            "event", "name", "external",
            "top", "length", "parent",
            "addEventListener", "removeEventListener",
            "close", "closed",
            "focus", "onfocus", "blur", "onblur",
            "open", "opener",
            "onload", "onunload",
            "frames", "frameElement",
            "innerWidth", "innerHeight",
            "outerWidth", "outerHeight",
            "pageXOffset", "pageYOffset",
            "screenLeft", "screenTop",
            "screenX", "screenY",
            "moveBy", "moveTo",
            "resizeBy", "resizeTo", "onresize",
            "scroll", "scrollBy", "scrollTo",
            "scrollX", "scrollY",
            "status", "defaultStatus",
            "find", "print", "confirm", "stop",
        ],
    },
};
