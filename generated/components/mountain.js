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
exports.Mountain = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Mountain = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "mountain", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M400 80L80 80L220 300L240 300L280 260L300 260L400 80zM320 180L290 240L270 240L250 260L230 280L160 170L220 200L240 180L260 200L320 180zM161.0911966 240L55.7920514 80L0 80L140 240L161.0911966 240z" : "M320 60L60 60L180 240L200 240L240 200L260 200L320 60zM270 130L250 180L230 180L190 220L130 130L180 160L200 140L220 160L270 130zM118.7912744 180L36.367032 60L0 60L100 180L118.7912744 180z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Mountain.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Mountain.displayName = "Blueprint5.Icon.Mountain";
exports.default = exports.Mountain;
//# sourceMappingURL=mountain.js.map