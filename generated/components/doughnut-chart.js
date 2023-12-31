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
exports.DoughnutChart = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.DoughnutChart = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "doughnut-chart", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M320 200C320 133.8 266.2 80 200 80S80 133.8 80 200S133.8 320 200 320V400C89.6 400 0 310.4 0 200C0 89.6 89.6 0 200 0S400 89.6 400 200H320zM318.2 220H399C389.6 314.4 314.4000000000001 389.6 220 399V318C270.2 309.6 309.8 270.2 318.2 220z" : "M237.2 180H318.2C309 252.2 252.2 309.6 180 318.6V237.2C208 230 229.8 208 237.2 180zM240 160C240 115.8 204.2 80 160 80S80 115.8 80 160C80 204.2 115.8 240 160 240V320C71.6 320 0 248.4 0 160S71.6 0 160 0S320 71.6 320 160H240z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.DoughnutChart.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.DoughnutChart.displayName = "Blueprint5.Icon.DoughnutChart";
exports.default = exports.DoughnutChart;
//# sourceMappingURL=doughnut-chart.js.map