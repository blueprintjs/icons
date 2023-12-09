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
exports.RectHeight = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.RectHeight = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "rect-height", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M80 40V360H320V40H80zM40 380C40 391.04568 48.9544 400 60 400H340C351.046 400 360 391.0457 360 380V20C360 8.954 351.046 0 340 0H60C48.9544 0 40 8.954 40 20V380zM125.8518 145.894C118.0494 153.696 118.0494 166.346 125.8518 174.148C133.6542 181.95 146.3042 181.95 154.1066 174.148L200 128.254L245.894 174.148C253.696 181.95 266.346 181.95 274.148 174.148C281.95 166.346 281.95 153.696 274.148 145.894L214.9 86.646C214.658 86.376 214.408 86.112 214.148 85.852C210.242 81.946 205.12 79.994 200 80C194.88 79.994 189.7582 81.946 185.8518 85.852C185.5924 86.112 185.3416 86.376 185.0996 86.646L125.8518 145.894zM125.8518 225.8518000000001C118.0494 233.6542 118.0494 246.3042 125.8518 254.1066L185.0996 313.3544C185.3416 313.6242 185.5924 313.8888 185.8518 314.1482C189.7582 318.0546 194.88 320.0052 200 320C205.12 320.0052 210.242 318.0546 214.148 314.1482C214.408 313.8888 214.658 313.6242 214.9 313.3544L274.148 254.1066C281.95 246.3042 281.95 233.6542 274.148 225.8518000000001C266.346 218.0494 253.696 218.0494 245.894 225.8518000000001L200 271.7452L154.1066 225.8518000000001C146.3042 218.0494 133.6542 218.0494 125.8518 225.8518000000001z" : "M60 20V300H260V20H60zM60 0C48.9544 0 40 8.954 40 20V300C40 311.0457 48.9544 320 60 320H260C271.046 320 280 311.0457 280 300V20C280 8.954 271.046 0 260 0H60zM174.1422 254.1422C166.3316 261.9526 153.6684 261.9526 145.8578 254.1422L105.8578 214.1422C98.0474 206.3316 98.0474 193.6684 105.8578 185.8578C113.6684 178.0474 126.3316 178.0474 134.1422 185.8578L160 211.7158L185.8578 185.8578C193.6684 178.0474 206.332 178.0474 214.142 185.8578C221.952 193.6684 221.952 206.3316 214.142 214.1422L174.1422 254.1422zM134.1422 134.1422C126.3316 141.9526 113.6684 141.9526 105.8578 134.1422C98.0474 126.3316 98.0474 113.668 105.8578 105.858L145.8578 65.858C149.6086 62.108 154.6956 60 160 60C165.3044 60 170.3914 62.108 174.1422 65.858L214.142 105.858C221.952 113.668 221.952 126.3316 214.142 134.1422C206.332 141.9526 193.6684 141.9526 185.8578 134.1422L160 108.284L134.1422 134.1422z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.RectHeight.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.RectHeight.displayName = "Blueprint5.Icon.RectHeight";
exports.default = exports.RectHeight;
//# sourceMappingURL=rect-height.js.map