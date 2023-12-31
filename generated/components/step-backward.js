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
exports.StepBackward = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.StepBackward = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "step-backward", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M300 340C295.4 340 291.6 338.2 288.2 335.8L288 336L160 240V320C160 331 151 340 140 340H100C89 340 80 331 80 320V80C80 69 89 60 100 60H140C151 60 160 69 160 80V160L288 64L288.2 64.2000000000001C291.6 61.8 295.4 60 300 60C311 60 320 69 320 80V320C320 331 311 340 300 340z" : "M240 260C235.2 260 231.2 258.2 227.6 255.4L227.4000000000001 255.6L140 185.6V240C140 251 131 260 120 260H100C89 260 80 251 80 240V80C80 69 89 60 100 60H120C131 60 140 69 140 80V134.4L227.6 64.4L227.8 64.6C231.2 61.8 235.2 60 240 60C251 60 260 69 260 80V240C260 251 251 260 240 260z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.StepBackward.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.StepBackward.displayName = "Blueprint5.Icon.StepBackward";
exports.default = exports.StepBackward;
//# sourceMappingURL=step-backward.js.map