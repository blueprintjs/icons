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
exports.AddToFolder = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.AddToFolder = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "add-to-folder", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M0.19990005 200L0.19990005 280L400 280L400 80C400 69 391.004498 60 380.009996 60L199.90005 60L199.90005 139.8C199.3073226 173.366448 172.6870804 200 139.730135 200L39.78011 200L0.19990005 200zM380.009996 340C391.004498 340 400 331 399.8001 320L399.8033680000001 300L0 300L0 360C0 371 8.99550224 380 19.990005 380L139.930035 380C145.5272364 380 150.5247376 377.8 154.1229386 374.2L188.305847 340L380.009996 340zM139.730135 160C150.7246376 160 159.72014 151 159.92004 139.8L159.92004 39.8C159.92004 28.8 150.9245378 19.8 139.930035 19.8C128.9355322 19.8 119.94003 28.8 119.94003 39.8L119.94003 91.6L34.1829086 5.8C30.5847076 2.2 25.5872064 0 19.990005 0C8.99550224 0 0 9 0 20C0 25.6 2.19890054 30.6 5.79710144 34.2L91.5542228 120L39.78011 120C28.7856072 120 19.79010494 129 19.79010494 140C19.79010494 151 28.7856072 160 39.78011 160L139.730135 160z" : "M0.199875078 180L0.199875078 220L320 220L320 80C320 69 311.005622 60 300.012492 60L180.0874454 60L180.0874454 119.8C179.494792 153.3664478 152.8778754 180 119.9250468 180L39.9750156 180L0.199875078 180zM300.012492 280L148.307308 280L114.1286696 314.2C110.5309182 317.8 105.5340412 320 99.937539 320L19.9875078 320C8.99437852 320 0 311 0 300L0 240L319.800124 240L319.800124 260C320 271 311.005622 280 300.012492 280zM119.9250468 140L39.9750156 140C28.9818864 140 19.9875078 131 19.9875078 120C19.9875078 109 28.9818864 100 39.9750156 100L71.755153 100L5.99625234 34.2C2.39850094 30.6 0.199875078 25.6 0.199875078 20C0.199875078 9 9.1942536 0 20.1873828 0C25.783885 0 30.780762 2.2 34.3785134 5.8L100.1374142 71.6L100.1374142 39.8C100.1374142 28.8 109.1317926 19.8 120.124922 19.8C131.1180512 19.8 140.1124298 28.8 140.1124298 39.8L140.1124298 119.8C139.9125546 131 130.9181762 140 119.9250468 140z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.AddToFolder.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.AddToFolder.displayName = "Blueprint5.Icon.AddToFolder";
exports.default = exports.AddToFolder;
//# sourceMappingURL=add-to-folder.js.map