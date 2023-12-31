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
exports.Asterisk = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Asterisk = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "asterisk", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M370.4 116.6L370.6 117L237.8 200L370.6 283L370.4 283.4C376 286.8 380 292.8 380 300C380 311 371 320 360 320C356 320 352.6 318.6 349.6 316.6L349.4 317L220 236V380C220 391 211 400 200 400S180 391 180 380V236L50.6 317L50.4 316.6C47.4 318.6 44 320 40 320C29 320 20 311 20 300C20 292.8 24 286.8 29.6 283.4L29.4 283L162.2 200L29.4 117L29.6 116.6C24 113.2 20 107.2 20 100C20 89 29 80 40 80C44 80 47.4 81.4 50.4 83.4L50.6 83L180 164V20C180 9 189 0 200 0S220 9 220 20V164L349.4 83.2L349.6 83.6C352.6 81.4 356 80 360 80C371 80 380 89 380 100C380 107.2 376 113.2 370.4 116.6z" : "M290.8 96.4L291 96.8L196 160L291 223.4L290.8 223.8C296.2 227.2 300 233 300 240C300 251 291 260 280 260C275.8 260 272.2 258.4 269.2000000000001 256.4L269 256.8L180 197.4V300C180 311 171 320 160 320S140 311 140 300V197.4L51 256.6L50.8 256.4C47.8 258.4 44.2 260 40 260C29 260 20 251 20 240C20 233 23.8 227.2 29.2 223.6L29 223.4L124 160L29 96.6L29.2 96.2C23.8 92.8 20 87 20 80C20 69 29 60 40 60C44.2 60 47.8 61.6 50.8 63.6L51 63.2L140 122.6V20C140 9 149 0 160 0S180 9 180 20V122.6L269 63.4L269.2 63.8C272.2 61.6 275.8 60 280 60C291 60 300 69 300 80C300 87 296.2 92.8 290.8 96.4z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Asterisk.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Asterisk.displayName = "Blueprint5.Icon.Asterisk";
exports.default = exports.Asterisk;
//# sourceMappingURL=asterisk.js.map