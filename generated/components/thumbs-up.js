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
exports.ThumbsUp = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.ThumbsUp = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "thumbs-up", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M60 220H0V60H60C71 60 80 69 80 80V200C80 211 71 220 60 220zM399.8 158.2C397.8 173.2 381.6 183 364 185.2C360.2 185.6 356 186.2 351.8 186.4C353.2 186.6 354.6 186.6 355.8 186.8C373.4 188.8 386.4 199 384.6 213.8C382.6 228.6 366.4 238.6 348.8 240.8C340.4 241.8 330.8000000000001 242.6 320.4000000000001 243.2H320.4000000000001C320.4000000000001 243.2 320.4000000000001 243.2 320.2000000000001 243.2C314.2000000000001 243.4 308.0000000000001 243.6 301.4000000000001 243.8C289.4000000000001 244.2 273.6 244.8 261.6 245.8C252.6000000000001 246.4 251.4000000000001 253 252.2 259.4C260.8 282.4 265.6 308.4 264.6 334.2C263.8 356.4 249.8 377.6 229.6 379.8C212.8 381.6 200.6 369.8 205 354.6C219 305.2 153.4 246 100 213V58.6C141.6 32 208.8 18.4 287 20C291.8 20 296.8 20.2 302.4 20.4C303.2 20.4 303.8 20.4 304.6 20.4L304.6 20.4C310 20.8 316 21.2 322.8 21.8C340.3999999999999 23.4 361.2 35 360.2 50C359.4 63 350.2 70.2000000000001 338.4 74C345.2 74.6 351.8 75 358.2 75.6C376 77.1999999999999 389.2 87.1999999999999 387.4 102.1999999999999C385.8 117.1999999999999 369.8 127.1999999999999 352.2 129.5999999999999C351.5999999999999 129.5999999999999 351 129.8 350.3999999999999 129.8C357.8 130.1999999999999 364.5999999999999 130.5999999999999 370.7999999999999 131C389 132 401.8 143.2 399.8 158.2z" : "M319.8 127.6C318.2 139.2 305.2 146.8 291.2 148.6C288.2 149 284.8 149.4 281.4 149.6000000000001C282.6 149.8000000000001 283.6 149.8000000000001 284.6 150C298.8 151.6 309.2000000000001 159.4 307.6 171C306 182.6 293 190.2000000000001 279 192C272.2000000000001 192.8 264.6 193.4 256.4 193.8H256.4C256.4 193.8 256.4 193.8 256.2 193.8C251.4 194 246.4 194.2 241.2 194.2C231.6 194.6 219 195 209.4 195.8C202.2 196.4 201.2 201.4 202 206.4C209 224.4 212.8 244.6 212 264.6C211.2 281.6 200 298.2 183.8 300C170.4 301.4 160.6 292.2 164 280.4C175.2 241.8 122.6 196 80 170.2V50.2C113.2 29.6 167 19 229.6 20.2C233.4 20.2 237.4000000000001 20.4 242 20.6C242.6 20.6 243.2 20.6 243.8 20.6L243.8 20.6C248.2 20.8 253 21.2 258.4 21.6C272.6 22.8 289.2000000000001 31.8 288.4 43.4C287.8 53.6 280.4 59.2000000000001 271 62C276.4 62.4 281.8 62.8 286.8 63.2C301 64.4 311.6 72.2 310.2 84C309 95.6 296.2 103.4 282 105.4C281.6 105.4 281 105.6 280.6 105.6C286.4 106 292 106.2 296.8 106.6C311 107.2 321.4 116 319.8 127.6zM40 180H0V40H40C51 40 60 49 60 60V160C60 171.2 51 180 40 180z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.ThumbsUp.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.ThumbsUp.displayName = "Blueprint5.Icon.ThumbsUp";
exports.default = exports.ThumbsUp;
//# sourceMappingURL=thumbs-up.js.map