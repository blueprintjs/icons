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
exports.Build = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Build = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "build", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M388.6 66.6L186.2 243.8L215.6 275C223.8 283.8 212.6 291 218.6 307C240.2000000000001 362.2 302.4000000000001 366.8 302.4000000000001 366.8S311.4 376.2 319.8 385.2C239.6 420 185.2 386 160.8 364L76.6 275L59.4 256.6C49.8 246.4 49.8 230 59.4 219.8L42 201.4C32.4 211.6 16.8 211.6 7.2 201.4S-2.4 174.8 7.2 164.6L42 127.8C51.6 117.6 67.2 117.6 76.8 127.8C86.4 138 86.4 154.4 76.8 164.6L94.2 183C103.8 172.8 119.4 172.8 129 183L157.2 212.8L333.4000000000001 11.4C348.6000000000001 -3.8 373.4000000000001 -3.8 388.6 11.4C403.8 26.6 403.8 51.4 388.6 66.6z" : "M307.8 71.8L154 200L175.4 222C182.2 228.8 173 234.6 177.8 247.2C195.4 290.6 246 294.2 246 294.2S253.2 301.6 260.2 308.6C194.8 336.2 150.6 309.4 130.8 292L62.4 222L48.2 207.6C40.4 199.6 40.4 186.6 48.2 178.6L34.2 164.2C26.4 172.2 13.8 172.2 6 164.2S-1.8 143.2 6 135.2L34.2 106.2C42 98.2 54.6 98.2 62.4 106.2S70.2 127.2 62.4 135.2L76.6 149.6C84.4 141.6 97 141.6 104.8 149.6L120.8 166L248.6 12.6C265 -3.8 291.4 -3.8 307.8 12.6C324 29 324 55.6 307.8 71.8z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Build.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Build.displayName = "Blueprint5.Icon.Build";
exports.default = exports.Build;
//# sourceMappingURL=build.js.map