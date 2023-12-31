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
exports.Form = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Form = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "form", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M40 140V60H120V140H40zM20 180H140C151 180 160 171 160 160V40C160 29 151 20 140 20H20C9 20 0 29 0 40V160C0 171 9 180 20 180zM240 320H380L380 320C391 320 400 311 400 300L400 300C400 289 391 280 380 280H240C229 280 220 289 220 300S229 320 240 320zM160 380C171 380 180 371 180 360C180 354.4 177.8 349.4 174.2 345.8L74.2 225.8C70.6 222.2 65.6 220 60 220S49.4 222.2 45.8 225.8L5.8 265.8C2.2 269.4 0 274.4 0 280C0 291 9 300 20 300C25.6 300 30.6 297.8 34.2 294.2L60 268.2L145.8 374.2C149.4 377.8 154.4 380 160 380zM240 120H380L380 120C391 120 400 111 400 100L400 100C400 89 391 80 380 80H240C229 80 220 89 220 100S229 120 240 120z" : "M40 100V60H80V100H40zM20 140H100C111 140 120 131 120 120V40C120 29 111 20 100 20H20C9 20 0 29 0 40V120C0 131 9 140 20 140zM200 260H300L300 260C311 260 320 251 320 240L320 240C320 229 311 220 300 220H200C189 220 180 229 180 240S189 260 200 260zM120 300C131 300 140 291 140 280C140 274.4 137.8 269.4 134.2 265.8L74.2 185.8C70.6 182.2 65.6 180 60 180S49.4 182.2 45.8 185.8L5.8 225.8C2.2 229.4 0 234.4 0 240C0 251 9 260 20 260C25.6 260 30.6 257.8 34.2 254.2L60 228.2L105.8 294.2C109.4 297.8 114.4 300 120 300zM200 100H300C311 100 320 91 320 80L320 80C320 69 311 60 300 60H200C189 60 180 69 180 80S189 100 200 100z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Form.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Form.displayName = "Blueprint5.Icon.Form";
exports.default = exports.Form;
//# sourceMappingURL=form.js.map