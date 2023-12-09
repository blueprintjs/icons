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
exports.NumberedList = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.NumberedList = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "numbered-list", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M34.8 219.8H60.2V380H41.2C40.4 375.2 38.8 371 36 367.6C33.4 364.2 30.2 361.6 26.6 359.4C22.8 357.2 18.6 355.8 14 354.8C9.4 354 4.8 353.4 -0.2 353.4V332.8H34.8V219.8zM43.4 61.2C47 64 50.8 66.8 55 69.8C59.2 72.6 63.4 75.6 67.6 78.8C71.8 81.9999999999999 75.8 85.4 79.8 88.8C83.8 92.4 87.2 96.4 90.2 100.6C93.2 104.8 95.8 109.5999999999999 97.6 114.5999999999999C99.4 119.5999999999999 100.4 125.3999999999999 100.4 131.5999999999999C100.4 136.5999999999999 99.6 142 98 147.5999999999999C96.4 153.1999999999999 93.8 158.4 90.2 163.1999999999999C86.4 168 81.6 171.9999999999999 75.6 175C69.6 178.4 62 180 53.2 180C45 180 37.8 178.4 31.6 175.4C25.2 172.2 20 168 15.6 162.6C11.2 157.2 8 150.8 5.8 143.4C3.6 136.0000000000001 2.6 128.0000000000001 2.6 119.2000000000001H26.4C26.6 124.8 27 129.8 28 134.6C29 139.4 30.4 143.6 32.2 147C34 150.6 36.6 153.2 39.8 155.4C43 157.4 46.8 158.4 51.6 158.4C56.8 158.4 61 157.4 64.2 155.6C67.4 153.8 70 151.4 71.8 148.6C73.6 145.8 74.8 142.8 75.4 139.6C76 136.4 76.4 133.4 76.4 130.6C76.2 124.4 74.8 119 72 114.4C69.2 109.6 65.6 105.4 61.4 101.2C57 97.2000000000001 52.4 93.4 47.2 89.8C42 86.2 37 82.6 32.4 79C22.4 71.8 14.6 63.4 9 53.6C3 44.2 0 32.8 -0.2 19.8H100V42.6H28.6C29.6 46 31.4 49.1999999999999 34 52.4C36.6 55.4 39.8 58.4 43.4 61.2zM360 319.6H160C149 319.6 140 310.6 140 299.6V279.6C140 268.6 149 259.6 160 259.6H360C371 259.6 380 268.6 380 279.6V299.6C380 310.8 371 319.6 360 319.6zM360 139.6H160C149 139.6 140 130.6 140 119.6V99.6C140 88.6 149 79.6 160 79.6H360C371 79.6 380 88.6 380 99.6V119.6C380 130.8 371 139.6 360 139.6z" : "M55.2 180H80.4V320H61.6C60.8 315.8 59.2 312.2 56.6 309.2C54 306.2 50.8 303.8 47 302C43.4 300.2 39.2 298.8 34.6 298C30 297.2 25.4 296.8 20.4 296.8V278.8H55.2V180zM43.4 36.6C47 39 50.8 41.6 55 44C59.2 46.4 63.4 49 67.6 51.8C71.8 54.6 75.8 57.4 79.8 60.6C83.8 63.8 87.2 67.2 90.2 70.8C93.2 74.6 95.8 78.6 97.6 83C99.4 87.4 100.4 92.4 100.4 97.8C100.4 102.2 99.6 106.8 98 111.8C96.4 117 93.8 121.6 90 125.6C86.4 129.8 81.4 133.4 75.6 136C69.6 138.8 62 140.2 53.2 140.2C45 140.2 37.8 138.8 31.6 136.2C25.2 133.4 20 129.8 15.6 125C11.2 120.4 8 114.8 5.8 108.2C3.6 101.8 2.6 94.8 2.6 87.2H26.4C26.6 92 27 96.6 28 100.6C29 104.8 30.2 108.4 32.2 111.4C34 114.4 36.6 116.8 39.8 118.6C43 120.4 46.8 121.2 51.6 121.2C56.8 121.2 61 120.4 64.2 118.8C67.4 117.2 70 115.2000000000001 71.8 112.8C73.6 110.4 74.8 107.8 75.4 105C76 102.2 76.4 99.6 76.4 97C76.2 91.6 74.8 87 72 82.8C69.2 78.6 65.6 74.8 61.4 71.4C57 67.8 52.4 64.6 47.2 61.6C42 58.6 37 55.4 32.4 52.2C22.4 46 14.6 38.6 9 30C3 21.8 0.2 11.8 0 0.4H100V20.4H28.6C29.6 23.4 31.4 26.2 34 29C36.8 31.6 39.8 34.2 43.4 36.6zM300.2 280.2H160.2C149.2 280.2 140.2 271.2 140.2 260.2V240.2C140.2 229.2 149.2 220.2 160.2 220.2H300.2C311.2 220.2 320.2 229.2 320.2 240.2V260.2C320.2000000000001 271.2 311.4 280.2 300.2 280.2zM300.2 100.2H160.2C149.2 100.2 140.2 91.2 140.2 80.2V60.2C140.2 49.2 149.2 40.2 160.2 40.2H300.2C311.2 40.2 320.2 49.2 320.2 60.2V80.2C320.2000000000001 91.2 311.4 100.2 300.2 100.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.NumberedList.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.NumberedList.displayName = "Blueprint5.Icon.NumberedList";
exports.default = exports.NumberedList;
//# sourceMappingURL=numbered-list.js.map