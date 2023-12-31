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
exports.AddRowTop = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.AddRowTop = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "add-row-top", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M140 240H180V200C180 189 189 180 200 180S220 189 220 200V240H260C271 240 280 249 280 260C280 271 271 280 260 280H220V320C220 331 211 340 200 340S180 331 180 320V280H140C129 280 120 271 120 260C120 249 129 240 140 240zM380 400H20C9 400 0 391 0 380V20C0 9 9 0 20 0H380C391 0 400 9 400 20V380C400 391 391 400 380 400zM360 40H40V140H360V40zM360 160H40V360H360V160z" : "M300 320H20C9 320 0 311 0 300V20C0 9 9 0 20 0H300C311 0 320 9 320 20V300C320 311 311 320 300 320zM280 40H40V100H280V40zM280 120H40V280H280V120zM120 180H140V160C140 149 149 140 160 140S180 149 180 160V180H200C211 180 220 189 220 200C220 211 211 220 200 220H180V240C180 251 171 260 160 260S140 251 140 240V220H120C109 220 100 211 100 200C100 189 109 180 120 180z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.AddRowTop.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.AddRowTop.displayName = "Blueprint5.Icon.AddRowTop";
exports.default = exports.AddRowTop;
//# sourceMappingURL=add-row-top.js.map