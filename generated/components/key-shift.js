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
exports.KeyShift = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.KeyShift = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "key-shift", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M354.8 193L354.8 193L215 353.2L214.8 353C211.2 357.2 206 360 200 360S188.8 357.2 185.2 353L185 353.2L45 193.2L45.2 193C42 189.6 40 185 40 180C40 169 49 160 60 160H120V60C120 49 129 40 140 40H260C271 40 280 49 280 60V160H340C351 160 360 169 360 180C360 185 358 189.6 354.8 193z" : "M274.2000000000001 174.2L174.2 274.2C170.6 277.8 165.6 280 160 280S149.4 277.8 145.8 274.2L45.8 174.2C42.2 170.6 40 165.6 40 160C40 149 49 140 60 140H100V60C100 49 109 40 120 40H200C211 40 220 49 220 60V140H260C271 140 280 149 280 160C280 165.6 277.8 170.6 274.2000000000001 174.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.KeyShift.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.KeyShift.displayName = "Blueprint5.Icon.KeyShift";
exports.default = exports.KeyShift;
//# sourceMappingURL=key-shift.js.map