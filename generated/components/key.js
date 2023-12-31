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
exports.Key = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Key = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "key", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M280 400C213.8 400 160 346.2 160 280C160 257.8 166.4 237.2 177 219.4L8.8 51.2C3.4 45.8 0 38.2 0 30C0 13.4 13.4 0 30 0C38.2 0 45.8 3.4 51.2 8.8L67 24.6L85.8 5.8C89.4 2.2 94.4 0 100 0S110.6 2.2 114.2 5.8L174.2 65.8C177.8 69.4 180 74.4 180 80C180 85.6 177.8 90.6 174.2 94.2000000000001L155.4 113L219.4 177C237.2 166.4 257.8 160 280 160C346.2 160 400 213.8 400 280S346.2 400 280 400zM280 220C246.8 220 220 246.8 220 280S246.8 340 280 340S340 313.2 340 280S313.2 220 280 220z" : "M220 320C164.8 320 120 275.2 120 220C120 199.6 126.2 180.8 136.6 165L5.8 34.2C2.2 30.6 0 25.6 0 20C0 9 9 0 20 0C25.6 0 30.6 2.2 34.2 5.8L60 31.8L85.8 6C89.4 2.2 94.4 0 100 0S110.6 2.2 114.2 5.8L154.2 45.8C157.8 49.4 160 54.4 160 60C160 65.6 157.8 70.6 154.2 74.2L128.2 100L164.8 136.6C180.8 126.2 199.6 120 220 120C275.2 120 320 164.8 320 220S275.2 320 220 320zM220 160C215.4 160 211 160.6 206.8 161.6C206.6 161.6 206.4 161.8 206.2 161.8C202 162.8 198 164.2 194.2 166C181.8 172 172 181.8 166 194.2C164.2 198 162.8 202 161.8 206C161.8 206.2 161.6 206.4 161.6 206.6C160.6 211 160 215.4 160 220C160 253.2 186.8 280 220 280S280 253.2 280 220S253.2 160 220 160z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Key.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Key.displayName = "Blueprint5.Icon.Key";
exports.default = exports.Key;
//# sourceMappingURL=key.js.map