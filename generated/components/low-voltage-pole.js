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
exports.LowVoltagePole = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.LowVoltagePole = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "low-voltage-pole", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M200 400C188.9542 400 180 391.04568 180 380V340H100V360C100 371.0456 91.0456 380 80 380C68.9544 380 60 371.0456 60 360V340H40C28.9544 340 20 331.0456000000001 20 320C20 308.9544 28.9544 300 40 300H60V260H40C28.9544 260 20 251.0456 20 240C20 228.9544 28.9544 220 40 220H120C131.0456 220 140 228.9544 140 240C140 251.0456 131.0456 260 120 260H100V300H180V20C180 8.954 188.9542 0 200 0C211.046 0 220 8.954 220 20V300H300V260H280C268.954 260 260 251.0456 260 240C260 228.9544 268.954 220 280 220H360C371.046 220 380 228.9544 380 240C380 251.0456 371.046 260 360 260H340V300H360C371.046 300 380 308.9544 380 320C380 331.0456000000001 371.046 340 360 340H340V360C340 371.0456 331.046 380 320 380C308.954 380 300 371.0456 300 360V340H220V380C220 391.0457 211.046 400 200 400z" : "M160 320C148.9544 320 140 311.0457 140 300V280H60V290C60 295.5228 55.5228 300 50 300C44.4772 300 40 295.5228 40 290V280C28.9544 280 20 271.0456 20 260C20 248.9544 28.9544 240 40 240L40 220H30C24.4772 220 20 215.5228 20 210C20 204.4772 24.4772 200 30 200H70C75.5228 200 80 204.4772 80 210C80 215.5228 75.5228 220 70 220H60V240H140V20C140 8.954 148.9544 0 160 0C171.0456 0 180 8.954 180 20V240H260V220H250C244.478 220 240 215.5228 240 210C240 204.4772 244.478 200 250 200H290C295.522 200 300 204.4772 300 210C300 215.5228 295.522 220 290 220H280L280 240C291.046 240 300 248.9544 300 260C300 271.0456 291.046 280 280 280L280 290C280 295.5228 275.522 300 270 300C264.478 300 260 295.5228 260 290V280H180V300C180 311.0457 171.0456 320 160 320z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.LowVoltagePole.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.LowVoltagePole.displayName = "Blueprint5.Icon.LowVoltagePole";
exports.default = exports.LowVoltagePole;
//# sourceMappingURL=low-voltage-pole.js.map