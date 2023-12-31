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
exports.SymbolCross = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.SymbolCross = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "symbol-cross", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M300 239.8H240V299.8C240 310.8 231 319.8 220 319.8H180C169 319.8 160 310.8 160 299.8V239.8H100C89 239.8 80 230.8 80 219.8V179.8C80 168.8 89 159.8 100 159.8H160V99.8C160 88.8 169 79.8000000000001 180 79.8000000000001H220C231 79.8000000000001 240 88.8 240 99.8000000000001V159.8000000000001H300C311 159.8000000000001 320 168.8 320 179.8000000000001V219.8000000000001C320 231 311 239.8 300 239.8z" : "M240 199.8H200V239.8C200 250.8 191 259.8 180 259.8H140C129 259.8 120 250.8 120 239.8V199.8H80C69 199.8 60 190.8 60 179.8V139.8C60 128.8 69 119.8 80 119.8H120V79.8C120 68.8 129 59.8 140 59.8H180C191 59.8 200 68.8 200 79.8V119.8H240C251 119.8 260 128.8 260 139.8V179.8C260 191 251 199.8 240 199.8z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.SymbolCross.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.SymbolCross.displayName = "Blueprint5.Icon.SymbolCross";
exports.default = exports.SymbolCross;
//# sourceMappingURL=symbol-cross.js.map