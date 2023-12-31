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
exports.Help = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Help = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "help", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M200 400C89.6 400 0 310.4 0 200C0 89.6 89.6 0 200 0S400 89.6 400 200C400 310.4 310.4 400 200 400zM148.2 307.6C161.2 318.4 178.4 324 199.4 324C210.2000000000001 324 220 322.4 229.0000000000001 319C237.8 315.6 245.6 311.2000000000001 251.8000000000001 305.4C258.2000000000001 299.6 263.0000000000001 292.8 266.6 285C270.0000000000001 277.2 271.8 268.6 271.8 259.6S270.2000000000001 242.2 267 235C263.8 227.6 259 220.4 252.8 212.8L228.6 181.2C225.8 177.8 223 174.6 222.2 171.6C221.2 168.6 220 164.6 220 159.6V151C220 148.6 220 140.2000000000001 220 140.2000000000001H180V180.2000000000001C180 180.2000000000001 181.2 191.8000000000001 184.8 196.4L209 229.2000000000001C214 235.2000000000001 217.2 240.4000000000001 219.2 244.6000000000001S222 253.4000000000001 222 258.0000000000001C222 265 219.8 270.6 215.6 275S205.6 281.6 198 281.6C190.6 281.6 184.6 279.4000000000001 180.2 275C175.8 270.4 172.8 264.2 171 256.2C170.4 253.8 168.8 252.8 166.4 253L127.4 258.8C125 259 124.2 260.4 124.6 263.2C127.2 281.8 135 296.6 148.2 307.6zM180 120H220.4L220 80H180V120z" : "M160 320C71.6 320 0 248.4 0 160S71.6 0 160 0S320 71.6 320 160S248.4 320 160 320zM180 60H140V100H180V60zM218.6 190.4C215.8 184 211.6 177.6 206.2 171L185 143.4C182.6 140.4 180.2 137.6 179.4 135C178.6 132.4 177.6 129 177.6 124.6V120H142.4V142.4C142.4 142.4 143.4 152.6 146.6 156.6L168 185.4C172.4 190.6 175 195.2 176.8 199C178.6 202.8 179.2 206.6 179.2 210.6C179.2 216.6 177.2 221.6 173.6 225.6C170 229.4 164.8 231.2 158.4 231.2C151.8 231.2 146.6 229.2 142.8 225.4C139 221.6 136.2 216.2 134.8 209.2C134.2 207 132.8 206.2 130.8 206.4L96.8 211.4C94.4 211.6 93.6 213 94 215.2C96.4 231.6 103.2 244.6 114.6 254C126 263.6 141 268.4 159.6 268.4C169 268.4 177.6 267 185.4 264C193.2 261 199.8 257.2 205.4 252.2C211 247.2 215.2 241.2 218.4 234.4C221.4 227.4 222.8 220 222.8 212S221.4 197 218.6 190.4z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Help.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Help.displayName = "Blueprint5.Icon.Help";
exports.default = exports.Help;
//# sourceMappingURL=help.js.map