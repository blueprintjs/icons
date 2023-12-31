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
exports.Percentage = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Percentage = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "percentage", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M300 200C266.8 200 240 173.2 240 140V100C240 66.8 266.8 40 300 40S360 66.8 360 100V140C360 173.2 333.2 200 300 200zM320 100C320 89 311 80 300 80S280 89 280 100V140C280 151 289 160 300 160S320 151 320 140V100zM160 260V300C160 333.2 133.2 360 100 360S40 333.2 40 300V260C40 226.8 66.8 200 100 200S160 226.8 160 260zM80 260V300C80 311 89 320 100 320S120 311 120 300V260C120 249 111 240 100 240S80 249 80 260zM300 340C300 351 291 360 280 360C272.4 360 265.8 355.8 262.4 349.6L102.8 70.2000000000001C101 67.2 100 63.8 100 60C100 49 109 40 120 40C127.6 40 134.2 44.2 137.6 50.4L297.4000000000001 329.8C299 332.8 300 336.2 300 340z" : "M120 200V240C120 262 102 280 80 280H60C38 280 20 262 20 240V200C20 178 38 160 60 160H80C102 160 120 178 120 200zM70 200C64.4 200 60 204.4 60 210V230C60 235.6 64.4 240 70 240S80 235.6 80 230V210C80 204.4 75.6 200 70 200zM260 160H240C218 160 200 142 200 120V80C200 58 218 40 240 40H260C282 40 300 58 300 80V120C300 142 282 160 260 160zM260 90C260 84.4 255.6 80 250 80S240 84.4 240 90V110C240 115.6 244.4 120 250 120S260 115.6 260 110V90zM240 260C240 271 231 280 220 280C212.6 280 206.2 276 202.6 270L82.8 70.4C81 67.4 80 63.8 80 60C80 49 89 40 100 40C107.4 40 113.8 44 117.4 50L237.2 249.6C239 252.6 240 256.2 240 260z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Percentage.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Percentage.displayName = "Blueprint5.Icon.Percentage";
exports.default = exports.Percentage;
//# sourceMappingURL=percentage.js.map