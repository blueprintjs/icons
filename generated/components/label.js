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
exports.Label = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Label = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "label", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M60 160H340V180H60V160zM280 340H20C9 340 0 331 0 320V80C0 69 9 60 20 60H380C391 60 400 69 400 80V220L280 340zM360 100H40V300H260V240H60V220H260V200H360V100zM280 220V300L360 220H280z" : "M220 280H20C9 280 0 271 0 260V60C0 49 9 40 20 40H300C311 40 320 49 320 60V180L220 280zM280 80H40V240H200V200H60V180H200V160H280V80zM220 180V240L280 180H220zM60 120H260V140H60V120z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Label.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Label.displayName = "Blueprint5.Icon.Label";
exports.default = exports.Label;
//# sourceMappingURL=label.js.map