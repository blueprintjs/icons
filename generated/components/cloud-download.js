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
exports.CloudDownload = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.CloudDownload = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "cloud-download", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M300 320C297.6 320 295.2 319.4 292.8 319.2C276.6 366.2 232.4 400 180 400C113.8 400 60 346.2 60 280C60 279 60.2 278.2 60.2 277.2C25.6 268.4 0 237.4 0 200C0 155.8 35.8 120 80 120H95.6C106.6 132.2 122.4 140 140 140V180C140 213.2 166.8 240 200 240S260 213.2 260 180V140C277.6 140 293.2 132.4 304 120.4C357.4000000000001 122.6 400 166.2 400 220C400 275.2 355.2000000000001 320 300 320zM260 100C254.4 100 249.4 97.8 245.8 94.2000000000001L220 68.2V180C220 191 211 200 200 200S180 191 180 180V68.2L154.2 94C150.6 97.8 145.6 100 140 100C129 100 120 91 120 80C120 74.4 122.2 69.4 125.8 65.8L185.8 5.8C189.4 2.2 194.4 0 200 0S210.6 2.2 214.2 5.8L274.2000000000001 65.8C277.8 69.4 280 74.4 280 80C280 91 271 100 260 100z" : "M220 100C214.4 100 209.4 97.8 205.8 94.2L180 68.2V160C180 171 171 180 160 180S140 171 140 160V68.2L114.2 94C110.6 97.8 105.6 100 100 100C89 100 80 91 80 80C80 74.4 82.2 69.4 85.8 65.8L145.8 5.8C149.4 2.2 154.4 0 160 0S170.6 2.2 174.2 5.8L234.2 65.8C237.8 69.4 240 74.4 240 80C240 91 231 100 220 100zM240 240C239.4 240 238.6 240 238 239.8C228.8 285.6 188.4 320 140 320C84.8 320 40 275.2 40 220C40 217.8 40.2 215.6 40.4 213.4C16.6 202.2 0 178 0 150C0 121.8 16.8 97.8 40.6 86.6C44 116.6 69.2 140 100 140C101.2 140 102.6 139.6 103.8 139.6C101.4 146 100 152.8 100 160C100 193.2 126.8 220 160 220S220 193.2 220 160C220 152.8 218.6 146 216.2 139.6C217.4 139.6 218.8 140 220 140C249.6 140 274 118.6 279 90.6C303.4 104.2 320 130 320 160C320 204.2 284.2000000000001 240 240 240z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.CloudDownload.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.CloudDownload.displayName = "Blueprint5.Icon.CloudDownload";
exports.default = exports.CloudDownload;
//# sourceMappingURL=cloud-download.js.map