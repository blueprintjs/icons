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
exports.ArrowTopRight = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.ArrowTopRight = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "arrow-top-right", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M340 360H140C129 360 120 351 120 340C120 329 129 320 140 320H291.8L45.8 74.2000000000001C42.2 70.6 40 65.6 40 60C40 49 49 40 60 40C65.6 40 70.6 42.2 74.2 45.8L320 291.8V140C320 129 329 120 340 120S360 129 360 140V340C360 351 351 360 340 360z" : "M260 280H120C109 280 100 271 100 260C100 249 109 240 120 240H211.8L46 74.2C42.2 70.6 40 65.6 40 60C40 49 49 40 60 40C65.6 40 70.6 42.2 74.2 45.8L240 211.8V120C240 109 249 100 260 100S280 109 280 120V260C280 271 271 280 260 280z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.ArrowTopRight.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.ArrowTopRight.displayName = "Blueprint5.Icon.ArrowTopRight";
exports.default = exports.ArrowTopRight;
//# sourceMappingURL=arrow-top-right.js.map