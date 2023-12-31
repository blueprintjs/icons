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
exports.SortAlphabetical = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.SortAlphabetical = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "sort-alphabetical", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M160 100C154.4 100 149.4 97.8 145.8 94.2000000000001L120 68.2V179.8C120 190.8 111 199.8 100 199.8S80 190.8 80 179.8V68.2L54.2 94H54.2C50.6 97.6 45.6 100 40 100C29 100 20 91 20 80C20 74.4 22.2 69.4 25.8 65.8H25.8L85.8 5.8C89.4 2.2 94.4 0 100 0S110.6 2.2 114.2 5.8L174.2 65.8C177.8 69.4 180 74.4 180 80C180 91 171 100 160 100zM337.8 115.8V140.2H226V114.2H296.2L220 24.4V0H339.8000000000001V26H261.6L337.8 115.8zM299.4000000000001 400H260.4000000000001L180.2 179.8H218L237.6 238.2H321L340.6 179.8H379.8000000000001L299.4000000000001 400zM247.6 267.4L279.2000000000001 362.2H280L311.4 267.4H247.6z" : "M120 80C114.4 80 109.4 77.8 105.8 74.2L100 68.2V140C100 151 91 160 80 160C69 160 60 151 60 140V68.2L54.2 74H54.2C50.6 77.8 45.6 80 40 80C29 80 20 71 20 60C20 54.4 22.2 49.4 25.8 45.8L65.8 5.8C69.6 2.2 74.6 0 80 0C85.6 0 90.6 2.2 94.2 5.8L134.2 45.8C137.8 49.4 140 54.4 140 60C140.2 71 131.2 80 120 80zM278.6 99V119.8H185V97.6H243.8L180 20.8V0H280.4V22.2H215L278.6 99zM250.2 195.8L262.6 160.2H300L238.8 319.8H202L140 160.2H176.2L189 195.8H250.2zM219.8 280.6H220.2L240.8 222H198.4L219.8 280.6z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.SortAlphabetical.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.SortAlphabetical.displayName = "Blueprint5.Icon.SortAlphabetical";
exports.default = exports.SortAlphabetical;
//# sourceMappingURL=sort-alphabetical.js.map