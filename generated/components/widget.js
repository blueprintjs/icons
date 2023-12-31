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
exports.Widget = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Widget = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "widget", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M360 320C382 320 400 338 400 360C400 382 382 400 360 400S320 382 320 360C320 338 338 320 360 320zM40 80C18 80 0 62 0 40C0 18 18 0 40 0S80 18 80 40C80 62 62 80 40 80zM340 100H380V300H340V100zM60 300H20V100H60V300zM40 400C18 400 0 382 0 360C0 338 18 320 40 320S80 338 80 360C80 382 62 400 40 400zM100 340H300V380H100V340zM360 80C338 80 320 62 320 40C320 18 338 0 360 0S400 18 400 40C400 62 382 80 360 80zM100 20H300V60H100V20z" : "M260 100H300V220H260V100zM60 220H20V100H60V220zM280 240C302 240 320 258 320 280C320 302 302 320 280 320S240 302 240 280C240 258 258 240 280 240zM40 80C18 80 0 62 0 40C0 18 18 0 40 0S80 18 80 40C80 62 62 80 40 80zM280 80C258 80 240 62 240 40C240 18 258 0 280 0S320 18 320 40C320 62 302 80 280 80zM100 260H220V300H100V260zM40 320C18 320 0 302 0 280C0 258 18 240 40 240S80 258 80 280C80 302 62 320 40 320zM100 20H220V60H100V20z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Widget.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Widget.displayName = "Blueprint5.Icon.Widget";
exports.default = exports.Widget;
//# sourceMappingURL=widget.js.map