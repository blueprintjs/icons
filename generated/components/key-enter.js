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
exports.KeyEnter = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.KeyEnter = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "key-enter", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M360 360C349 360 340 351 340 340V240C340 195.8 304.2000000000001 160 260 160H88.2L134 205.8C137.8 209.4 140 214.4 140 220C140 231 131 240 120 240C114.4 240 109.4 237.8 105.8 234.2L25.8 154.2C22.2 150.6 20 145.6 20 140C20 134.4 22.2 129.4 25.8 125.8L105.8 45.8C109.4 42.2 114.4 40 120 40C131 40 140 49 140 60C140 65.6 137.8 70.6 134.2 74.2000000000001L88.2 120H260C326.2 120 380 173.8 380 240V340C380 351 371 360 360 360z" : "M280 280C269 280 260 271 260 260V200C260 166.8 233.2 140 200 140H88.2L114 165.8C117.8 169.4 120 174.4 120 180C120 191 111 200 100 200C94.4 200 89.4 197.8 85.8 194.2L25.8 134.2C22.2 130.6 20 125.6 20 120C20 114.4 22.2 109.4 25.8 105.8L85.8 45.8C89.4 42.2 94.4 40 100 40C111 40 120 49 120 60C120 65.6 117.8 70.6 114.2 74.2L88.2 100H200C255.2 100 300 144.8 300 200V260C300 271 291 280 280 280z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.KeyEnter.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.KeyEnter.displayName = "Blueprint5.Icon.KeyEnter";
exports.default = exports.KeyEnter;
//# sourceMappingURL=key-enter.js.map