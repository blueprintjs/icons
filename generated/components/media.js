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
exports.Media = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Media = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "media", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M300 220C322 220 340 238 340 260C340 282 322 300 300 300S260 282 260 260C260 238 278 220 300 220zM380 360H20C9 360 0 351 0 340V60C0 49 9 40 20 40H380C391 40 400 49 400 60V340C400 351 391 360 380 360zM360 100L240 200L200 160L120 260L40 100V320H360V100z" : "M239.8 180.2C250.8 180.2 259.8 189.2 259.8 200.2S250.8 220.2 239.8 220.2S219.8 211.2 219.8 200.2S228.8 180.2 239.8 180.2zM299.8 280.2H19.8C8.8 280.2 -0.2 271.2 -0.2 260.2V60.2C-0.2 49.2 8.8 40.2 19.8 40.2H299.8C310.8 40.2 319.8 49.2 319.8 60.2V260.2C319.8 271.2 310.8 280.2 299.8 280.2zM279.8 100.2L179.8 160.2L159.8 120.2L99.8 200.2L39.8 100.2V240.2H279.8V100.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Media.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Media.displayName = "Blueprint5.Icon.Media";
exports.default = exports.Media;
//# sourceMappingURL=media.js.map