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
exports.FastBackward = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.FastBackward = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "fast-backward", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M360 340C355.4 340 351.6 338.2 348.2 335.8L348 336L220 240V320C220 331 211 340 200 340C195.4 340 191.6 338.2 188.2 335.8L188 336L28 216L28.2 215.8C23.4 212 20 206.6 20 200S23.4 188 28.2 184.2L28 184L188 64L188.2 64.2000000000001C191.6 61.8 195.4 60 200 60C211 60 220 69 220 80V160L348 64L348.2 64.2000000000001C351.6 61.8 355.4 60 360 60C371 60 380 69 380 80V320C380 331 371 340 360 340z" : "M280 260C275.2 260 271.2 258.2 267.6 255.4L267.4000000000001 255.6L180 185.6V240C180 251 171 260 160 260C155.2 260 151.2 258.2 147.6 255.4L147.6 255.6L47.6 175.6C47.6 175.6 47.8 175.4 47.8 175.4C43.2 171.8 40 166.4 40 160S43.2 148.2 47.6 144.6L47.6 144.4L147.6 64.4L147.8 64.6C151.2 61.8 155.2 60 160 60C171 60 180 69 180 80V134.4L267.6 64.4L267.8 64.6C271.2 61.8 275.2 60 280 60C291 60 300 69 300 80V240C300 251 291 260 280 260z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.FastBackward.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.FastBackward.displayName = "Blueprint5.Icon.FastBackward";
exports.default = exports.FastBackward;
//# sourceMappingURL=fast-backward.js.map