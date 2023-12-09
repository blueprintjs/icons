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
exports.EyeOpen = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.EyeOpen = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "eye-open", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M200.1998 240.3130406C178.2217782 240.3130406 160.2397602 222.2624252 160.2397602 200.200562C160.2397602 178.1386996 178.2217782 160.0880842 200.1998 160.0880842C222.177822 160.0880842 240.15984 178.1386996 240.15984 200.200562C240.15984 222.2624252 222.177822 240.3130406 200.1998 240.3130406zM400 200.8022492C400 201.0028116 400 201.203374 400 201.4039364C400 201.4039364 400 201.6044988 400 201.6044988C400 201.8050612 400 201.8050612 400 202.0056236C400 202.206186 400 202.206186 400 202.4067484C400 202.4067484 400 202.4067484 400 202.4067484C399.6004 205.6157466 398.001998 208.8247448 395.804196 211.2314936C383.016984 227.276485 367.832168 241.516415 352.447552 254.5529704C319.28072 282.6317054 281.118882 306.29806786 239.16084 315.72450034C214.985014 321.139684948 190.4095904 321.340247342 166.033966 316.7273123C143.8561438 312.71606444 122.4775224 303.89131916 102.4975024 293.06095C71.1288712 276.0131466000001 42.5574426 252.747909 17.58241758 226.4742354C12.98701298 221.4601756 8.3916084 216.6466782 4.1958042 211.2314936C-1.398601398 204.2118098 -1.398601398 195.7881902 4.1958042 188.7685064C16.98301698 172.723515 32.1678322 158.483585 47.5524476 145.4470296C80.7192808 117.368294 118.8811188 93.902494 160.8391608 84.2755C185.014985 78.860316 209.59041 78.659752 233.966034 83.272688C256.143856 87.484498 277.522478 96.309244 297.502498 107.139612C328.871128 124.1874158 357.442558 147.4526534 382.417582 173.726327C387.0129880000001 178.5398244 391.608392 183.5538842 395.804196 188.7685064C398.001998 191.1752552 399.4006000000001 194.183691 400 197.5932516C400 197.5932516 400 197.5932516 400 197.5932516C400 197.793814 400 197.793814 400 197.9943764C400 198.1949388 400 198.1949388 400 198.3955012C400 198.3955012 400 198.5960636 400 198.5960636C400 198.796626 400 198.9971884 400 199.1977508C400 199.3983132 400 199.7994372 400 199.9999996C400 200.4011244 400 200.6016868 400 200.8022492zM200.1998 119.975606C156.043956 119.975606 120.2797202 155.876274 120.2797202 200.200562C120.2797202 244.5248508 156.043956 280.4255192 200.1998 280.4255192C244.355644 280.4255192 280.11988 244.5248508 280.11988 200.200562C280.11988 155.876274 244.355644 119.975606 200.1998 119.975606z" : "M160.049922 179.9463792C149.0670826 179.9463792 140.0811232 170.9230228 140.0811232 159.894476C140.0811232 148.8659294 149.0670826 139.842573 160.049922 139.842573C171.0327614 139.842573 180.0187208 148.8659294 180.0187208 159.894476C180.0187208 170.9230228 171.0327614 179.9463792 160.049922 179.9463792zM319.800312 160.4960332C319.800312 160.6965522 319.800312 160.6965522 319.800312 160.8970712C319.800312 160.8970712 319.800312 161.0975902 319.800312 161.0975902C319.800312 161.2981092 319.800312 161.2981092 319.800312 161.4986284C319.800312 161.6991474 319.800312 161.6991474 319.800312 161.8996664C319.800312 161.8996664 319.800312 161.8996664 319.800312 161.8996664C319.400936 164.7069328 318.202808 167.1131612 316.405616 169.1183514C306.221528 182.5531266 294.040562 194.3837494 281.659906 205.2117772C255.101404 228.6725038 224.74883 248.32336886 191.201248 256.1436110800001C171.6318252 260.956067826 152.2620904 261.156586858 132.6926678 257.34672526C114.9204368 253.7373827 97.9469578 246.51869758 81.7722308 237.4953412C56.8112324 223.25849 33.8471138 203.808144 13.87831514 181.9515694C10.28393136 177.7406698 6.68954758 173.7302892 3.2948518 169.3188706C-1.098283932 163.5038186 -1.098283932 156.4856526 3.2948518 150.6706006C13.47893916 137.2358256 25.6599064 125.4052026 38.0405616 114.5771758C64.599064 91.1164492 94.951638 71.465584 128.49922 63.6453418C147.8689548 59.033404 167.4383776 58.832886 187.0078004 62.8432658C204.780032 66.4526082 221.75351 73.6712934 237.928238 82.6946498C262.889236 96.931501 285.853354 116.381847 305.822152 138.2384206C309.416536 142.2488012 313.2106080000001 146.459701 316.605304 150.8711196C318.402496 152.87631 319.6006240000001 155.4830574 320 158.0898048C320 158.0898048 320 158.0898048 320 158.0898048C320 158.2903238 320 158.2903238 320 158.4908428C320 158.6913618 320 158.6913618 320 158.8918808C320 158.8918808 320 159.0924 320 159.0924C320 159.2929190000001 320 159.2929190000001 320 159.493438C320 159.693957 320 159.894476 320 160.094995C320 160.2955142 319.800312 160.2955142 319.800312 160.4960332zM160.049922 99.7387674C126.901716 99.7387674 100.1435258 126.6083168 100.1435258 159.894476C100.1435258 193.1806352 126.901716 220.0501854 160.049922 220.0501854C193.198128 220.0501854 219.956318 193.1806352 219.956318 159.894476C219.956318 126.6083168 193.198128 99.7387674 160.049922 99.7387674z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.EyeOpen.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.EyeOpen.displayName = "Blueprint5.Icon.EyeOpen";
exports.default = exports.EyeOpen;
//# sourceMappingURL=eye-open.js.map