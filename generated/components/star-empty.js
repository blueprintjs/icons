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
exports.StarEmpty = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.StarEmpty = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "star-empty", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M400 248L262 270L200 400L138 268L0 248L100 146L76 0L200 68L324 0L300 144L400 248zM200 100L110 52L128 156L56 228L156 244L200 338L244 244L344 228L272 154L290 50L200 100z" : "M320 197.8L209.4 214.6L160 320L110.6 214.6L0 197.8L80 115.8L61.2 0L160 54.6L258.8 0L240 115.8L320 197.8L320 197.8zM98.2 56L110 128.4L60 179.6L129 190.2L160 256L191 190.2L260 179.6L210 128.4L221.8 56L160 90.2L98.2 56z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.StarEmpty.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.StarEmpty.displayName = "Blueprint5.Icon.StarEmpty";
exports.default = exports.StarEmpty;
//# sourceMappingURL=star-empty.js.map