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
exports.LayerOutline = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.LayerOutline = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "layer-outline", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M190.2871414 317.4831456L10.28714138 217.4831456C-3.42904712 209.8630408 -3.42904712 190.13696 10.28714138 182.516854L190.2871414 82.516854C196.3275922 79.161048 203.672408 79.161048 209.712858 82.516854L389.712858 182.516854C403.429048 190.13696 403.429048 209.8630408 389.712858 217.4831456L209.712858 317.4831456C203.672408 320.8389514 196.3275922 320.8389514 190.2871414 317.4831456zM200 277.12L338.8 200.02L200 122.9L61.18 200.02L200 277.12z" : "M150.0772212 257.3648628000001L10.07722124 177.3648628C-3.35907374 169.68698 -3.35907374 150.31302 10.07722124 142.6351372L150.0772212 62.635138C156.2258746 59.12162 163.7741254 59.12162 169.9227788 62.635138L309.922778 142.6351372C323.359074 150.31302 323.359074 169.68698 309.922778 177.3648628L169.9227788 257.3648628000001C163.7741254 260.878379 156.2258746 260.878379 150.0772212 257.3648628000001zM160 216.96L259.6600000000001 160L160 103.06L60.32 160L160 216.96z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.LayerOutline.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.LayerOutline.displayName = "Blueprint5.Icon.LayerOutline";
exports.default = exports.LayerOutline;
//# sourceMappingURL=layer-outline.js.map