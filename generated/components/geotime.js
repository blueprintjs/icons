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
exports.Geotime = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Geotime = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "geotime", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M311.094 260C263.594 260 225 222.6562 225 176.718C225 130.624 311.094 0 311.094 0C311.094 0 397.188 130.624 397.188 176.718C397.0320000000001 222.6562 358.594 260 311.094 260zM311.094 135C289.532 135 272.032 152.5 272.032 174.062C272.032 195.624 289.532 213.125 311.094 213.125C332.656 213.125 350.156 195.624 350.156 174.062C350.156 152.5 332.656 135 311.094 135zM0 250C0 332.875 67.125 400 150 400C222.914 400 283.636 348.0416 297.18 279.1122000000001C284.322 277.4600000000001 272.14 273.5506000000001 261.096 267.7906C252.552 321.4208 206.01 362.5 150 362.5C87.9374 362.5 37.5 312.0626 37.5 250C37.5 187.938 87.9374 137.5 150 137.5C171.4086 137.5 191.434 143.502 208.484 153.912C211.294 143.396 215.52 132.336 220.086 121.744C220.596 120.56 221.116 119.368 221.646 118.17C200.36 106.582 175.9528 100 150 100C67.125 100 0 167.126 0 250zM168.75 321.2516V257.6876L200.812 225.8126C204.188 222.4376 206.25 217.75 206.25 212.5C206.25 202.1876 197.8124 193.75 187.5 193.75C182.25 193.75 177.5626 195.812 174.1876 199.188L136.6874 236.6876C133.3126 240.0626 131.25 244.75 131.25 250V321.2516C131.25 331.5642000000001 139.6876 340.0016 150 340.0016C160.3124 340.0016 168.75 331.5642000000001 168.75 321.2516z" : "M248.876 200C210.876 200 180 170.125 180 133.375C180 96.5 248.876 0 248.876 0C248.876 0 317.75 96.5 317.75 133.375C317.626 170.125 286.876 200 248.876 200zM250 100C233.44 100 220 113.44 220 130C220 146.56 233.44 160 250 160C266.56 160 280 146.56 280 130C280 113.44 266.56 100 250 100zM0 200C0 266.3 53.7 320 120 320C179.7336 320 229.24 276.4102000000001 238.46 219.2886C228.116 218.004 218.318 215.0162 209.378 210.6262C204.108 255.2812 166.0552 290 120 290C70.35 290 30 249.65 30 200C30 150.35 70.35 110 120 110C134.9972 110 149.146 113.682 161.5904 120.1888C163.4652 111.698 166.899 101.938 171.3608 91.506C155.7928 84.128 138.3806 80 120 80C53.7 80 0 133.7 0 200zM135 244.9992V206.15L160.65 180.65C163.35 177.95 165 174.2 165 170C165 161.75 158.25 155 150 155C145.8 155 142.05 156.65 139.35 159.35L109.35 189.35C106.65 192.05 105 195.8 105 200V244.9992C105 253.2492 111.75 259.9992 120 259.9992C128.25 259.9992 135 253.2492 135 244.9992z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Geotime.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Geotime.displayName = "Blueprint5.Icon.Geotime";
exports.default = exports.Geotime;
//# sourceMappingURL=geotime.js.map