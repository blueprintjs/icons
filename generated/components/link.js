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
exports.Link = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Link = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "link", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M217 160.4L128.2 71.6L108.2 51.6C101 44.4 91 40 80 40C58 40 40 58 40 80C40 91 44.4 101 51.8 108.2L160.6 217C153.8 218.8 147.2 220 140 220C117.8 220 98.2 210.8 83.6 196.4L83.4 196.6L23.4 136.6L23.6 136.4C9.2 121.8 0 102.2 0 80C0 35.8 35.8 0 80 0C102.2 0 121.8 9.2 136.4 23.6L136.6 23.4L196.6 83.4L196.4 83.6C210.8 98.2 220 117.8 220 140C220 147.2 218.8 153.8 217 160.4zM400 320C400 364.2 364.2000000000001 400 320 400C297.8 400 278.2 390.8 263.6 376.4L263.4 376.6L203.4 316.6L203.6 316.4C189.2 301.8 180 282.2 180 260C180 252.8 181.2 246.2 183 239.6L271.8 328.4000000000001L291.8 348.4000000000001C299 355.6 309 360 320 360C342 360 360 342 360 320C360 309 355.6 299 348.2 291.8L239.4 183C246.2 181.2 252.8 180 260 180C282.2 180 301.8 189.2 316.4 203.6L316.6 203.4L376.6 263.4L376.3999999999999 263.6C390.8 278.2 400 297.8 400 320zM100 120C100 109 109 100 120 100C125.6 100 130.6 102.2 134.2 105.8L294.2000000000001 265.8C297.8 269.4 300 274.4 300 280C300 291 291 300 280 300C274.4000000000001 300 269.4000000000001 297.8 265.8 294.2L225.8 254.2L185.8 214.2L145.8 174.2L105.8 134.2000000000001C102.2 130.6 100 125.6 100 120z" : "M99.8 80.2C105.4 80.2 110.4 82.4 114 86L234 206C237.6 209.6 239.8 214.6 239.8 220.2C239.8 231.2 230.8 240.2 219.8 240.2C214.2 240.2 209.2 238 205.6 234.4L85.6 114.4C82 110.8 79.8 105.8 79.8 100.2C79.8 89.2 88.8 80.2 99.8 80.2zM176.8 120.6L128 71.8L108 51.8L107.8 52C100.6 44.8 90.8 40 79.8 40C57.8 40 39.8 58 39.8 80C39.8 91 44.6 100.8 51.8 108L51.6 108.2L71.6 128.2L120.4 177C113.8 179 107 180.2 99.8 180.2C77.8 180.2 58 171 43.6 156.4L43.2 156.8L23.2 136.8L23.6 136.4C9 122 -0.2 102.2 -0.2 80.2C-0.2 36 35.6 0.2 79.8 0.2C101.8 0.2 121.6 9.4 136 24L136.4 23.6L156.4 43.6L156 44C170.6 58.4 179.8 78.2 179.8 100.2C179.8 107.2 178.6 114 176.8 120.6zM319.8 240.2C319.8 284.4 284 320.2 239.8 320.2C217.8 320.2 198 311 183.6 296.4L183.2 296.8L163.2 276.8L163.6 276.4C149.2 262 139.8 242.2 139.8 220.2C139.8 213 141 206.4 142.8 199.8L191.6 248.6L211.6 268.6L211.8 268.4C219 275.6 228.8 280.4 239.8 280.4C261.8 280.4 279.8 262.4000000000001 279.8 240.4C279.8 229.4 275 219.6 267.8 212.4L268 212.2L248 192.2L199.4 143.2C206 141.4 212.8 140.2 219.8 140.2C241.8 140.2 261.6 149.4 276 164L276.4 163.6L296.4 183.6L296 184C310.6 198.4 319.8 218 319.8 240.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Link.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Link.displayName = "Blueprint5.Icon.Link";
exports.default = exports.Link;
//# sourceMappingURL=link.js.map