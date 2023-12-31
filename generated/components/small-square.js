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
exports.SmallSquare = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.SmallSquare = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "small-square", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M100 300V100H300V300H100zM80 340C68.9544 340 60 331.0456000000001 60 320V80C60 68.954 68.9544 60 80 60H320C331.046 60 340 68.954 340 80V320C340 331.0456000000001 331.046 340 320 340H80z" : "M100 220V100H220V220H100zM80 260C68.9544 260 60 251.0456 60 240V80C60 68.954 68.9544 60 80 60H240C251.046 60 260 68.954 260 80V240C260 251.0456 251.046 260 240 260H80z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.SmallSquare.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.SmallSquare.displayName = "Blueprint5.Icon.SmallSquare";
exports.default = exports.SmallSquare;
//# sourceMappingURL=small-square.js.map