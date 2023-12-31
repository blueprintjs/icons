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
exports.Contrast = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Contrast = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "contrast", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 240H354.8C351 254.6 345.2 268.4 337.8 281.2000000000001L356.6 300C364.4 307.8 364.4 320.4 356.6 328.2L328.4 356.4C320.6 364.2 308 364.2 300.2 356.4L281.4 337.6C268.4 345.2 254.6 351 240 354.8V380C240 391 231 400 220 400H180C169 400 160 391 160 380V354.8C144.8 350.8 130.6 344.8 117.4 337L100 354.4C92.6 361.8 80.4 361.8 72.8 354.4L45.6 327.2C38.2 319.6 38.2 307.6 45.6 300L63 282.6C55.2 269.4 49.2 255.2 45.2 240H20C9 240 0 231 0 220V180C0 169 9 160 20 160H45.2C49 145.4 54.8 131.6 62.2 118.8L43.4 100C35.6 92.2 35.6 79.6 43.4 71.8L71.6 43.6C79.4 35.8 92 35.8 99.8 43.6L118.6 62.4C131.4 54.8000000000001 145.2 49.2 159.8 45.4V20C159.8 9 168.8 0 179.8 0H219.8C230.8 0 239.8 9 239.8 20V45.2C255 49.2 269.2000000000001 55.2 282.4000000000001 63.0000000000001L300 45.6C307.4 38.2 319.6 38.2 327.2 45.6L354.4 72.8C361.8 80.4 361.8 92.4 354.4 100L337 117.4C345 130.4 351 144.8 354.8 160H380C391 160 400 169 400 180V220C400 231 391 240 380 240zM200 100C144.8 100 100 144.8 100 200S144.8 300 200 300V100z" : "M304 192H275.2C272.6 201.4 268.8 210.4 264 218.8L285.2 240C291.4 246.2 291.4 256.4 285.2 262.6L262.6 285.2C256.4 291.4 246.2 291.4 240 285.2L218.8 264C210.4 268.8 201.6 272.4 192 275.2V304C192 312.8 184.8 320 176 320H144C135.2 320 128 312.8 128 304V275.2C118 272.4 108.8 268.4 100 263.4L80 283.4C74 289.4 64.2 289.4 58.2 283.4L36.6 261.8C30.6 255.8 30.6 246 36.6 240L56.6 220C51.6 211.2 47.6 202 44.8 192H16C7.2 192 0 184.8 0 176V144C0 135.2 7.2 128 16 128H44.8C47.4 118.6 51.2 109.6 56 101.2L34.8 80C28.6 73.8 28.6 63.6 34.8 57.4L57.4 34.8000000000001C63.6 28.6 73.8 28.6 80 34.8000000000001L101.2 56.0000000000001C109.6 51.2 118.4 47.6 128 44.8000000000001V16.0000000000001C128 7.2 135.2 1e-13 144 1e-13H176C184.8 1e-13 192 7.2 192 16.0000000000001V44.8000000000001C202 47.6 211.2000000000001 51.4 220 56.6L240.0000000000001 36.6C246.0000000000001 30.6 255.8000000000001 30.6 261.8 36.6L283.6 58.4C289.6 64.4 289.6 74.2 283.6 80.2000000000001L263.6 100.2000000000001C268.6 108.8 272.6 118.2000000000001 275.4000000000001 128.2000000000001H304.2000000000001C313 128.2000000000001 320.2000000000001 135.4 320.2000000000001 144.2000000000001V176C320 184.8 312.8 192 304 192zM160 80C115.8 80 80 115.8 80 160C80 204.2 115.8 240 160 240V80z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Contrast.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Contrast.displayName = "Blueprint5.Icon.Contrast";
exports.default = exports.Contrast;
//# sourceMappingURL=contrast.js.map