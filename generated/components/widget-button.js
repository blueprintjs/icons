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
exports.WidgetButton = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.WidgetButton = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "widget-button", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M20 320H380L380 320C391 320 400 311 400 300V100C400 89 391 80 380 80H20C9 80 0 89 0 100V300L0 300C0 311 9 320 20 320L20 320zM40 280V120H360V280H40zM120 180C109 180 100 189 100 200C100 211 109 220 120 220S140 211 140 200C140 189 131 180 120 180zM200 180C189 180 180 189 180 200C180 211 189 220 200 220C211 220 220 211 220 200C220 189 211 180 200 180zM280 180C269 180 260 189 260 200C260 211 269 220 280 220S300 211 300 200C300 189 291 180 280 180z" : "M20 260H300L300 260C311 260 320 251 320 240V80C320 69 311 60 300 60H20C9 60 0 69 0 80V240L0 240C0 251 9 260 20 260L20 260zM40 220V100H280V220H40zM100 140C89 140 80 149 80 160S89 180 100 180S120 171 120 160S111 140 100 140zM160 140C149 140 140 149 140 160S149 180 160 180S180 171 180 160S171 140 160 140zM220 140C209 140 200 149 200 160S209 180 220 180S240 171 240 160S231 140 220 140z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.WidgetButton.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.WidgetButton.displayName = "Blueprint5.Icon.WidgetButton";
exports.default = exports.WidgetButton;
//# sourceMappingURL=widget-button.js.map