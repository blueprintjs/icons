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
exports.Pivot = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Pivot = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "pivot", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M116.6 205L5.8 94.2000000000001C2.2 90.6 0 85.6 0 80C0 69 9 60 20 60C25.6 60 30.6 62.2 34.2 65.8L145 176.6C133.6 184 124 193.6 116.6 205zM380 180C369 180 360 171 360 160V128.2L283.4 204.8C276 193.6 266.4 184 255.2 176.6L331.8 100H300C289 100 280 91 280 80C280 69 289 60 300 60H380C391 60 400 69 400 80V160C400 171 391 180 380 180zM280 260C280 304.2 244.2 340 200 340S120 304.2 120 260C120 215.8 155.8 180 200 180S280 215.8 280 260zM200 220C178 220 160 238 160 260S178 300 200 300S240 282 240 260S222 220 200 220z" : "M91.4 179.6L6 94.2C2.2 90.6 0 85.6 0 80C0 69 9 60 20 60C25.6 60 30.6 62.2 34.2 65.8L119.6 151.2C108 158.2 98.2 168 91.4 179.6zM300 160C289 160 280 151 280 140V128.2L228.6 179.6C221.8 168 212 158.2 200.4 151.4L251.8 100H240C229 100 220 91 220 80C220 69 229 60 240 60H300C311 60 320 69 320 80V140C320 151 311 160 300 160zM220 220C220 253.2 193.2 280 160 280S100 253.2 100 220S126.8 160 160 160S220 186.8 220 220zM160 200C149 200 140 209 140 220C140 231 149 240 160 240S180 231 180 220C180 209 171 200 160 200z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Pivot.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Pivot.displayName = "Blueprint5.Icon.Pivot";
exports.default = exports.Pivot;
//# sourceMappingURL=pivot.js.map