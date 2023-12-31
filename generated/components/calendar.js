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
exports.Calendar = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Calendar = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "calendar", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M300 300C312 300 320 308 320 320L320 360C320 370 312 380 300 380C288 380 280 370 280 360L280 320C280 308 288 300 300 300zM100 300C112 300 120 308 120 320L120 360C120 370 112 380 100 380C88 380 80 370 80 360L80 320C80 308 88 300 100 300zM360 340L340 340L340 320C340 298 322 280 300 280C278 280 260 298 260 320L260 340L140 340L140 320C140 298 122 280 100 280C78 280 60 298 60 320L60 340L40 340C30 340 20 330 20 320L20 40C20 30 30 20 40 20L360 20C370 20 380 30 380 40L380 320C380 330 370 340 360 340zM140 60L60 60L60 140L140 140L140 60zM140 160L60 160L60 240L140 240L140 160zM240 60L160 60L160 140L240 140L240 60zM240 160L160 160L160 240L240 240L240 160zM340 60L260 60L260 140L340 140L340 60zM340 160L260 160L260 240L340 240L340 160z" : "M220 260C232 260 240 270 240 280L240 300C240 312 232 320 220 320C208 320 200 312 200 300L200 280C200 270 208 260 220 260zM280 300L260 300L260 280C260 258 242 240 220 240C198 240 180 258 180 280L180 300L120 300L120 280C120 258 102 240 80 240C58 240 40 258 40 280L40 300L20 300C8 300 0 290 0 280L0 40C0 28 8 20 20 20L280 20C292 20 300 28 300 40L300 280C300 292 290 300 280 300zM100 60L40 60L40 120L100 120L100 60zM100 140L40 140L40 200L100 200L100 140zM180 60L120 60L120 120L180 120L180 60zM180 140L120 140L120 200L180 200L180 140zM260 60L200 60L200 120L260 120L260 60zM260 140L200 140L200 200L260 200L260 140zM80 260C92 260 100 270 100 280L100 300C100 312 92 320 80 320C68 320 60 312 60 300L60 280C60 270 68 260 80 260z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Calendar.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Calendar.displayName = "Blueprint5.Icon.Calendar";
exports.default = exports.Calendar;
//# sourceMappingURL=calendar.js.map