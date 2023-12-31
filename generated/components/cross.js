"use strict";
/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cross = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Cross = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "cross", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M228.2 200L314 285.8C317.8 289.4 320 294.4 320 300C320 311 311 320 300 320C294.4000000000001 320 289.4000000000001 317.8 285.8 314.2L200 228.2L114.2 314.2C110.6 317.8 105.6 320 100 320C89 320 80 311 80 300C80 294.4 82.2 289.4 85.8 285.8L171.8 200L86 114.2000000000001C82.2 110.6 80 105.6 80 100C80 89 89 80 100 80C105.6 80 110.6 82.2 114.2 85.8L200 171.8L285.8 86C289.4000000000001 82.2 294.4000000000001 80 300 80C311 80 320 89 320 100C320 105.6 317.8 110.6 314.2000000000001 114.2000000000001L228.2 200z" : "M188.2 160L254 225.8C257.8 229.4 260 234.4 260 240C260 251 251 260 240 260C234.4 260 229.4 257.8 225.8 254.2L160 188.2L94.2 254.2C90.6 257.8 85.6 260 80 260C69 260 60 251 60 240C60 234.4 62.2 229.4 65.8 225.8L131.8 160L66 94.2C62.2 90.6 60 85.6 60 80C60 69 69 60 80 60C85.6 60 90.6 62.2 94.2 65.8L160 131.8L225.8 66C229.4 62.2 234.4 60 240 60C251 60 260 69 260 80C260 85.6 257.8 90.6 254.2 94.2L188.2 160z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Cross.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Cross.displayName = "Blueprint5.Icon.Cross";
exports.default = exports.Cross;
//# sourceMappingURL=cross.js.map