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
exports.NotificationsSnooze = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.NotificationsSnooze = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "notifications-snooze", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M200 40C200 18 182 0 160 0C138 0 120 18 120 40L120 40zM160 400C169.5137614 400 178.2794928 396.63386398 185.1650104 391.03377532C170.164773 382.4448333000001 161.7874748 368.7684848 160 350C157.3333334 322 168 302.6666666 192 292C170.6666666 268 160 250.6666666 160 240L160 216L160 216C160 185.072054 185.072054 160 216 160L280 160L280 120C280 109.785714 287.760204 101.295918 297.67602 100.135204L300 100C311 100 320 91 320 80C320 69 311 60 300 60L300 60L20 60C9 60 0 69 0 80C0 91 9 100 20 100C31 100 40 109 40 120L40 120L40 240C40 292.2 73.4 336.2 120 352.6L120 352.6L120 360C120 382 138 400 160 400zM360 215L360 222.8947368C360 231.179008 353.284272 237.8947368 345 237.8947368L288.75 237.8947368L288.75 237.8947368L356.6695680000001 321.993852C358.824558 324.6621946 360 327.9884778 360 331.4183510000001L360 345C360 353.2842712 353.284272 360 345 360L255 360C246.715728 360 240 353.2842712 240 345L240 341.3157894C240 333.0315182 246.715728 326.3157894 255 326.3157894L311.25 326.3157894L311.25 326.3157894L244.426808 243.3883944C241.562112 239.8333146 240 235.4051024 240 230.8394614L240 215C240 206.7157288 246.715728 200 255 200L345 200C353.284272 200 360 206.7157288 360 215z" : "M180 40C180 18 162 0 140 0C118 0 100 18 100 40L100 40zM140 320C148.0882352 320 155.0951558 315.13408304 158.2379656 308.18504478L158 308L158 308C144 296 140 280.8115966000001 140 270C140 254 145.3333334 241.3333334 156 232C145.3333334 220 140.1064538 207.5555556 140.3193612 194.6666666C140.3551372 192.5008794 140.3849016 190.1092056 140.4086542 187.491645C140.6877054 156.7633412 165.676778 132 196.4063488 132L240 132.02L240 120C240 109.785714 247.760204 101.295918 257.67602 100.135204L260 100C271 100 280 91 280 80C280 69 271 60 260 60L260 60L20 60C9 60 0 69 0 80C0 91 9 100 20 100C31 100 40 109 40 120L40 120L40 200C40 248.6 74.6 289 120.4 298L120.4 298L120 300C120 311 129 320 140 320zM280 185.9649122C280 192.9411406 274.34465 198.5964912 267.368422 198.5964912L232.5 198.5964912L232.5 198.5964912L276.6695680000001 253.2879696C278.824558 255.9563122 280 259.2825954 280 262.7124686L280 268.7058824C280 274.9434512000001 274.9434520000001 280 268.705882 280L211.2280702 280C205.0269782 280 200 274.9730218 200 268.7719298C200 262.5708378 205.0269782 257.5438596 211.2280702 257.5438596L247.5 257.5438596L247.5 257.5438596L204.426809 204.0901488C201.5621128 200.535069 200 196.1068568 200 191.5412158L200 185.9649122C200 178.9886838 205.6553506 173.3333334 212.631579 173.3333334L267.368422 173.3333334C274.34465 173.3333334 280 178.9886838 280 185.9649122z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.NotificationsSnooze.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.NotificationsSnooze.displayName = "Blueprint5.Icon.NotificationsSnooze";
exports.default = exports.NotificationsSnooze;
//# sourceMappingURL=notifications-snooze.js.map