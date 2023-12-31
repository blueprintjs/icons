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
exports.Intersection = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Intersection = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "intersection", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M260 320C233.8 320 209.8 311.4 190 297.2C170.2 311.4 146.2 320 120 320C53.8 320 0 266.2000000000001 0 200S53.8 80 120 80C146.2 80 170.2 88.6 190 102.8C209.8 88.6 233.8 80 260 80C326.2 80 380 133.8 380 200S326.2 320 260 320zM161.4 131.8C149.2 124.4 135.2 120 120 120C75.8 120 40 155.8 40 200C40 244.2 75.8 280 120 280C135.2 280 149.2 275.6 161.4 268.2C148 248.8 140 225.4 140 200C140 174.6 148 151.2 161.4 131.8zM260 120C244.8 120 230.8 124.4 218.6 131.8C232 151.2 240 174.6 240 200C240 225.4 232 248.8 218.6 268.2C230.8 275.6 244.8 280 260 280C304.2000000000001 280 340 244.2 340 200C340 155.8 304.2000000000001 120 260 120z" : "M200 260C181.6 260 164.8 254.8 150 246.2C135.2 254.8 118.4 260 100 260C44.8 260 0 215.2 0 160S44.8 60 100 60C118.4 60 135.2 65.2 150 73.8C164.8 65.2 181.6 60 200 60C255.2 60 300 104.8 300 160S255.2 260 200 260zM118 103C112.2 101.2 106.2 100 100 100C66.8 100 40 126.8 40 160S66.8 220 100 220C106.2 220 112.2 218.8 118 217C106.6 200.8 100 181.2 100 160C100 138.8 106.6 119.2 118 103zM200 100C193.8 100 187.8 101.2 182 103C193.4 119.2 200 138.8 200 160C200 181.2 193.4 200.8 182 217C187.8 218.8 193.8 220 200 220C233.2 220 260 193.2 260 160S233.2 100 200 100z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Intersection.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Intersection.displayName = "Blueprint5.Icon.Intersection";
exports.default = exports.Intersection;
//# sourceMappingURL=intersection.js.map