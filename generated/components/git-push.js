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
exports.GitPush = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.GitPush = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "git-push", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M300 180C300 185.6 297.8 190.6 294.2000000000001 194.2L234.2 254.2C230.6 257.8 225.6 260 220 260S209.4 257.8 205.8 254.2L145.8 194.2C142.2 190.6 140 185.6 140 180C140 169 149 160 160 160C165.6 160 170.6 162.2 174.2 165.8L200 191.8V20C200 9 209 0 220 0S240 9 240 20V191.8L265.8 166C269.4000000000001 162.2 274.4000000000001 160 280 160C291 160 300 169 300 180zM380 400H20C9 400 0 391 0 380V60C0 49 9 40 20 40H160V80H40V120H160V140H80V360H360V140H280V120H360V80H280V40H380C391 40 400 49 400 60V380C400 391 391 400 380 400zM100 240H140V280H100V240zM140 340H100V300H140V340z" : "M80 200H100V220H80V200zM260 140C260 145.6 257.8 150.6 254.2 154.2L194.2 214.2C190.6 217.8 185.6 220 180 220S169.4 217.8 165.8 214.2L105.8 154.2C102.2 150.6 100 145.6 100 140C100 129 109 120 120 120C125.6 120 130.6 122.2 134.2 125.8L160 151.8V20C160 9 169 0 180 0S200 9 200 20V151.8L225.8 126C229.4 122.2 234.4 120 240 120C251 120 260 129 260 140zM100 260H80V240H100V260zM300 320H20C9 320 0 311 0 300V40C0 29 9 20 20 20H120V60H40V80H120V100H60V280H280V100H240V80H280V60H240V20H300C311 20 320 29 320 40V300C320 311 311 320 300 320z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.GitPush.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.GitPush.displayName = "Blueprint5.Icon.GitPush";
exports.default = exports.GitPush;
//# sourceMappingURL=git-push.js.map