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
exports.InfoSign = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.InfoSign = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "info-sign", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M200 400C89.6 400 0 310.4 0 200C0 89.6 89.6 0 200 0S400 89.6 400 200C400 310.4 310.4 400 200 400zM180 320H220V280H180V320zM260 80H140V100H180V240H160V260H220V100H260V80z" : "M160 320C71.6 320 0 248.4 0 160S71.6 0 160 0S320 71.6 320 160S248.4 320 160 320zM140 260H180V220H140V260zM200 60H120V80H140V180H120V200H180V80H200V60z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.InfoSign.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.InfoSign.displayName = "Blueprint5.Icon.InfoSign";
exports.default = exports.InfoSign;
//# sourceMappingURL=info-sign.js.map