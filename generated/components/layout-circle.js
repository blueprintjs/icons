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
exports.LayoutCircle = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.LayoutCircle = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "layout-circle", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M366 240C362 258 354 274 344 290C348 296 350 304 350 310C350 332 332 350 310 350C302 350 296 348 290 344C274 354 258 360 240 366C238 386 220 400 200 400C180 400 164 384 160 366C142 360 126 354 110 344C104 348 96 350 90 350C68 350 50 332 50 310C50 302 52 296 56 290C46 274 40 258 34 240C16 236 0 220 0 200C0 180 16 164 34 160C38 142 46 126 56 110C52 104 50 96 50 90C50 68 68 50 90 50C98 50 104 52 110 56C126 46 142 40 160 34C162 14 180 0 200 0C220 0 236 16 240 34C258 38 274 46 290 56C296 52 304 50 310 50C332 50 350 68 350 90C350 98 348 104 344 110C354 126 360 142 366 160C386 162 400 180 400 200C400 220 384 236 366 240zM330 124C324 128 318 130 310 130C288 130 270 112 270 90C270 82 272 76 276 70C264 64 252.0000000000001 58 238 54C232 68 218 80 200 80C184 80 168 70 162 54C148 58 136 61.9999999999999 124 70C128 76 130 82 130 90C130 112 112 130 90 130C82 130 76 128 70 124C64 136 58 148 54 162C70 168 80 184 80 200S70 232 56 236C60 250.0000000000001 64 262 72 274C78 270 84 268 92 268C114 268 132 286 132 308C132 316 130 322 126 328C138 334 150 340 164 344C168 330 184 320 200 320C216 320 232 330 238 346C252 342 264 338 276 330C272 324 270 318 270 310C270 288 288 270 310 270C318 270 324 272 330 276C336 264 342 252 346 238C330 232 320 216 320 200S330 168 344 164C342 150 336 136 330 124z" : "M283.2 199.6C280.8 206.8 278 213.6 274.6 220.2C278 226 280 232.8 280 240C280 262 262 280 240 280C232.8 280 226 278 220.2 274.6C213.6 278 206.8 280.8 199.6 283.2C198 303.8 181 320 160 320C139 320 122 303.8 120.4 283.2C113.2 280.8 106.4 278 99.8 274.6C94 278 87.2 280 80 280C58 280 40 262 40 240C40 232.8 42 226 45.4 220.2C42 213.6 39.2 206.8 36.8 199.6C16.2 198 0 181 0 160C0 139 16.2 122 36.8 120.4C39.2 113.2 42 106.4 45.4 99.8C42 94 40 87.2 40 80C40 58 58 40 80 40C87.2 40 94 42 99.8 45.4C106.4 42 113.2 39 120.4 36.8C122 16.2 139 0 160 0C181 0 198 16.2 199.6 36.8C206.8 39.2 213.6 42 220.2 45.4C226 42 232.8 40 240 40C262 40 280 58 280 80C280 87.2 278 94 274.6 99.8C278 106.4 280.8 113.2 283.2 120.4C303.8 122 320 139 320 160C320 181 303.8 198 283.2 199.6zM263.4 123.8C262.4 120.6 261.2 117.6 260 114.6C254 118 247.2 120 240 120C218 120 200 102 200 80C200 72.8 202 66 205.4 60C202.4 58.6 199.4 57.6 196.2 56.6C190 70.4 176.2 80 160 80S130 70.4 123.8 56.6C120.6 57.8 117.4 58.8 114.6 60C118 66 120 72.8 120 80C120 102 102 120 80 120C72.8 120 66 118 60 114.6C58.6 117.6 57.6 120.6 56.6 123.8C70.4 130 80 143.8 80 160S70.4 190 56.6 196.2C57.8 199.4 58.8 202.6 60 205.4C66 202 72.8 200 80 200C102 200 120 218 120 240C120 247.2 118 254 114.6 260C117.6 261.4 120.6 262.4 123.8 263.4C130 249.6 143.8 240 160 240S190 249.6 196.2 263.4C199.4 262.2 202.6 261.2 205.4 260C202 254 200 247.2 200 240C200 218 218 200 240 200C247.2 200 254 202 260 205.4C261.4 202.4 262.4 199.4 263.4 196.2C249.6 190 240 176.2 240 160S249.6 130 263.4 123.8z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.LayoutCircle.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.LayoutCircle.displayName = "Blueprint5.Icon.LayoutCircle";
exports.default = exports.LayoutCircle;
//# sourceMappingURL=layout-circle.js.map