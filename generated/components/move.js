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
exports.Move = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Move = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "move", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M394.2000000000001 214.2L334.2000000000001 274.2000000000001C330.6 277.8 325.6 280 320 280C309 280 300 271 300 260C300 254.4 302.2 249.4 305.8 245.8L331.8 220H220V331.8L245.8 306C249.4 302.2 254.4 300 260 300C271 300 280 309 280 320C280 325.6 277.8 330.6 274.2000000000001 334.2L214.2 394.2C210.6 397.8 205.6 400 200 400S189.4 397.8 185.8 394.2L125.8 334.2C122.2 330.6 120 325.6 120 320C120 309 129 300 140 300C145.6 300 150.6 302.2 154.2 305.8L180 331.8V220H68.2L94 245.8C97.8 249.4 100 254.4 100 260C100 271 91 280 80 280C74.4 280 69.4 277.8 65.8 274.2L5.8 214.2C2.2 210.6 0 205.6 0 200C0 194.4 2.2 189.4 5.8 185.8L65.8 125.8C69.4 122.2 74.4 120 80 120C91 120 100 129 100 140C100 145.6 97.8 150.6 94.2 154.2L68.2 180H180V68.2L154.2 94C150.6 97.8 145.6 100 140 100C129 100 120 91 120 80C120 74.4 122.2 69.4 125.8 65.8L185.8 5.8C189.4 2.2 194.4 0 200 0S210.6 2.2 214.2 5.8L274.2000000000001 65.8C277.8 69.4 280 74.4 280 80C280 91 271 100 260 100C254.4 100 249.4 97.8 245.8 94.2000000000001L220 68.2V180H331.8L306 154.2C302.2 150.6 300 145.6 300 140C300 129 309 120 320 120C325.6 120 330.6 122.2 334.2000000000001 125.8L394.2000000000001 185.8C397.8 189.4 400 194.4 400 200C400 205.6 397.8 210.6 394.2000000000001 214.2z" : "M314.2000000000001 174.2L274.2000000000001 214.2C270.6 217.8 265.6 220 260 220C249 220 240 211 240 200C240 194.4 242.2 189.4 245.8 185.8L251.8 180H180V251.8L185.8 246C189.4 242.2 194.4 240 200 240C211 240 220 249 220 260C220 265.6 217.8 270.6 214.2 274.2L174.2 314.2C170.6 317.8 165.6 320 160 320S149.4 317.8 145.8 314.2L105.8 274.2C102.2 270.6 100 265.6 100 260C100 249 109 240 120 240C125.6 240 130.6 242.2 134.2 245.8L140 251.8V180H68.2L74 185.8C77.8 189.4 80 194.4 80 200C80 211 71 220 60 220C54.4 220 49.4 217.8 45.8 214.2L5.8 174.2C2.2 170.6 0 165.6 0 160C0 154.4 2.2 149.4 5.8 145.8L45.8 105.8C49.4 102.2 54.4 100 60 100C71 100 80 109 80 120C80 125.6 77.8 130.6 74.2 134.2L68.2 140H140V68.2L134.2 74C130.6 77.8 125.6 80 120 80C109 80 100 71 100 60C100 54.4 102.2 49.4 105.8 45.8L145.8 5.8C149.4 2.2 154.4 0 160 0S170.6 2.2 174.2 5.8L214.2 45.8C217.8 49.4 220 54.4 220 60C220 71 211 80 200 80C194.4 80 189.4 77.8 185.8 74.2L180 68.2V140H251.8L246 134.2C242.2 130.6 240 125.6 240 120C240 109 249 100 260 100C265.6 100 270.6 102.2 274.2000000000001 105.8L314.2000000000001 145.8C317.8 149.4 320 154.4 320 160C320 165.6 317.8 170.6 314.2000000000001 174.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Move.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Move.displayName = "Blueprint5.Icon.Move";
exports.default = exports.Move;
//# sourceMappingURL=move.js.map