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
exports.Hand = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Hand = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "hand", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M340 300C331.6 300 324.2000000000001 294.6 321.4 287.2H321.4L287.6 200H272.2000000000001L299 333.4C299.6 335.4 300 337.6 300 340C300 351 291 360 280 360C270.2 360 262.2 353 260.4 343.8L260.2 343.8L231.4 200H220V380C220 391 211 400 200 400S180 391 180 380V200H176L139.4 344.8L139.4 344.8C137.2 353.6 129.4 360 120 360C114 360 108.4 357.2 104.8 353L104.8 353C104.6 352.8 104.4 352.6 104.2 352.4C104.2 352.4 104.2 352.4 104.2 352.4C104 352 103.8 351.8 103.6 351.6C103.6 351.6 103.6 351.6 103.6 351.6C103.4 351.2 103.4 351 103.2 350.8C103.2 350.8 103.2 350.8 103.2 350.6C103 350.4 102.8 350.2 102.8 350C102.8 350 102.8 349.8 102.8 349.8C102.4 349.6 102.4 349.4 102.2 349.2C102.2 349.2 102.2 349 102 349C102 348.8 102 348.6 101.8 348.4C101.8 348.4 101.8 348.2 101.6 348.2C101.6 348 101.4 347.8 101.4 347.6C101.4 347.6 101.4 347.4000000000001 101.2 347.4000000000001C101.2 347.2000000000001 101 347 101 346.8C101 346.6 101 346.6 100.8 346.4000000000001C100.8 346.2000000000001 100.6 346 100.6 345.8C100.6 345.6 100.6 345.6 100.4 345.4000000000001C100.4 345.2000000000001 100.2 345 100.2 344.8C100.2 344.6 100.2 344.6 100.2 344.4000000000001C100.2 344.2000000000001 100.2 344 100 343.8C100 343.6 100 343.4000000000001 100 343.4000000000001C100 343.2000000000001 100 343 100 343C100 342.8 100 342.6 100 342.4000000000001C100 342.2000000000001 100 342.2000000000001 100 342C100 341.8 100 341.6 100 341.4000000000001C100 341.2000000000001 100 341.2000000000001 100 341C100 340.6 100 340.4 100 340C100 339 100 338.2 100.2 337.2H100.2L129.2 132.2L120 146V145.8L76.8 211L76.6 211C73.2 216.4 67 220 60 220C49 220 40 211 40 200C40 196 41.2 192.2 43.4 189L120 31.2V31.2C141.2 12 169.2 0 200 0C266.2 0 320 53.8 320 120V156.8L320.2000000000001 157.4V158.6L359.0000000000001 273.6C359.6 275.6 360 277.8 360 280C360 291 351 300 340 300z" : "M300 220C300 231 291 240 280 240C271.8 240 264.8 235.2 261.8 228.2L261.8 228C261.8 228 261.8 227.8 261.6 227.8L231.4 160H224.2L239.8 256.8H239.8C240 257.8 240 259 240 260C240 271 231 280 220 280C210 280 201.8 272.8 200.2 263.2H200.2V263.2C200.2 263.2 200.2 263 200.2 263L183.6 160H180V300C180 311 171 320 160 320S140 311 140 300V160H138.2L119.6 263.6L119.6 263.6C118 272.8 109.8 280 100 280C89 280 80 271 80 260C80 259 80 257.8 80.2 256.8L80.2 256.8L105.2 100H104.4L56.6 171.2C53 176.4 47 180 40 180C29 180 20 171 20 160C20 156.6 20.8 153.4 22.4 150.6L82.4 36.8H82.6V36.6C101 14.2 128.8 0 160 0C215.2 0 260 44.8 260 100V111.8L298.6 212.8H298.6C299.6 215 300 217.4 300 220z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Hand.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Hand.displayName = "Blueprint5.Icon.Hand";
exports.default = exports.Hand;
//# sourceMappingURL=hand.js.map