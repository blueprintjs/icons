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
exports.Lightning = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Lightning = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "lightning", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M180 180H120C108.9544 180 100 188.954 100 200L118.199 381.99006C119.2214 392.2141 127.8248 400 138.0998 400H263.23C272.492 400 280 392.49166 280 383.22966C280 381.09616 279.592 378.9822 278.8 377.0014L224 240H283.56C292.64 240 300 232.64 300 223.5608C300 221.2142 299.498 218.8946 298.526 216.7584L203.242 7.132C201.268 2.788 196.937 0 192.166 0C185.447 0 180 5.446 180 12.166V180z" : "M140 140H100C88.9544 140 80 148.9542 80 160L97.81 302.4807C99.0612 312.48928 107.5692 320 117.6556 320H203.07C212.42 320 220 312.42018 220 303.07C220 301.03988 219.634 299.0264 218.922 297.1254L182.5 200H223.502C232.614 200 240 192.6132 240 183.5012C240 181.1928 239.516 178.91 238.578 176.8004L163.1996 7.198C161.2538 2.822 156.9126 0 152.1222 0C145.4272 0 140 5.428 140 12.122V140z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Lightning.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Lightning.displayName = "Blueprint5.Icon.Lightning";
exports.default = exports.Lightning;
//# sourceMappingURL=lightning.js.map