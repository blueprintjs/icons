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
exports.Array = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Array = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "array", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 400C390.2567160000001 400 398.710144 392.2791962 399.865446 382.3324225L400 380L400 20C400 9.743284 392.279196 1.289856 382.332422 0.134554L380 0L300 0C288.9543060000001 0 280 8.954306 280 20C280 30.256716 287.720804 38.710144 297.667578 39.865446L300 40L360 40L360 360L300 360C289.743284 360 281.289856 367.7208038 280.1345540000001 377.6675774000001L280 380C280 390.25671678 287.720804 398.7101432140001 297.667578 399.8654453736L300 400L380 400zM100 400C111.045695 400 120 391.045695 120 380C120 369.7432832 112.2791962 361.2898568 102.3324226 360.1345546L100 360L40 360L40 40L100 40C110.2567168 40 118.7101432 32.279196 119.8654454 22.332422L120 20C120 9.743284 112.2791962 1.289856 102.3324226 0.134554L100 0L20 0C9.74328322 0 1.289856786 7.720804 0.1345546266 17.667578L0 20L0 380C0 390.25671678 7.7208038 398.7101432140001 17.6675775 399.8654453734L20 400L100 400zM200 220C211.045694 220 220 211.045695 220 200C220 188.954306 211.045694 180 200 180C188.954305 180 180 188.954306 180 200C180 211.045695 188.954305 220 200 220zM120 220C131.045695 220 140 211.045695 140 200C140 188.954306 131.045695 180 120 180C108.954305 180 100 188.954306 100 200C100 211.045695 108.954305 220 120 220zM280 220C291.045694 220 300 211.045695 300 200C300 188.954306 291.045694 180 280 180C268.9543060000001 180 260 188.954306 260 200C260 211.045695 268.9543060000001 220 280 220z" : "M300 320C310.256716 320 318.710144 312.2791962 319.865446 302.3324225L320 300L320 20C320 9.743284 312.279196 1.289856 302.332422 0.134554L300 0L240 0C228.954306 0 220 8.954306 220 20C220 30.256716 227.720804 38.710144 237.667578 39.865446L240 40L280 40L280 280L240 280C229.743284 280 221.289856 287.7208038 220.134554 297.6675774000001L220 300C220 310.25671678 227.720804 318.7101432140001 237.667578 319.8654453734L240 320L300 320zM80 320C91.045695 320 100 311.045695 100 300C100 289.7432832 92.2791962 281.2898568 82.3324226 280.1345546L80 280L40 280L40 40L80 40C90.2567168 40 98.7101432 32.279196 99.8654454 22.332422L100 20C100 9.743284 92.2791962 1.289856 82.3324226 0.134554L80 0L20 0C9.74328322 0 1.289856786 7.720804 0.1345546266 17.667578L0 20L0 300C0 310.25671678 7.7208038 318.7101432140001 17.6675775 319.8654453734L20 320L80 320zM160 180C171.045695 180 180 171.045695 180 160C180 148.954305 171.045695 140 160 140C148.954305 140 140 148.954305 140 160C140 171.045695 148.954305 180 160 180zM100 180C111.045695 180 120 171.045695 120 160C120 148.954305 111.045695 140 100 140C88.954305 140 80 148.954305 80 160C80 171.045695 88.954305 180 100 180zM220 180C231.045694 180 240 171.045695 240 160C240 148.954305 231.045694 140 220 140C208.954306 140 200 148.954305 200 160C200 171.045695 208.954306 180 220 180z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Array.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Array.displayName = "Blueprint5.Icon.Array";
exports.default = exports.Array;
//# sourceMappingURL=array.js.map