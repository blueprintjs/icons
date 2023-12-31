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
exports.Prescription = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Prescription = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "prescription", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M279 195.4C282.2 199 283.4 199.8 288.2 199.8H317.8C322.8 199.8 327.2 198.2 329.6 193.2C331.6 189.2 331.4 185 328.6 180L274.4 108.4L337.6 20C340.2 15.8 340.8 10.8 338.2 6.2C335.8 2 331.4 0 326.8 0H294C287.8 0 282.8 3.4 280 8.8L242 62.2L203.4 8.6C200.4 3.2 195 0 188.8 0H159.6C154.6 0 150.2 1.6 147.8 6.6C145.8 10.6 146 14.8 148.8 19.8L210.6 106.8L125.2 220H100V133.6C100 125.4 94 119.8 86 119.8H54C45.8 119.8 40 125.4 40 133.6V386.2C40 394.4 46 400 54 400H142.4C156.6 400 169.6 398 181.2 394C193 390 203.4 384.2 212 376.6C220.8 369 227.6 359.8 232.4000000000001 348.8C237.2 338 239.6 326 239.6 313.2C239.6 293 234.0000000000001 275.6 222.8 261.2000000000001C214.2 250.4 195.8 235.4 182.8 229.4L244.6 150.6L279 195.4zM134.2 279.2C148.4 279.2 163.2 282.4 170.4 288.4C177 294 180.4 302.2 180.4 313.4S177 332.8 170.4 338.4C163.4 344.4 148.4 347.6 134.2 347.6H100.2V279.2H134.2z" : "M218.2 153.2C221 157.4 225.4 160 230.8 160H256.6C261.0000000000001 160 264.8000000000001 158.6 267 154.8C268.8 151.6 268.6 148.2 266.2000000000001 144.2L216.4 86.8L271.8 16C274.2000000000001 12.6 274.6 8.6 272.2000000000001 5C270.0000000000001 1.6 266.2 0 262.2000000000001 0H233.4000000000001C228.0000000000001 0 223.6 2.8 221.2000000000001 7L188.0000000000001 49.8L154.2000000000001 6.8C151.6 2.6 147 0 141.6 0H116C111.6 0 107.8 1.4 105.6 5.2C103.8 8.4 104 11.8 106.4 15.8L160.6 85.4L86 180.2H60.6V110.8C60.6 104.2 55.4 99.6 48.2 99.6H32.2C25.2 99.8 20 104.2 20 110.8V308.8C20 315.4 25.2 320 32.4 320H94.6C107 320 118.4 318.4 128.6 315.2C138.8 312 147.8 307.4 155.4 301.4C163 295.4 169 287.8 173.2 279.2C177.4 270.6 179.6 261 179.6 250.8C179.6 234.6 174.6 220.8 164.8 209.2C157.4 200.4 148 193.8 136.4 189L157.6 162C158.4 161.2 159 160.4 159.2 160L189 122L218.2 153.2zM103.6 220C116 220 125.2 222.6 131.4 227.4C137.2 232 140.2 241.6 140.2 250.6S137.2 268 131.4 272.6C125.2 277.6 116 280 103.6 280H59.8V220H103.6z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Prescription.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Prescription.displayName = "Blueprint5.Icon.Prescription";
exports.default = exports.Prescription;
//# sourceMappingURL=prescription.js.map