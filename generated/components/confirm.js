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
exports.Confirm = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Confirm = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "confirm", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M194.2 294.2C190.6 297.8 185.6 300 180 300C169 300 160 291 160 280C160 274.4 162.2 269.4 165.8 265.8L225.8 205.8C229.4 202.2 234.4 200 240 200S250.6 202.2 254.2 205.8L394.2000000000001 345.8C397.8 349.4 400 354.4 400 360C400 371 391 380 380 380C374.4 380 369.4 377.8 365.8 374.2L240 248.2L194.2 294.2zM352.8 247.8C357.4000000000001 232.8 360 216.6 360 200C360 111.6 288.4 40 200 40S40 111.6 40 200S111.6 360 200 360C227.6 360 253.4 353 276 340.8L305.2000000000001 370C274.6 388.8 238.6 400 200 400C89.6 400 0 310.4 0 200C0 89.6 89.6 0 200 0S400 89.6 400 200C400 228 394.2000000000001 254.6 383.8 279L352.8 247.8z" : "M174 234.2C170.4 238 165.4 240.2 159.8 240.2C148.8 240.2 139.8 231.2 139.8 220.2C139.8 214.6 142 209.6 145.6 206L185.6 166C189.2 162.4 194.2 160.2 199.8000000000001 160.2S210.4 162.4 214.0000000000001 166L314.0000000000001 266C317.6 269.6 319.8000000000001 274.6 319.8000000000001 280.2C319.8000000000001 291.2 310.8000000000001 300.2 299.8000000000001 300.2C294.2000000000001 300.2 289.2000000000001 298 285.6 294.4L199.8 208.4L174 234.2zM278.4 174C279 169.4 279.8 165 279.8 160.2C279.8 94 226 40.2 159.8 40.2S39.8 94 39.8 160.2S93.6 280.2 159.8 280.2C176 280.2 191.6 276.8 205.8 271L235.8 301C213.2 313.2 187.4 320.2 159.8 320.2C71.4 320.2 -0.2 248.6 -0.2 160.2S71.4 0.2 159.8 0.2S319.8 71.8 319.8 160.2C319.8 176.8 317.2 193 312.6 208L278.4 174z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Confirm.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Confirm.displayName = "Blueprint5.Icon.Confirm";
exports.default = exports.Confirm;
//# sourceMappingURL=confirm.js.map