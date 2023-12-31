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
exports.Compass = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Compass = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "compass", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M300 200C300 197.2 299.4000000000001 194.4 298.2 192L298.2 192L218.4 12.4C218.4 12.4 218.4 12.4 218.4 12.4L218.2 11.9999999999999L218.2 11.9999999999999C215.2 5 208.2 0 200 0S184.8 5 181.8 12L181.8 12L181.6 12.4C181.6 12.4 181.6 12.4 181.6 12.4L101.8 192L101.8 192C100.6 194.4 100 197.2 100 200S100.6 205.6 101.8 208L101.8 208L181.6 387.6C181.6 387.6 181.6 387.6 181.6 387.6L181.8 388L181.8 388C184.8 395 191.8 400 200 400S215.2 395 218.2 388L218.2 388L218.4 387.6C218.4 387.6 218.4 387.6 218.4 387.6L298.2 208L298.2 208C299.4000000000001 205.6 300 202.8 300 200zM200 330.8L141.8 200H258L200 330.8z" : "M240 160C240 157.2 239.4 154.6 238.4 152.2L238.4 152.2L178.4 12.4C178.4 12.4 178.4 12.4 178.4 12.4L178.4 12.4L178.4 12.4C175.4 5 168.2 0 160 0S144.6 5 141.6 12.2L141.6 12.2L141.6 12.2C141.6 12.2 141.6 12.2 141.6 12.2L81.6 152L81.6 152C80.6 154.6 80 157.2 80 160S80.6 165.4 81.6 167.8L81.6 167.8L141.6 307.6C141.6 307.6 141.6 307.6 141.6 307.6L141.6 307.6L141.6 307.6C144.6 315 151.8 320 160 320S175.4 315 178.4 307.8L178.4 307.8L178.4 307.8C178.4 307.8 178.4 307.8 178.4 307.8L238.4 168L238.4 168C239.4 165.4 240 162.8 240 160zM160 249.2L121.8 160H198.2L160 249.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Compass.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Compass.displayName = "Blueprint5.Icon.Compass";
exports.default = exports.Compass;
//# sourceMappingURL=compass.js.map