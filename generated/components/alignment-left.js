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
exports.AlignmentLeft = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.AlignmentLeft = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "alignment-left", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M20 400C9 400 0 391 0 380V20C0 9 9 0 20 0S40 9 40 20V380C40 391 31 400 20 400zM240 180H100C89 180 80 171 80 160V80C80 69 89 60 100 60H240C251 60 260 69 260 80V160C260 171 251 180 240 180zM380 340H100C89 340 80 331 80 320V240C80 229 89 220 100 220H380C391 220 400 229 400 240V320C400 331 391 340 380 340z" : "M180 140H100C89 140 80 131 80 120V60C80 49 89 40 100 40H180C191 40 200 49 200 60V120C200 131 191 140 180 140zM20 320C9 320 0 311 0 300V20C0 9 9 0 20 0S40 9 40 20V300C40 311 31 320 20 320zM280 280H100C89 280 80 271 80 260V200C80 189 89 180 100 180H280C291 180 300 189 300 200V260C300 271 291 280 280 280z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.AlignmentLeft.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.AlignmentLeft.displayName = "Blueprint5.Icon.AlignmentLeft";
exports.default = exports.AlignmentLeft;
//# sourceMappingURL=alignment-left.js.map