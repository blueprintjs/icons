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
exports.ThFiltered = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.ThFiltered = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "th-filtered", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M346.66664 200L375.364396 234.4373624C378.359616 238.0316312 379.999934 242.5622404 379.9999600000001 247.2409266L380.000272 303.0002448L400 321L400 40C400 30 390 20 380 20L20 20C8 20 0 30 0 40L0 360C0 370 8 380 20 380L154.4444444 380L240 303L240 280L160 280L160 220L240 220L240 200L160 200L160 140L360 140L360 200L346.66664 200zM140 60L140 120L40 120L40 60L140 60zM140 140L140 200L40 200L40 140L140 140zM140 220L140 280L40 280L40 220L140 220zM360 60L360 120L160 120L160 60L360 60zM387 400C394.2000000000001 400 400 394.2 400 387.2C400 383.6 398.6 380.4 396.2 378L335.6 317.4L335.6 258.4C335.6 254.8 334.2000000000001 251.6 331.8 249.2L306.2 223.4C304 221.4 300.8 220 297.2 220C290.2 220 284.4000000000001 225.8 284.4000000000001 232.8L284.4000000000001 317.4L223.8 378C221.347826 380.43096952 219.978106 383.7471336 220 387.2C220 394.2 225.8 400 232.8 400L387 400z" : "M200 120L260 120L295.617406 164.5217584C298.454396 168.067996 300.0000100000001 172.4741722 300.00003 177.0155724L300.0002780000001 234.0002508L320 252L320 40C320 28 312 20 300 20L20 20C8 20 0 28 0 40L0 280C0 290 8 300 20 300L106.6666666 300L180 234L180 220L140 220L140 180L180 180L180 160L140 160L140 120L200 120zM120 60L120 100L40 100L40 60L120 60zM120 120L120 160L40 160L40 120L120 120zM120 180L120 220L40 220L40 180L120 180zM280 60L280 100L140 100L140 60L280 60zM309.6 320C315.8 320 320 314.8 320 308.6C320 305.4 318.8 302.6 316.6 300.4L259.4000000000001 245.8L259.4000000000001 193.2C259.4000000000001 190 258.2 187.2 256 185L239.6 163C237.6 161 234.6 159.6 231.4 159.6C225.2 159.6 220 164.8 220 171L220 245.8L163.4 300.4C161.2 302.6 160 305.4 160 308.6C160 314.8 165.2 320 171.4 320L309.6 320z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.ThFiltered.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.ThFiltered.displayName = "Blueprint5.Icon.ThFiltered";
exports.default = exports.ThFiltered;
//# sourceMappingURL=th-filtered.js.map