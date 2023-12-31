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
exports.TimelineBarChart = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.TimelineBarChart = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "timeline-bar-chart", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 60H20C9 60 0 51 0 40C0 29 9 20 20 20H380C391 20 400 29 400 40C400 51 391 60 380 60zM180 80H220C231 80 240 89 240 100V360C240 371 231 380 220 380H180C169 380 160 371 160 360V100C160 89 169 80 180 80zM300 80H340C351 80 360 89 360 100V280C360 291 351 300 340 300H300C289 300 280 291 280 280V100C280 89 289 80 300 80zM60 80H100C111 80 120 89 120 100V220C120 231 111 240 100 240H60C49 240 40 231 40 220V100C40 89 49 80 60 80z" : "M160 80H180C191 80 200 89 200 100V280C200 291 191 300 180 300H160C149 300 140 291 140 280V100C140 89 149 80 160 80zM260 80H280C291 80 300 89 300 100V220C300 231 291 240 280 240H260C249 240 240 231 240 220V100C240 89 249 80 260 80zM300 60H40C29 60 20 51 20 40S29 20 40 20H300C311 20 320 29 320 40S311 60 300 60zM60 80H80C91 80 100 89 100 100V180C100 191 91 200 80 200H60C49 200 40 191 40 180V100C40 89 49 80 60 80z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.TimelineBarChart.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.TimelineBarChart.displayName = "Blueprint5.Icon.TimelineBarChart";
exports.default = exports.TimelineBarChart;
//# sourceMappingURL=timeline-bar-chart.js.map