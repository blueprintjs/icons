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
exports.ChevronLeft = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.ChevronLeft = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "chevron-left", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M168.2 200L274 305.8C277.8 309.4 280 314.4 280 320C280 331 271 340 260 340C254.4 340 249.4 337.8 245.8 334.2L125.8 214.2C122.2 210.6 120 205.6 120 200C120 194.4 122.2 189.4 125.8 185.8L245.8 65.8C249.4 62.2 254.4 60 260 60C271 60 280 69 280 80C280 85.6 277.8 90.6 274.2000000000001 94.2000000000001L168.2 200z" : "M148.2 160L214 225.8C217.8 229.4 220 234.4 220 240C220 251 211 260 200 260C194.4 260 189.4 257.8 185.8 254.2L105.8 174.2C102.2 170.6 100 165.6 100 160C100 154.4 102.2 149.4 105.8 145.8L185.8 65.8C189.4 62.2 194.4 60 200 60C211 60 220 69 220 80C220 85.6 217.8 90.6 214.2 94.2L148.2 160z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.ChevronLeft.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.ChevronLeft.displayName = "Blueprint5.Icon.ChevronLeft";
exports.default = exports.ChevronLeft;
//# sourceMappingURL=chevron-left.js.map