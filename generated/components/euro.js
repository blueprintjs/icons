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
exports.Euro = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Euro = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "euro", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M177.8 310.6C189 316.8 202.4 320 218.4 320C227.2 320 235.4 318.6 243.4 315.6C251.4 312.8 258.6 308.6 264.8 303.6C268.2 300.8 271.4 297.6 274.2000000000001 294.2000000000001L320.6 340.6C317.4000000000001 343.6 314.6 347 311.2 349.8C298.8 359.6 284.6 367.2000000000001 268.8 372.4000000000001C252.8 377.4 236 380 218.4 380C193.6 380 171.4 375.6 151.8 366.8C132 358 115.4 345.8 102 330.4C88.4 314.8 78 296.8 70.8 276C69 270.8 68.2 265.2 66.8 260H40C29 260 20 251 20 240S29 220 40 220H60.8C60.6 216 60 212.4 60 208.4C60 205.4 60.6 202.8 60.6 200H40C29 200 20 191 20 180S29 160 40 160H66.2C67.6 154 68.8 148 70.8 142.2C78 121.8 88.4 103.8 102 88.8C115.6 73.6 132.2 61.8 151.8 53C171.4 44.4 193.6 40 218.4 40C238.2 40 256.4 43 273 49.2C289.6 55.2 304 64 316.4 75.6C317 76.2000000000001 317.4000000000001 76.8 318 77.4L269.8 120.4C269.6 120.2000000000001 269.4000000000001 120.0000000000001 269.4000000000001 119.8000000000001C257.2000000000001 106.4 240.2000000000001 99.8000000000001 218.6 99.8000000000001C202.6 99.8000000000001 189.2 103.0000000000001 178 109.2000000000001C166.8 115.4000000000001 157.8 123.6000000000001 151 134.0000000000001C145.4 141.6 141.6 150.6 138.4 160H240C251 160 260 169 260 180S251 200 240 200H131.2C131.2 202.8 130.8 205.6 130.8 208.4C130.8 212.4 131.2 216.2 131.4 220H260C271 220 280 229 280 240S271 260 260 260H138.8C141.8 269.2 145.6 278 150.6 285.6C157.6 296 166.6 304.4 177.8 310.6zM360 172.4V172C360 172.2 360 172.4 360 172.4L360 172.4z" : "M130.4 256.4C140.6 261.8 152.8 264.4 167 264.4C176.6 264.4 185.2 263.2 192.4 260.8C199.8 258.4 206 255 211.6 250.6C215.2 247.8 217.6 244 220.4 240.4L251 271C248.6 273.2 246.3999999999999 275.4 243.8 277.4C233.8 284.6 222.2 290.2 209 294C195.8 298 181.8 300 167 300C147.2 300 129.4 296.4 113.8 289.4C98 282.4 84.8 273 73.8 261.2C62.8 249.6 54.6 235.8 48.6 220H40C29 220 20 211 20 200C20 189 29 180 40 180H40.8C40.6 176.6 40 173.4 40 170C40 166.6 40.6 163.4 40.8 160H40C29 160 20 151 20 140C20 129 29 120 40 120H48.6C48.6 119.8 48.6 119.6 48.8 119.6C54.6 103.8 63 90 73.8 78.2C84.6 66.4 98 57 113.8 50.2C129.4 43.4 147.2 40 167 40C183.2 40 197.8 42.4 211.2 47.2C224.6 52 236.2 59 246.2 67.8C246.4 68 246.6 68.2 246.8 68.4L215.8 95C215.6 94.8 215.4 94.4 215.2 94.2C209.4 88.2 202.5999999999999 83.6 194.8 80.4C186.8 77 177.8 75.4 167.4 75.4C153.2 75.4 141 78 130.8 83.4C120.6 88.8 112.2 95.8 105.8 104.8C102 109.6 99 114.6 96.6 120H180C191 120 200 129 200 140C200 151 191 160 180 160H87C86.8 163.4 86.4 166.6 86.4 170C86.4 173.4 86.8 176.8 87 180H200C211 180 220 189 220 200C220 211 211 220 200 220H96.6C99.2 225.4 102 230.4 105.4 235.2C111.8 244 120.2 251.2 130.4 256.4zM280 140.4V140.2C280 140.2 280 140.4 280 140.4L280 140.4z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Euro.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Euro.displayName = "Blueprint5.Icon.Euro";
exports.default = exports.Euro;
//# sourceMappingURL=euro.js.map