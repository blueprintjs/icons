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
exports.Lock = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Lock = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "lock", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M318.6 220H280V300.2C280 344.4 244.2 380.2 200 380.2S120 344.4 120 300.2V220H78.6C67.6 220 60 211.2 60 200.2V40.1999999999999C60 29.2 67.6 20 78.6 20H318.6C329.6 20 340 29.2 340 40.2V200.2000000000001C340 211.2 329.6 220 318.6 220zM160 220V300.2C160 322.2 178 340.2 200 340.2S240 322.2 240 300.2V220H160z" : "M279.2000000000001 180H240V241C240 284.6 204.2 320 160 320S80 284.6 80 241V180H39.2C28.2 180 20 173 20 162V23.8C20 13 28.2 0 39.2 0H279.2000000000001C290.2000000000001 0 300 13 300 23.8V162C300 173 290.2 180 279.2000000000001 180zM120 180V241C120 262.8 138 280.4 160 280.4S200 262.8 200 241V180H120z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Lock.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Lock.displayName = "Blueprint5.Icon.Lock";
exports.default = exports.Lock;
//# sourceMappingURL=lock.js.map