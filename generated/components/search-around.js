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
exports.SearchAround = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.SearchAround = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "search-around", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M138 202A60 60 0 0 1 258 202A60 60 0 0 1 138 202M60 120C26 120 0 94 0 60S26 0 60 0S120 26 120 60S94 120 60 120zM60 20C38 20 20 38 20 60C20 82 38 100 60 100S100 82 100 60C100 38 82 20 60 20zM60 400C26 400 0 374 0 340S26 280 60 280S120 306 120 340S94 400 60 400zM60 300C38 300 20 318 20 340C20 362 38 380 60 380S100 362 100 340C100 318 82 300 60 300zM340 120C306 120 280 94 280 60S306 0 340 0S400 26 400 60S374 120 340 120zM340 20C318 20 300 38 300 60C300 82 318 100 340 100S380 82 380 60C380 38 362 20 340 20zM340 400C306 400 280 374 280 340S306 280 340 280S400 306 400 340S374 400 340 400zM340 300C318 300 300 318 300 340C300 362 318 380 340 380S380 362 380 340C380 318 362 300 340 300zM200 200L220 180L120 280L100 300zM107.574 306.57L207.9822 206.1618L193.8402 192.0198L93.432 292.428L107.574 306.57zM200 200L220 180L320 280L300 300zM292.426 306.5700000000001L306.568 292.428L206.1598 192.0198000000001L192.0178 206.1618000000001L292.426 306.5700000000001zM200 200L220 180L320 80L300 100zM207.574 206.572L307.9822000000001 106.1638L293.8402 92.0218L193.432 192.43L207.5740000000001 206.572zM200 200L220 180L120 80L100 100zM192.4260000000001 206.57L206.5680000000001 192.428L106.1598000000001 92.0198L92.0178000000001 106.1618L192.4260000000001 206.57z" : "M270 100C259.8 100 250.4 97 242.4000000000001 91.6L194.4 139.8C197.8 145.8 200 152.6 200 160S197.8 174.2 194.4 180.2L242.6 228.4C250.4 223 259.8 220 270 220C297.6 220 320 242.4 320 270C320 297.6 297.6 320 270 320S220 297.6 220 270C220 259.8 223 250.4 228.4 242.4L180.2 194.4C174.2 197.8 167.4 200 160 200S145.8 197.8 139.8 194.4L91.6 242.4C97 250.4 100 259.8 100 270C100 297.6 77.6 320 50 320S0 297.6 0 270C0 242.4 22.4 220 50 220C60.2 220 69.6 223 77.6 228.4L125.8 180.2C122.2 174.2 120 167.4 120 160S122.2 145.8 125.6 139.8L77.4 91.6C69.6 97 60.2 100 50 100C22.4 100 0 77.6 0 50C0 22.4 22.4 0 50 0S100 22.4 100 50C100 60.2 97 69.6 91.6 77.6L139.8 125.8C145.8 122.2 152.6 120 160 120S174.2 122.2 180.2 125.6L228.4 77.4C223 69.6 220 60.2 220 50C220 22.4 242.4000000000001 0 270 0S320 22.4 320 50C320 77.6 297.6 100 270 100zM270 300C286.6 300 300 286.6 300 270S286.6 240 270 240S240 253.4 240 270S253.4 300 270 300zM50 240C33.4 240 20 253.4 20 270S33.4 300 50 300S80 286.6 80 270S66.6 240 50 240zM50 20C33.4 20 20 33.4 20 50S33.4 80 50 80S80 66.6 80 50S66.6 20 50 20zM270 20C253.4 20 240 33.4 240 50S253.4 80 270 80S300 66.6 300 50S286.6 20 270 20z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.SearchAround.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.SearchAround.displayName = "Blueprint5.Icon.SearchAround";
exports.default = exports.SearchAround;
//# sourceMappingURL=search-around.js.map