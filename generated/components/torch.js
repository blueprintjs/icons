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
exports.Torch = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Torch = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "torch", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M139.4 20C139.4 9 148.4 0 159.4 0H239.4C250.4 0 259.4 9 259.4 20V60H139.4V20zM79.4 320L139.4 240V80H259.4000000000001V240L319.4000000000001 320C319.4000000000001 320 118 320 84.2 320C81 320 79.4 320 79.4 320zM179.4 220C179.4 231 188.4 240 199.4 240S219.4 231 219.4 220V180C219.4 169 210.4 160 199.4 160S179.4 169 179.4 180V220zM299.4000000000001 400H99.4C88.4 400 79.4 391 79.4 380V340H319.4000000000001V380C319.4000000000001 391 310.4 400 299.4000000000001 400z" : "M100 20C100 9 109 0 120 0H200C211 0 220 9 220 20V40H100V20zM240 320H80C69 320 60 311 60 300V280H260V300C260 311 251 320 240 320zM100 180V60H220V180L260 260H60L100 180zM140 180C140 191 149 200 160 200S180 191 180 180V140C180 129 171 120 160 120S140 129 140 140V180z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Torch.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Torch.displayName = "Blueprint5.Icon.Torch";
exports.default = exports.Torch;
//# sourceMappingURL=torch.js.map