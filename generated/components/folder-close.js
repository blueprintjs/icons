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
exports.FolderClose = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.FolderClose = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "folder-close", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M0 60C0 49 9 40 20 40H380C391 40 400 49 400 60V260H0V60zM380 320H188.2L154.2 354.2V354.2C150.6 357.8 145.6 360 140 360H20C9 360 0 351 0 340V280H400V300C400 311 391 320 380 320z" : "M-0.2 40C-0.2 29 8.8 20 19.8 20H299.8C310.8 20 319.8 29 319.8 40V180H-0.2C-0.2 180 -0.2 40 -0.2 40zM299.8 240H148.2L114 274C110.4 277.8 105.4 280 99.8 280H19.8C8.8 280 -0.2 271 -0.2 260V200H319.8V220C319.8 231 310.8 240 299.8 240z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.FolderClose.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.FolderClose.displayName = "Blueprint5.Icon.FolderClose";
exports.default = exports.FolderClose;
//# sourceMappingURL=folder-close.js.map