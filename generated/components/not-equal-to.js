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
exports.NotEqualTo = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.NotEqualTo = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "not-equal-to", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M189.734666 260L200.388386 323.9223228C202.554626 334.7535178 213.091128 341.7778526 223.922322 339.6116136C234.753518 337.4453746 241.777852 326.9088724 239.6116140000001 316.0776772L230.265334 260L320 260C331.0456940000001 260 340 251.045695 340 240C340 228.954305 331.0456940000001 220 320 220L223.598668 220L216.932 180L320 180C331.0456940000001 180 340 171.045694 340 160C340 148.954306 331.0456940000001 140 320 140L210.265334 140L199.6116136 76.0776780000001C197.4453746 65.246482 186.9088724 58.222148 176.0776772 60.388386C165.2464822 62.554626 158.2221474 73.091128 160.3883864 83.922322L169.734666 140L80 140C68.954305 140 60 148.954306 60 160C60 171.045694 68.954305 180 80 180L176.4013328 180L183.0679994 220L80 220C68.954305 220 60 228.954305 60 240C60 251.045695 68.954305 260 80 260L189.734666 260z" : "M151.603922 220L160.3883864 263.9223228C162.5546254 274.7535178 173.0911276 281.7778526 183.9223228 279.6116136C194.7535178 277.4453746 201.777852 266.9088724 199.6116136 256.0776772L192.396078 220L260 220C271.045694 220 280 211.045695 280 200C280 188.954305 271.045694 180 260 180L184.396078 180L176.396078 140L260 140C271.045694 140 280 131.045695 280 120C280 108.954306 271.045694 100 260 100L168.396078 100L159.6116136 56.077678C157.4453746 45.246482 146.9088724 38.222148 136.0776772 40.388386C125.2464822 42.554626 118.2221474 53.091128 120.3883864 63.922322L127.603922 100L60 100C48.954305 100 40 108.954306 40 120C40 131.045695 48.954305 140 60 140L135.603922 140L143.603922 180L60 180C48.954305 180 40 188.954305 40 200C40 211.045695 48.954305 220 60 220L151.603922 220z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.NotEqualTo.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.NotEqualTo.displayName = "Blueprint5.Icon.NotEqualTo";
exports.default = exports.NotEqualTo;
//# sourceMappingURL=not-equal-to.js.map