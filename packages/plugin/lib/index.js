function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var src_exports = {};
__export(src_exports, {
    creightivePlugin: function() {
        return creightivePlugin;
    },
    default: function() {
        return src_default;
    }
});
module.exports = __toCommonJS(src_exports);
var import_defaultTheme = require("tailwindcss/defaultTheme");
var import_plugin = __toESM(require("tailwindcss/plugin"));
// ../../node_modules/.pnpm/@radix-ui+colors@3.0.0/node_modules/@radix-ui/colors/index.mjs
var grayDark = {
    gray1: "#111111",
    gray2: "#191919",
    gray3: "#222222",
    gray4: "#2a2a2a",
    gray5: "#313131",
    gray6: "#3a3a3a",
    gray7: "#484848",
    gray8: "#606060",
    gray9: "#6e6e6e",
    gray10: "#7b7b7b",
    gray11: "#b4b4b4",
    gray12: "#eeeeee"
};
var grayDarkA = {
    grayA1: "#00000000",
    grayA2: "#ffffff09",
    grayA3: "#ffffff12",
    grayA4: "#ffffff1b",
    grayA5: "#ffffff22",
    grayA6: "#ffffff2c",
    grayA7: "#ffffff3b",
    grayA8: "#ffffff55",
    grayA9: "#ffffff64",
    grayA10: "#ffffff72",
    grayA11: "#ffffffaf",
    grayA12: "#ffffffed"
};
var mauveDark = {
    mauve1: "#121113",
    mauve2: "#1a191b",
    mauve3: "#232225",
    mauve4: "#2b292d",
    mauve5: "#323035",
    mauve6: "#3c393f",
    mauve7: "#49474e",
    mauve8: "#625f69",
    mauve9: "#6f6d78",
    mauve10: "#7c7a85",
    mauve11: "#b5b2bc",
    mauve12: "#eeeef0"
};
var mauveDarkA = {
    mauveA1: "#00000000",
    mauveA2: "#f5f4f609",
    mauveA3: "#ebeaf814",
    mauveA4: "#eee5f81d",
    mauveA5: "#efe6fe25",
    mauveA6: "#f1e6fd30",
    mauveA7: "#eee9ff40",
    mauveA8: "#eee7ff5d",
    mauveA9: "#eae6fd6e",
    mauveA10: "#ece9fd7c",
    mauveA11: "#f5f1ffb7",
    mauveA12: "#fdfdffef"
};
var slateDark = {
    slate1: "#111113",
    slate2: "#18191b",
    slate3: "#212225",
    slate4: "#272a2d",
    slate5: "#2e3135",
    slate6: "#363a3f",
    slate7: "#43484e",
    slate8: "#5a6169",
    slate9: "#696e77",
    slate10: "#777b84",
    slate11: "#b0b4ba",
    slate12: "#edeef0"
};
var slateDarkA = {
    slateA1: "#00000000",
    slateA2: "#d8f4f609",
    slateA3: "#ddeaf814",
    slateA4: "#d3edf81d",
    slateA5: "#d9edfe25",
    slateA6: "#d6ebfd30",
    slateA7: "#d9edff40",
    slateA8: "#d9edff5d",
    slateA9: "#dfebfd6d",
    slateA10: "#e5edfd7b",
    slateA11: "#f1f7feb5",
    slateA12: "#fcfdffef"
};
var sageDark = {
    sage1: "#101211",
    sage2: "#171918",
    sage3: "#202221",
    sage4: "#272a29",
    sage5: "#2e3130",
    sage6: "#373b39",
    sage7: "#444947",
    sage8: "#5b625f",
    sage9: "#63706b",
    sage10: "#717d79",
    sage11: "#adb5b2",
    sage12: "#eceeed"
};
var sageDarkA = {
    sageA1: "#00000000",
    sageA2: "#f0f2f108",
    sageA3: "#f3f5f412",
    sageA4: "#f2fefd1a",
    sageA5: "#f1fbfa22",
    sageA6: "#edfbf42d",
    sageA7: "#edfcf73c",
    sageA8: "#ebfdf657",
    sageA9: "#dffdf266",
    sageA10: "#e5fdf674",
    sageA11: "#f4fefbb0",
    sageA12: "#fdfffeed"
};
var oliveDark = {
    olive1: "#111210",
    olive2: "#181917",
    olive3: "#212220",
    olive4: "#282a27",
    olive5: "#2f312e",
    olive6: "#383a36",
    olive7: "#454843",
    olive8: "#5c625b",
    olive9: "#687066",
    olive10: "#767d74",
    olive11: "#afb5ad",
    olive12: "#eceeec"
};
var oliveDarkA = {
    oliveA1: "#00000000",
    oliveA2: "#f1f2f008",
    oliveA3: "#f4f5f312",
    oliveA4: "#f3fef21a",
    oliveA5: "#f2fbf122",
    oliveA6: "#f4faed2c",
    oliveA7: "#f2fced3b",
    oliveA8: "#edfdeb57",
    oliveA9: "#ebfde766",
    oliveA10: "#f0fdec74",
    oliveA11: "#f6fef4b0",
    oliveA12: "#fdfffded"
};
var sandDark = {
    sand1: "#111110",
    sand2: "#191918",
    sand3: "#222221",
    sand4: "#2a2a28",
    sand5: "#31312e",
    sand6: "#3b3a37",
    sand7: "#494844",
    sand8: "#62605b",
    sand9: "#6f6d66",
    sand10: "#7c7b74",
    sand11: "#b5b3ad",
    sand12: "#eeeeec"
};
var sandDarkA = {
    sandA1: "#00000000",
    sandA2: "#f4f4f309",
    sandA3: "#f6f6f513",
    sandA4: "#fefef31b",
    sandA5: "#fbfbeb23",
    sandA6: "#fffaed2d",
    sandA7: "#fffbed3c",
    sandA8: "#fff9eb57",
    sandA9: "#fffae965",
    sandA10: "#fffdee73",
    sandA11: "#fffcf4b0",
    sandA12: "#fffffded"
};
var crimsonDark = {
    crimson1: "#191114",
    crimson2: "#201318",
    crimson3: "#381525",
    crimson4: "#4d122f",
    crimson5: "#5c1839",
    crimson6: "#6d2545",
    crimson7: "#873356",
    crimson8: "#b0436e",
    crimson9: "#e93d82",
    crimson10: "#ee518a",
    crimson11: "#ff92ad",
    crimson12: "#fdd3e8"
};
var crimsonDarkA = {
    crimsonA1: "#f4126709",
    crimsonA2: "#f22f7a11",
    crimsonA3: "#fe2a8b2a",
    crimsonA4: "#fd158741",
    crimsonA5: "#fd278f51",
    crimsonA6: "#fe459763",
    crimsonA7: "#fd559b7f",
    crimsonA8: "#fe5b9bab",
    crimsonA9: "#fe418de8",
    crimsonA10: "#ff5693ed",
    crimsonA11: "#ff92ad",
    crimsonA12: "#ffd5eafd"
};
var limeDark = {
    lime1: "#11130c",
    lime2: "#151a10",
    lime3: "#1f2917",
    lime4: "#29371d",
    lime5: "#334423",
    lime6: "#3d522a",
    lime7: "#496231",
    lime8: "#577538",
    lime9: "#bdee63",
    lime10: "#d4ff70",
    lime11: "#bde56c",
    lime12: "#e3f7ba"
};
var limeDarkA = {
    limeA1: "#11bb0003",
    limeA2: "#78f7000a",
    limeA3: "#9bfd4c1a",
    limeA4: "#a7fe5c29",
    limeA5: "#affe6537",
    limeA6: "#b2fe6d46",
    limeA7: "#b6ff6f57",
    limeA8: "#b6fd6d6c",
    limeA9: "#caff69ed",
    limeA10: "#d4ff70",
    limeA11: "#d1fe77e4",
    limeA12: "#e9febff7"
};
var gray = {
    gray1: "#fcfcfc",
    gray2: "#f9f9f9",
    gray3: "#f0f0f0",
    gray4: "#e8e8e8",
    gray5: "#e0e0e0",
    gray6: "#d9d9d9",
    gray7: "#cecece",
    gray8: "#bbbbbb",
    gray9: "#8d8d8d",
    gray10: "#838383",
    gray11: "#646464",
    gray12: "#202020"
};
var grayA = {
    grayA1: "#00000003",
    grayA2: "#00000006",
    grayA3: "#0000000f",
    grayA4: "#00000017",
    grayA5: "#0000001f",
    grayA6: "#00000026",
    grayA7: "#00000031",
    grayA8: "#00000044",
    grayA9: "#00000072",
    grayA10: "#0000007c",
    grayA11: "#0000009b",
    grayA12: "#000000df"
};
var mauve = {
    mauve1: "#fdfcfd",
    mauve2: "#faf9fb",
    mauve3: "#f2eff3",
    mauve4: "#eae7ec",
    mauve5: "#e3dfe6",
    mauve6: "#dbd8e0",
    mauve7: "#d0cdd7",
    mauve8: "#bcbac7",
    mauve9: "#8e8c99",
    mauve10: "#84828e",
    mauve11: "#65636d",
    mauve12: "#211f26"
};
var mauveA = {
    mauveA1: "#55005503",
    mauveA2: "#2b005506",
    mauveA3: "#30004010",
    mauveA4: "#20003618",
    mauveA5: "#20003820",
    mauveA6: "#14003527",
    mauveA7: "#10003332",
    mauveA8: "#08003145",
    mauveA9: "#05001d73",
    mauveA10: "#0500197d",
    mauveA11: "#0400119c",
    mauveA12: "#020008e0"
};
var slate = {
    slate1: "#fcfcfd",
    slate2: "#f9f9fb",
    slate3: "#f0f0f3",
    slate4: "#e8e8ec",
    slate5: "#e0e1e6",
    slate6: "#d9d9e0",
    slate7: "#cdced6",
    slate8: "#b9bbc6",
    slate9: "#8b8d98",
    slate10: "#80838d",
    slate11: "#60646c",
    slate12: "#1c2024"
};
var slateA = {
    slateA1: "#00005503",
    slateA2: "#00005506",
    slateA3: "#0000330f",
    slateA4: "#00002d17",
    slateA5: "#0009321f",
    slateA6: "#00002f26",
    slateA7: "#00062e32",
    slateA8: "#00083046",
    slateA9: "#00051d74",
    slateA10: "#00071b7f",
    slateA11: "#0007149f",
    slateA12: "#000509e3"
};
var sage = {
    sage1: "#fbfdfc",
    sage2: "#f7f9f8",
    sage3: "#eef1f0",
    sage4: "#e6e9e8",
    sage5: "#dfe2e0",
    sage6: "#d7dad9",
    sage7: "#cbcfcd",
    sage8: "#b8bcba",
    sage9: "#868e8b",
    sage10: "#7c8481",
    sage11: "#5f6563",
    sage12: "#1a211e"
};
var sageA = {
    sageA1: "#00804004",
    sageA2: "#00402008",
    sageA3: "#002d1e11",
    sageA4: "#001f1519",
    sageA5: "#00180820",
    sageA6: "#00140d28",
    sageA7: "#00140a34",
    sageA8: "#000f0847",
    sageA9: "#00110b79",
    sageA10: "#00100a83",
    sageA11: "#000a07a0",
    sageA12: "#000805e5"
};
var olive = {
    olive1: "#fcfdfc",
    olive2: "#f8faf8",
    olive3: "#eff1ef",
    olive4: "#e7e9e7",
    olive5: "#dfe2df",
    olive6: "#d7dad7",
    olive7: "#cccfcc",
    olive8: "#b9bcb8",
    olive9: "#898e87",
    olive10: "#7f847d",
    olive11: "#60655f",
    olive12: "#1d211c"
};
var oliveA = {
    oliveA1: "#00550003",
    oliveA2: "#00490007",
    oliveA3: "#00200010",
    oliveA4: "#00160018",
    oliveA5: "#00180020",
    oliveA6: "#00140028",
    oliveA7: "#000f0033",
    oliveA8: "#040f0047",
    oliveA9: "#050f0078",
    oliveA10: "#040e0082",
    oliveA11: "#020a00a0",
    oliveA12: "#010600e3"
};
var sand = {
    sand1: "#fdfdfc",
    sand2: "#f9f9f8",
    sand3: "#f1f0ef",
    sand4: "#e9e8e6",
    sand5: "#e2e1de",
    sand6: "#dad9d6",
    sand7: "#cfceca",
    sand8: "#bcbbb5",
    sand9: "#8d8d86",
    sand10: "#82827c",
    sand11: "#63635e",
    sand12: "#21201c"
};
var sandA = {
    sandA1: "#55550003",
    sandA2: "#25250007",
    sandA3: "#20100010",
    sandA4: "#1f150019",
    sandA5: "#1f180021",
    sandA6: "#19130029",
    sandA7: "#19140035",
    sandA8: "#1915014a",
    sandA9: "#0f0f0079",
    sandA10: "#0c0c0083",
    sandA11: "#080800a1",
    sandA12: "#060500e3"
};
var crimson = {
    crimson1: "#fffcfd",
    crimson2: "#fef7f9",
    crimson3: "#ffe9f0",
    crimson4: "#fedce7",
    crimson5: "#facedd",
    crimson6: "#f3bed1",
    crimson7: "#eaacc3",
    crimson8: "#e093b2",
    crimson9: "#e93d82",
    crimson10: "#df3478",
    crimson11: "#cb1d63",
    crimson12: "#621639"
};
var crimsonA = {
    crimsonA1: "#ff005503",
    crimsonA2: "#e0004008",
    crimsonA3: "#ff005216",
    crimsonA4: "#f8005123",
    crimsonA5: "#e5004f31",
    crimsonA6: "#d0004b41",
    crimsonA7: "#bf004753",
    crimsonA8: "#b6004a6c",
    crimsonA9: "#e2005bc2",
    crimsonA10: "#d70056cb",
    crimsonA11: "#c4004fe2",
    crimsonA12: "#530026e9"
};
var lime = {
    lime1: "#fcfdfa",
    lime2: "#f8faf3",
    lime3: "#eef6d6",
    lime4: "#e2f0bd",
    lime5: "#d3e7a6",
    lime6: "#c2da91",
    lime7: "#abc978",
    lime8: "#8db654",
    lime9: "#bdee63",
    lime10: "#b0e64c",
    lime11: "#5c7c2f",
    lime12: "#37401c"
};
var limeA = {
    limeA1: "#66990005",
    limeA2: "#6b95000c",
    limeA3: "#96c80029",
    limeA4: "#8fc60042",
    limeA5: "#81bb0059",
    limeA6: "#72aa006e",
    limeA7: "#61990087",
    limeA8: "#559200ab",
    limeA9: "#93e4009c",
    limeA10: "#8fdc00b3",
    limeA11: "#375f00d0",
    limeA12: "#1e2900e3"
};
// src/tokens/colors.ts
var radixColorScales = {
    slate: [
        slate,
        slateDark,
        slateA,
        slateDarkA
    ],
    gray: [
        gray,
        grayDark,
        grayA,
        grayDarkA
    ],
    sage: [
        sage,
        sageDark,
        sageA,
        sageDarkA
    ],
    sand: [
        sand,
        sandDark,
        sandA,
        sandDarkA
    ],
    olive: [
        olive,
        oliveDark,
        oliveA,
        oliveDarkA
    ],
    mauve: [
        mauve,
        mauveDark,
        mauveA,
        mauveDarkA
    ],
    lime: [
        lime,
        limeDark,
        limeA,
        limeDarkA
    ],
    crimson: [
        crimson,
        crimsonDark,
        crimsonA,
        crimsonDarkA
    ]
};
var getRadixColorScales = function(scale) {
    return radixColorScales[scale];
};
var getRadixPaletteObject = function(prefix, palette) {
    return {
        1: "var(--".concat(prefix, "-").concat(palette, "-1)"),
        2: "var(--".concat(prefix, "-").concat(palette, "-2)"),
        3: "var(--".concat(prefix, "-").concat(palette, "-3)"),
        4: "var(--".concat(prefix, "-").concat(palette, "-4)"),
        5: "var(--".concat(prefix, "-").concat(palette, "-5)"),
        6: "var(--".concat(prefix, "-").concat(palette, "-6)"),
        7: "var(--".concat(prefix, "-").concat(palette, "-7)"),
        8: "var(--".concat(prefix, "-").concat(palette, "-8)"),
        9: "var(--".concat(prefix, "-").concat(palette, "-9)"),
        10: "var(--".concat(prefix, "-").concat(palette, "-10)"),
        11: "var(--".concat(prefix, "-").concat(palette, "-11)"),
        12: "var(--".concat(prefix, "-").concat(palette, "-12)"),
        a1: "var(--".concat(prefix, "-").concat(palette, "-alpha-1)"),
        a2: "var(--".concat(prefix, "-").concat(palette, "-alpha-2)"),
        a3: "var(--".concat(prefix, "-").concat(palette, "-alpha-3)"),
        a4: "var(--".concat(prefix, "-").concat(palette, "-alpha-4)"),
        a5: "var(--".concat(prefix, "-").concat(palette, "-alpha-5)"),
        a6: "var(--".concat(prefix, "-").concat(palette, "-alpha-6)"),
        a7: "var(--".concat(prefix, "-").concat(palette, "-alpha-7)"),
        a8: "var(--".concat(prefix, "-").concat(palette, "-alpha-8)"),
        a9: "var(--".concat(prefix, "-").concat(palette, "-alpha-9)"),
        a10: "var(--".concat(prefix, "-").concat(palette, "-alpha-10)"),
        a11: "var(--".concat(prefix, "-").concat(palette, "-alpha-11)"),
        a12: "var(--".concat(prefix, "-").concat(palette, "-alpha-12)")
    };
};
// src/tokens/radius.ts
var getRadiusVariables = function(prefix, scaling, radius) {
    var factor = "0";
    var radiusFull = "0px";
    switch(radius){
        case "none":
            factor = "0";
            break;
        case "sm":
            factor = "0.75";
            break;
        case "md":
            factor = "1";
            break;
        case "lg":
            factor = "1.875";
            break;
        case "full":
            factor = "1.5";
            radiusFull = "99999px";
            break;
    }
    var _obj;
    return _obj = {}, _define_property(_obj, "--".concat(prefix, "-scaling"), String(scaling)), _define_property(_obj, "--".concat(prefix, "-radius-factor"), factor), _define_property(_obj, "--".concat(prefix, "-radius-1"), "calc(3px * var(--".concat(prefix, "-scaling) * var(--").concat(prefix, "-radius-factor))")), _define_property(_obj, "--".concat(prefix, "-radius-2"), "calc(4px * var(--".concat(prefix, "-scaling) * var(--").concat(prefix, "-radius-factor))")), _define_property(_obj, "--".concat(prefix, "-radius-3"), "calc(6px * var(--".concat(prefix, "-scaling) * var(--").concat(prefix, "-radius-factor))")), _define_property(_obj, "--".concat(prefix, "-radius-4"), "calc(8px * var(--".concat(prefix, "-scaling) * var(--").concat(prefix, "-radius-factor))")), _define_property(_obj, "--".concat(prefix, "-radius-5"), "calc(12px * var(--".concat(prefix, "-scaling) * var(--").concat(prefix, "-radius-factor))")), _define_property(_obj, "--".concat(prefix, "-radius-6"), "calc(16px * var(--".concat(prefix, "-scaling) * var(--").concat(prefix, "-radius-factor))")), _obj;
};
// src/utils/index.ts
var createCustomVariableFromScale = function(prefix, name, scaleObject) {
    var regex = /\d{1,3}\b/g;
    var entries = Object.entries(scaleObject);
    return entries.reduce(function(acc, curr) {
        var _curr = _sliced_to_array(curr, 2), key = _curr[0], value = _curr[1];
        var _key_match = _sliced_to_array(key.match(regex), 1), scale = _key_match[0];
        acc["--".concat(prefix, "-").concat(name, "-").concat(scale)] = value;
        return acc;
    }, {});
};
var getPluginOptions = function() {
    var partialOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _partialOptions_prefix, _partialOptions_neutral, _partialOptions_accent, _partialOptions_radius, _partialOptions_scaling;
    return {
        prefix: (_partialOptions_prefix = partialOptions.prefix) !== null && _partialOptions_prefix !== void 0 ? _partialOptions_prefix : "bw",
        neutral: (_partialOptions_neutral = partialOptions.neutral) !== null && _partialOptions_neutral !== void 0 ? _partialOptions_neutral : "olive",
        accent: (_partialOptions_accent = partialOptions.accent) !== null && _partialOptions_accent !== void 0 ? _partialOptions_accent : "lime",
        radius: (_partialOptions_radius = partialOptions.radius) !== null && _partialOptions_radius !== void 0 ? _partialOptions_radius : "lg",
        scaling: (_partialOptions_scaling = partialOptions.scaling) !== null && _partialOptions_scaling !== void 0 ? _partialOptions_scaling : 1
    };
};
// src/tokens/typography.ts
var typography = function(theme2) {
    return {
        DEFAULT: {
            css: {
                "--tw-prose-body": theme2("colors.neutral.11"),
                "--tw-prose-headings": theme2("colors.neutral.12"),
                "--tw-prose-links": theme2("colors.accent.11"),
                // '--tw-prose-links-hover': theme('colors.teal.600'),
                // '--tw-prose-underline': theme('colors.teal.500 / 0.2'),
                "--tw-prose-underline-hover": theme2("colors.accent.8"),
                "--tw-prose-bold": theme2("colors.neutral.12"),
                "--tw-prose-counters": theme2("colors.neutral.12"),
                "--tw-prose-bullets": theme2("colors.neutral.12"),
                "--tw-prose-hr": theme2("colors.neutral.6"),
                "--tw-prose-quotes": theme2("colors.neutral.10"),
                "--tw-prose-quote-borders": theme2("colors.accent.9"),
                // '--tw-prose-captions': theme('colors.zinc.400'),
                "--tw-prose-code": theme2("colors.neutral.12"),
                "--tw-prose-code-bg": theme2("colors.black"),
                // '--tw-prose-pre-code': theme('colors.zinc.100'),
                "--tw-prose-pre-bg": theme2("colors.black"),
                "--tw-prose-pre-border": "transparent",
                "--tw-prose-th-borders": theme2("colors.neutral.7"),
                "--tw-prose-td-borders": theme2("colors.neutral.5"),
                //
                // '--tw-prose-invert-body': theme('colors.zinc.400'),
                // '--tw-prose-invert-headings': theme('colors.zinc.200'),
                // '--tw-prose-invert-links': theme('colors.teal.400'),
                // '--tw-prose-invert-links-hover': theme('colors.teal.400'),
                // '--tw-prose-invert-underline': theme('colors.teal.400 / 0.3'),
                // '--tw-prose-invert-underline-hover': theme('colors.teal.400'),
                // '--tw-prose-invert-bold': theme('colors.zinc.200'),
                // '--tw-prose-invert-counters': theme('colors.zinc.200'),
                // '--tw-prose-invert-bullets': theme('colors.zinc.200'),
                // '--tw-prose-invert-hr': theme('colors.zinc.700 / 0.4'),
                // '--tw-prose-invert-quote-borders': theme('colors.zinc.500'),
                // '--tw-prose-invert-captions': theme('colors.zinc.500'),
                // '--tw-prose-invert-code': theme('colors.zinc.300'),
                // '--tw-prose-invert-code-bg': theme('colors.zinc.200 / 0.05'),
                // '--tw-prose-invert-pre-code': theme('colors.zinc.100'),
                // '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 0.4)',
                // '--tw-prose-invert-pre-border': theme('colors.zinc.200 / 0.1'),
                // '--tw-prose-invert-th-borders': theme('colors.zinc.700'),
                // '--tw-prose-invert-td-borders': theme('colors.zinc.800'),
                // Headings
                // h1: {
                //   fontSize: theme('fontSize.4xl')
                // },h2: {
                //   fontSize: theme('fontSize.3xl')
                // },h3: {
                //   fontSize: theme('fontSize.2xl')
                // },h4: {
                //   fontSize: theme('fontSize.xl')
                // },h5: {
                //   fontSize: theme('fontSize.lg')
                // },h6: {
                //   fontSize: theme('fontSize.base')
                // }
                // Code blocks
                pre: {
                    color: "var(--tw-prose-pre-code)",
                    fontSize: theme2("fontSize.sm")[0],
                    fontWeight: theme2("fontWeight.medium"),
                    backgroundColor: "var(--tw-prose-pre-bg)",
                    borderRadius: theme2("borderRadius.3xl"),
                    padding: theme2("spacing.8"),
                    overflowX: "auto",
                    border: "1px solid",
                    borderColor: "var(--tw-prose-pre-border)"
                },
                "pre code": {
                    display: "inline",
                    color: "inherit",
                    fontSize: "inherit",
                    fontWeight: "inherit",
                    backgroundColor: "transparent",
                    borderRadius: 0,
                    padding: 0
                },
                // Blockquotes
                "blockquote p::before": {
                    display: "none"
                },
                "blockquote p::after": {
                    display: "none"
                }
            }
        }
    };
};
// src/index.ts
var handler = function(options) {
    var _getPluginOptions = getPluginOptions(options), prefix = _getPluginOptions.prefix, scaling = _getPluginOptions.scaling, radius = _getPluginOptions.radius, neutral = _getPluginOptions.neutral, accent = _getPluginOptions.accent;
    return function handler(param) {
        var addBase = param.addBase, addUtilities = param.addUtilities;
        var _getRadixColorScales = _sliced_to_array(getRadixColorScales(neutral), 4), light = _getRadixColorScales[0], dark = _getRadixColorScales[1], alpha = _getRadixColorScales[2], darkAlpha = _getRadixColorScales[3];
        var _getRadixColorScales1 = _sliced_to_array(getRadixColorScales(accent), 4), accentLight = _getRadixColorScales1[0], accentDark = _getRadixColorScales1[1], accentAlpha = _getRadixColorScales1[2], accentDarkAlpha = _getRadixColorScales1[3];
        var _obj;
        addBase([
            // Josh Comeau rest
            {
                "*,*::before,*::after": {
                    boxSizing: "border-box"
                },
                "*": {
                    margin: "0"
                },
                "html,body": {
                    height: "100%",
                    fontSize: "16px"
                },
                body: {
                    lineHeight: String(1.5),
                    WebkitFontSmoothing: "antialiased"
                },
                "img,picture,video,canvas,svg": {
                    display: "block",
                    maxWidth: "100%"
                },
                "input,button,textarea,select": {
                    font: "inherit"
                },
                "p,h1,h2,h3,h4,h5,h6": {
                    overflowWrap: "break-word"
                },
                "#root,#__next": {
                    isolation: "isolate"
                }
            },
            // palette CSS variables
            {
                ":root": _object_spread_props(_object_spread({}, createCustomVariableFromScale(prefix, "neutral", light), createCustomVariableFromScale(prefix, "neutral-alpha", alpha), createCustomVariableFromScale(prefix, "accent", accentLight), createCustomVariableFromScale(prefix, "accent-alpha", accentAlpha)), _define_property({}, "--".concat(prefix, "-black"), light["".concat(neutral, "12")])),
                ".dark": _object_spread_props(_object_spread({}, createCustomVariableFromScale(prefix, "neutral", dark), createCustomVariableFromScale(prefix, "neutral-alpha", darkAlpha), createCustomVariableFromScale(prefix, "accent", accentDark), createCustomVariableFromScale(prefix, "accent-alpha", accentDarkAlpha)), _define_property({}, "--".concat(prefix, "-black"), dark["".concat(neutral, "1")]))
            },
            // TODO: semantic CSS variables
            {
                ":root": _object_spread_props(_object_spread({}, getRadiusVariables(prefix, Number(scaling), radius)), (_obj = {}, _define_property(_obj, "--".concat(prefix, "-page-background"), "white"), _define_property(_obj, "--".concat(prefix, "-text-color"), "var(--".concat(prefix, "-neutral-12)")), _define_property(_obj, "--".concat(prefix, "-background"), "var(--".concat(prefix, "-neutral-1)")), _define_property(_obj, "--".concat(prefix, "-text-color"), "var(--".concat(prefix, "-neutral-12)")), _define_property(_obj, "--".concat(prefix, "-text-accent-color"), "var(--".concat(prefix, "-accent-12)")), _define_property(_obj, "--".concat(prefix, "-text-accent-muted"), "var(--".concat(prefix, "-accent-10)")), _define_property(_obj, "--".concat(prefix, "-text-muted"), "var(--".concat(prefix, "-neutral-11)")), _define_property(_obj, "--".concat(prefix, "-bg-muted"), "var(--".concat(prefix, "-neutral-3)")), _define_property(_obj, "--".concat(prefix, "-bg-muted-hover"), "var(--".concat(prefix, "-neutral-4)")), _define_property(_obj, "--".concat(prefix, "-bg-accent"), "var(--".concat(prefix, "-accent-9)")), _define_property(_obj, "--".concat(prefix, "-bg-accent-muted"), "var(--".concat(prefix, "-accent-alpha-3)")), _define_property(_obj, "--".concat(prefix, "-bg-accent-muted-hover"), "var(--".concat(prefix, "-accent-alpha-5)")), _define_property(_obj, "--".concat(prefix, "-border"), "var(--".concat(prefix, "-neutral-7)")), _define_property(_obj, "--".concat(prefix, "-ring"), "var(--".concat(prefix, "-accent-8)")), _obj)),
                ".dark": _define_property({}, "--".concat(prefix, "-page-background"), "var(--".concat(prefix, "-neutral-1)"))
            },
            // global typography styles
            {
                body: {
                    "@apply text-foreground": {}
                },
                "h1,h2,h3,h4,h5,h6": {
                    "@apply mb-8": {}
                },
                "h1,.h1": {
                    "@apply text-h1": {}
                },
                "h2,.h2": {
                    "@apply text-h2": {}
                },
                "h3,.h3": {
                    "@apply text-h3": {}
                },
                "h4,.h4": {
                    "@apply text-h4": {}
                },
                "h5,.h5": {
                    "@apply text-h5": {}
                },
                "h6,.h6": {
                    "@apply text-h6": {}
                },
                "small,.small": {
                    "@apply text-mini": {}
                },
                p: {
                    "@apply my-8": {},
                    "&:last-child,  &:first-child": {
                        marginTop: "0",
                        marginBottom: "0"
                    },
                    "+ p": {
                        marginTop: "0"
                    }
                },
                "p,ul,ol,blockquote": {
                    "@apply leading-6": {}
                }
            },
            {
                body: {
                    "@apply selection:bg-accent-9 selection:text-black bg-background text-foreground": {}
                }
            }
        ]);
        addUtilities([
            {
                ".wrap": {
                    "@apply container my-0 mx-auto w-full": {}
                },
                ".wrap-sm": {
                    "@apply max-w-3xl": {}
                },
                ".wrap-px": {
                    "@apply px-8": {}
                },
                ".wrap-lg": {
                    "@apply max-w-7xl": {}
                },
                ".wrap-md": {
                    "@apply max-w-4xl": {}
                }
            },
            {
                ".block-m": {
                    "@apply my-24": {}
                },
                ".block-p": {
                    "@apply py-24": {}
                }
            },
            {
                ".align--left": {
                    "@apply mr-auto justify-start": {}
                },
                ".align--right": {
                    "@apply ml-auto justify-end": {}
                },
                ".align--center": {
                    "@apply m-auto justify-center": {}
                }
            },
            {
                ".show": {
                    "@apply block": {}
                },
                ".hide": {
                    "@apply hidden": {}
                }
            },
            {
                ".card-clip": {
                    clipPath: "inset(4px round 40px)",
                    "&:hover": {
                        clipPath: "inset(0px round 44px)"
                    }
                }
            }
        ]);
    };
};
var theme = function(options) {
    var prefix = getPluginOptions(options).prefix;
    return {
        theme: {
            extend: {
                colors: {
                    black: "var(--".concat(prefix, "-black)"),
                    neutral: getRadixPaletteObject(prefix, "neutral"),
                    accent: getRadixPaletteObject(prefix, "accent")
                },
                textColor: {
                    foreground: "var(--".concat(prefix, "-text-color)"),
                    muted: "var(--".concat(prefix, "-text-muted)")
                },
                borderRadius: {
                    DEFAULT: "var(--".concat(prefix, "-radius-2)"),
                    sm: "var(--".concat(prefix, "-radius-1)"),
                    md: "var(--".concat(prefix, "-radius-2)"),
                    lg: "var(--".concat(prefix, "-radius-3)"),
                    xl: "var(--".concat(prefix, "-radius-4)"),
                    "2xl": "var(--".concat(prefix, "-radius-5)"),
                    "3xl": "var(--".concat(prefix, "-radius-6)")
                },
                backgroundColor: {
                    background: "var(--".concat(prefix, "-page-background)")
                },
                borderColor: {
                    DEFAULT: "var(--".concat(prefix, "-border)")
                },
                fontFamily: {
                    sans: [
                        "Guminert"
                    ].concat(_to_consumable_array(import_defaultTheme.fontFamily.sans)),
                    title: [
                        "Alternox"
                    ].concat(_to_consumable_array(import_defaultTheme.fontFamily.sans))
                },
                fontSize: {
                    body: [
                        "1rem",
                        {
                            lineHeight: "1.5rem"
                        }
                    ],
                    h1: [
                        "3.5rem",
                        {
                            lineHeight: "3.75rem"
                        }
                    ],
                    h2: [
                        "2.25rem",
                        {
                            lineHeight: "2.625rem"
                        }
                    ],
                    h3: [
                        "1.875rem",
                        {
                            lineHeight: "2.25rem"
                        }
                    ],
                    h4: [
                        "1.5rem",
                        {
                            lineHeight: "2rem"
                        }
                    ],
                    h5: [
                        "1.25rem",
                        {
                            lineHeight: "1.75rem"
                        }
                    ],
                    h6: [
                        "1.125rem",
                        {
                            lineHeight: "1.5rem"
                        }
                    ],
                    mini: [
                        "0.75rem",
                        {
                            lineHeight: "1.5rem"
                        }
                    ]
                },
                typography: typography
            }
        }
    };
};
var creightivePlugin = import_plugin.default.withOptions(handler, theme);
var src_default = creightivePlugin;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    creightivePlugin: creightivePlugin
});
//# sourceMappingURL=index.js.map