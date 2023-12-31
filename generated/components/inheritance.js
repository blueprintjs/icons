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
exports.Inheritance = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Inheritance = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "inheritance", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M120 200C120 155.8 155.8 120 200 120L331.8 120L286 165.8C282.2 169.4 280 174.4 280 180C280 191 289 200 300 200C305.6 200 310.6 197.8 314.2000000000001 194.2L394.2000000000001 114.2000000000001C397.8 110.6 400 105.6 400 100C400 94.4 397.8 89.4 394.2000000000001 85.8L314.2000000000001 5.8C310.6 2.2 305.6 0 300 0C289 0 280 9 280 20C280 25.6 282.2 30.6 285.8 34.2L331.8 80L200 80C133.8 80 80 133.8 80 200L20 200C8.954305 200 0 208.954305 0 220L0 380C0 391.045695 8.954305 400 20 400L180 400C191.045695 400 200 391.045695 200 380L200 220C200 208.954305 191.045695 200 180 200L120 200zM40 360L40 240L160 240L160 360L40 360z" : "M100 160C100 126.8 126.8 100 160 100L251.8 100L226 125.8C222.2 129.4 220 134.4 220 140C220 151 229 160 240 160C245.6 160 250.6 157.8 254.2 154.2L314.2000000000001 94.2C317.8 90.6 320 85.6 320 80C320 74.4 317.8 69.4 314.2000000000001 65.8L254.2 5.8C250.6 2.2 245.6 0 240 0C229 0 220 9 220 20C220 25.6 222.2 30.6 225.8 34.2L251.8 60L160 60C104.8 60 60 104.8 60 160L20 160C8.954305 160 0 168.954305 0 180L0 300C0 311.045695 8.954305 320 20 320L140 320C151.045695 320 160 311.045695 160 300L160 180C160 168.954305 151.045695 160 140 160L100 160zM40 280L40 200L120 200L120 280L40 280z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Inheritance.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Inheritance.displayName = "Blueprint5.Icon.Inheritance";
exports.default = exports.Inheritance;
//# sourceMappingURL=inheritance.js.map