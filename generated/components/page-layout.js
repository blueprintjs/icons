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
exports.PageLayout = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.PageLayout = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "page-layout", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 380H20C9 380 0 371 0 360V40C0 29 9 20 20 20H380C391 20 400 29 400 40V360C400 371 391 380 380 380zM140 60H40V240H140V60zM360 60H160V240H360V60zM360 260H40V340H360V260z" : "M300 301H20C9 301 0 292 0 281V41C0 30 9 21 20 21H300C311 21 320 30 320 41V281C320 292 311 301 300 301zM120 61H40V181H120V61zM280 61H140V181H280V61zM280 201H40V261H280V201z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.PageLayout.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.PageLayout.displayName = "Blueprint5.Icon.PageLayout";
exports.default = exports.PageLayout;
//# sourceMappingURL=page-layout.js.map