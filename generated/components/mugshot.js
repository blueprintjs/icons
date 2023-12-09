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
exports.Mugshot = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Mugshot = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "mugshot", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 400H20C9 400 0 391 0 380V20C0 9 9 0 20 0H380C391 0 400 9 400 20V380C400 391 391 400 380 400zM360 40H358.6C357.6 44 356.2 48.4 354.2000000000001 53.4C345 74.4 300.6 88.4 271 101.4C241.4 114.4 245.4000000000001 122.4 244.4 133.2000000000001C244.2 134.6 244.2 136.2000000000001 244.2 137.8000000000001C254.4 146.8000000000001 262.6 159.2000000000001 268 173.4C268 173.4 268.2 174.2 268.4 174.4C269.6 177.4000000000001 270.6 180.8000000000001 271.4 184.0000000000001C278.2 185.4000000000001 282.2 192.8000000000001 283.6 199.6000000000001C285.2 202.4000000000001 288.2 209.2000000000001 287.6 217C286.6 227.0000000000001 282.6 231.6 278.2 233.4000000000001C278.2 234.0000000000001 278.2 234.6000000000001 278.2 235.2000000000001C278.2 247.8000000000001 277 266.2000000000001 274.8 278.2000000000001C274.4 281.6 273.6 284.8000000000001 272.6 288.2000000000001C268.2 302.8000000000001 259.2 316 246.8 325.4000000000001C234 335 216.2 340 200.4 340S166.8 335 154.2 325.4C142 316 132.8 302.8 128.4 288.2C127.4 285 126.6 281.6 126.2 278.2C123.8 266.2 122.8 248 122.8 235.4C122.8 234.8 122.8 234.4 122.8 233.8C118 232 114 227.4 113 217.2C112.2 209.4 115.4 202.6 117 199.8C118.6 192.8 122.6 185.4 129.6 184.2C130.4 180.8 131.4 177.6 132.6 174.6C132.6 174.4 132.8 174.2 132.8 174L133 173.8C138.4 159.4 147 146.8000000000001 157.4 137.8C157.4 136.4 157.2 135 157.2 133.6C156.2 122.8 159.2 114.8 129.6 101.8C100 88.8 55.6 74.8 46.4 53.8C44 48.4 42.8 44 41.8 40H40V360H360V40z" : "M300 320H20C9 320 0 311 0 300V20C0 9 9 0 20 0H300C311 0 320 9 320 20V300C320 311 311 320 300 320zM280 40H277C276.4 41.8 276.2 43.2 275.4 45C268.6 60.8 235.2 71.2 213 81C190.8 90.8 193.8 96.8 193 105C192.8 106.2 192.8 107.4 192.8 108.6C200.4 115.4 206.6 124.6 210.6 135.2C210.6 135.2 210.8 135.8 210.8 136C211.6 138.4 212.4 140.8 213 143.2C218 144.2 221 149.8 222.2 155C223.4 157 225.8 162.2 225.2 168C224.4 175.4 221.4 179 218.2 180.4C218.2 180.8 218.2 181.2 218.2 181.6C218.2 191.2 217.4 204.8 215.6 213.8C215.2 216.2 214.6 218.8 214 221.2C210.8 232.2 203.8 242.2 194.8 249C185.2 256.2 172 260 160 260C148.2 260 134.8 256.2 125.4 249C116.4 242 109.4 232.2 106.2 221.2C105.4 218.6 105 216.2 104.6 213.6C102.8 204.6 102 191 102 181.4C102 181 102 180.6 102 180.2C98.4 179 95.4 175.4 94.6 167.8C94 162 96.4 157 97.6 154.8C98.8 149.6 101.8 144 107 143C107.6 140.6 108.4 138 109.2 135.8C109.2 135.6 109.4 135.4 109.4 135.4L109.4 135.2000000000001C113.6 124.4 120 115 127.8 108.2C127.8 107.2 127.6 106 127.6 105C126.8 96.8 129.2 91 107 81C84.8 71.2 51.6 60.8 44.6 45C43.8 43.2 43.6 41.8 43 40H40V280H280V40z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Mugshot.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Mugshot.displayName = "Blueprint5.Icon.Mugshot";
exports.default = exports.Mugshot;
//# sourceMappingURL=mugshot.js.map