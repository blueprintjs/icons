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
exports.Italic = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Italic = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "italic", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M234 320H280C292 320 300 328 300 340C300 352 292 360 280 360H140C128 360 120 352 120 340C120 328 128 320 140 320H184L146 100H100C88 100 80 92 80 80C80 68 88 60 100 60H240C252 60 260 68 260 80C260 92 252 100 240 100H196L234 320z" : "M196 240H220C230 240 240 248 240 260C240 272 232 280 220 280H140C130 280 120 272 120 260C120 248 128 240 140 240H156L124 80H100C90 80 80 72 80 60C80 48 88 40 100 40H180C190 40 200 48 200 60C200 72 192 80 180 80H164L196 240z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Italic.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Italic.displayName = "Blueprint5.Icon.Italic";
exports.default = exports.Italic;
//# sourceMappingURL=italic.js.map