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
exports.Heatmap = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Heatmap = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "heatmap", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M0 280A120 120 0 0 1 240 280A120 120 0 0 1 0 280M120 150A90 90 0 0 1 300 150A90 90 0 0 1 120 150M260 190A70 70 0 0 1 400 190A70 70 0 0 1 260 190M320 40A40 40 0 0 1 400 40A40 40 0 0 1 320 40M0 70A50 50 0 0 1 100 70A50 50 0 0 1 0 70M280 350A50 50 0 0 1 380 350A50 50 0 0 1 280 350" : "M40 100C18 100 0 82 0 60C0 38 18 20 40 20S80 38 80 60C80 82 62 100 40 100zM260 240C282 240 300 258 300 280S282 320 260 320S220 302 220 280S238 240 260 240zM320 150C320 177.6 297.6 200 270 200C250.4 200 233.6 188.6 225.4 172.2C213.4 187.8 195.2 198.2 174.2 199.4C177.8 209.2 180 219.2 180 230C180 279.8 139.8 320 90 320S0 279.8 0 230S40.2 140 90 140C93.8 140 97.4 140.6 101.2 141.2C100.6 137.4 100 133.8 100 130C100 91.4 131.4 60 170 60C202.6 60 229.6 82.2 237.4000000000001 112.4C246.2 104.8 257.4000000000001 100 270 100C297.6 100 320 122.4 320 150zM290 60C273.4 60 260 46.6 260 30S273.4 0 290 0S320 13.4 320 30S306.6 60 290 60z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Heatmap.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Heatmap.displayName = "Blueprint5.Icon.Heatmap";
exports.default = exports.Heatmap;
//# sourceMappingURL=heatmap.js.map