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
exports.Pause = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Pause = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "pause", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M140 340H80C69 340 60 331 60 320V80C60 69 69 60 80 60H140C151 60 160 69 160 80V320C160 331 151 340 140 340zM320 340H260C249 340 240 331 240 320V80C240 69 249 60 260 60H320C331 60 340 69 340 80V320C340 331 331 340 320 340z" : "M120 260H80C69 260 60 251 60 240V80C60 69 69 60 80 60H120C131 60 140 69 140 80V240C140 251 131 260 120 260zM240 260H200C189 260 180 251 180 240V80C180 69 189 60 200 60H240C251 60 260 69 260 80V240C260 251 251 260 240 260z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Pause.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Pause.displayName = "Blueprint5.Icon.Pause";
exports.default = exports.Pause;
//# sourceMappingURL=pause.js.map