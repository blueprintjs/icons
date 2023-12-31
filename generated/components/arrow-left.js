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
exports.ArrowLeft = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.ArrowLeft = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "arrow-left", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M360 220H88.2L174 305.8C177.8 309.4 180 314.4 180 320C180 331 171 340 160 340C154.4 340 149.4 337.8 145.8 334.2L25.8 214.2C22.2 210.6 20 205.6 20 200C20 194.4 22.2 189.4 25.8 185.8L145.8 65.8C149.4 62.2 154.4 60 160 60C171 60 180 69 180 80C180 85.6 177.8 90.6 174.2 94.2000000000001L88.2 180H360C371 180 380 189 380 200C380 211 371 220 360 220z" : "M279.8 180.2H88.2L154 246C157.6 249.6 159.8 254.6 159.8 260.2C159.8 271.2 150.8 280.2 139.8 280.2C134.2 280.2 129.2 278 125.6 274.4L25.6 174.4C22 170.6 19.8 165.6 19.8 160.2S22 149.6 25.6 146L125.6 46C129.2 42.4 134.2 40.2 139.8 40.2C150.8 40.2 159.8 49.2 159.8 60.2000000000001C159.8 65.8 157.6 70.8 154 74.4L88.2 140.2H280C291 140.2 300 149.2 300 160.2S290.8 180.2 279.8 180.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.ArrowLeft.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.ArrowLeft.displayName = "Blueprint5.Icon.ArrowLeft";
exports.default = exports.ArrowLeft;
//# sourceMappingURL=arrow-left.js.map