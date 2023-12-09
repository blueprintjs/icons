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
exports.ChevronForward = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.ChevronForward = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "chevron-forward", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M260 340C249 340 240 331 240 320V228.2L134.2 334.2C130.6 337.8 125.6 340 120 340C109 340 100 331 100 320C100 314.4 102.2 309.4 105.8 305.8L211.8 200L106 94.2000000000001C102.2 90.6 100 85.6 100 80C100 69 109 60 120 60C125.6 60 130.6 62.2 134.2 65.8L240 171.8V80C240 69 249 60 260 60S280 69 280 80V320C280 331 271 340 260 340z" : "M200 260C189 260 180 251 180 240V188.2L114.2 254.2C110.6 257.8 105.6 260 100 260C89 260 80 251 80 240C80 234.4 82.2 229.4 85.8 225.8L151.8 160L86 94.2C82.2 90.6 80 85.6 80 80C80 69 89 60 100 60C105.6 60 110.6 62.2 114.2 65.8L180 131.8V80C180 69 189 60 200 60S220 69 220 80V240C220 251 211 260 200 260z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.ChevronForward.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.ChevronForward.displayName = "Blueprint5.Icon.ChevronForward";
exports.default = exports.ChevronForward;
//# sourceMappingURL=chevron-forward.js.map