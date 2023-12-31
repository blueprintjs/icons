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
exports.KeyCommand = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.KeyCommand = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "key-command", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M310 160H280V240H310C348.6 240 380 271.4 380 310S348.6 380 310 380S240 348.6 240 310V280H160V310C160 348.6 128.6 380 90 380S20 348.6 20 310S51.4 240 90 240H120V160H90C51.4 160 20 128.6 20 90S51.4 20 90 20S160 51.4 160 90V120H240V90C240 51.4 271.4 20 310 20S380 51.4 380 90S348.6 160 310 160zM310 340C326.6 340 340 326.6 340 310S326.6 280 310 280S280 293.4 280 310S293.4 340 310 340zM90 60C73.4 60 60 73.4 60 90S73.4 120 90 120S120 106.6 120 90S106.6 60 90 60zM90 280C73.4 280 60 293.4 60 310S73.4 340 90 340S120 326.6 120 310S106.6 280 90 280zM240 160H160V240H240V160zM310 60C293.4 60 280 73.4 280 90S293.4 120 310 120S340 106.6 340 90S326.6 60 310 60z" : "M240 140H220V180H240C273.2 180 300 206.8 300 240S273.2 300 240 300S180 273.2 180 240V220H140V240C140 273.2 113.2 300 80 300S20 273.2 20 240S46.8 180 80 180H100V140H80C46.8 140 20 113.2 20 80S46.8 20 80 20S140 46.8 140 80V100H180V80C180 46.8 206.8 20 240 20S300 46.8 300 80S273.2 140 240 140zM240 260C251 260 260 251 260 240C260 229 251 220 240 220S220 229 220 240C220 251 229 260 240 260zM80 60C69 60 60 69 60 80C60 91 69 100 80 100S100 91 100 80C100 69 91 60 80 60zM80 220C69 220 60 229 60 240C60 251 69 260 80 260S100 251 100 240C100 229 91 220 80 220zM180 140H140V180H180V140zM240 60C229 60 220 69 220 80C220 91 229 100 240 100S260 91 260 80C260 69 251 60 240 60z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.KeyCommand.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.KeyCommand.displayName = "Blueprint5.Icon.KeyCommand";
exports.default = exports.KeyCommand;
//# sourceMappingURL=key-command.js.map