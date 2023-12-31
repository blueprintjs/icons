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
exports.Ninja = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Ninja = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "ninja", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M400 280C400 280 340.4 231.4 277.6 236.2C270.4 293.8 241 400 120 400C120 400 168.2 340.2 163.2 277.6C105.4 270.2 0 240.6 0 120C0 120 59.6 168.6 122.2 163.8C129.4 106.2 158.8 0 280 0C280 0 231.6 59.8000000000001 236.8 122.6C294.6 129.8 400 159.6 400 280zM200 160C178 160 160 178 160 200C160 222 178 240 200 240S240 222 240 200C240 178 222 160 200 160z" : "M320 220C320 220 269.6 177.8 220.8 180.2C220.6 222.2 207.8 315.4 100 320C100 320 142.2 269.2 139.2 220.2C97.2 219.8 4.6 207 0 100C0 100 51.2 142.4 100.4 139C100.8 96.8 113.8 4.6 220 0C220 0 178.2 50.8 181.2 99.8C223.4 100.2 315.4 113.4 320 220zM160 130C143.4 130 130 143.4 130 160S143.4 190 160 190S190 176.6 190 160S176.6 130 160 130z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Ninja.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Ninja.displayName = "Blueprint5.Icon.Ninja";
exports.default = exports.Ninja;
//# sourceMappingURL=ninja.js.map