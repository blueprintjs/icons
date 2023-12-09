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
exports.SeriesSearch = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.SeriesSearch = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "series-search", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M225.6 173.8L220 168.2L154.2 234.2C150.6 237.8 145.6 240 140 240S129.4 237.8 125.8 234.2L40 148.2V320C40 331 31 340 20 340S0 331 0 320V40C0 37.2 0.6 34.6 1.6 32.2C4.6 25 11.8 20 20 20H380C391 20 400 29 400 40C400 51 391 60 380 60H40V91.8L140 191.8L205.8 126C209.4 122.2 214.4 120 220 120S230.6 122.2 234.2 125.8L276 167.6C272.6 167.2 269.2000000000001 167.2 265.8 167.2C251.8 167.2 238.2 169.6 225.6 173.8zM207 293.8C207 326.2000000000001 233.2 352.4000000000001 265.6 352.4000000000001S324.2000000000001 326.2000000000001 324.2000000000001 293.8S298 235.2 265.6 235.2S207 261.4 207 293.8zM336.4 245.2C338.6 248.6 340.6 251.8 342.2 255.4C342.4000000000001 256 342.8 256.6 343 257.2C344.5999999999999 260.8 346.2 264.2 347.2 268C348.4 272 349.2000000000001 275.6 350 279.6C350.2000000000001 280.6 350.2000000000001 281.4 350.4 282.4C351 286.4 351.4 290.2 351.4 294.4C351.4 341.8 312.8 380.4 265.4 380.4C218 380.2 179.4 341.8 179.4 294.2S218 208.2 265.4 208.2C269.6 208.2 273.4 208.6 277.4 209.2C278.2 209.2 279.2 209.4 280.2 209.6C284.2 210.2 287.8 211.2 291.6 212.4C295.6 213.6 299 215.2000000000001 302.6 216.6C303.2 216.8000000000001 303.8 217.2 304.4000000000001 217.4C308 219.2 311.2 221.2 314.6 223.2L372 165.8C374.8000000000001 163 378.6 161.4 383.2 161.4C391.8 161.4 398.8 168.4 398.8 177C398.6 181.2 396.8 185.2 394.2000000000001 188.2L336.4 245.2z" : "M192 141.2C198.2 140 204.4 139.4 211 139.4C215 139.4 219 139.6 223 140.2C224.8 140.4 226.2 140.6 228.4 141C230.4 141.2 232.8 141.8 236.2 142.6L240.8 144C241.6 144.2 242.4 144.4 243 144.8L247.4 140.4L193.4 85.9999999999999C189.8 82.2 184.8 80 179.2 80S168.6 82.2 165 86L99.6 151.8L39.8 91.8V60H298.6C309.6 60 318.6 51 318.6 40C318.6 29 309.6 20 298.6 20H20C9 20 0 29 0 40V240.2C0 251.2 9 260.2 20 260.2S40 251.2 40 240.2V148.4L85.6 194.4C89 198 94 200.2 99.6 200.2S110.2 198 113.6 194.4L179.2 128.4L192 141.2zM316.4 149.4C318.4 147 319.8 144 320 140.6C320 133.8 314.6 128.4 307.8 128.4C304.2000000000001 128.4 301.2 129.8 299.2000000000001 132L254.4 177C251.8 175.4 249.2 173.8 246.4 172.4C246 172.2 245.4 172 245 171.8C242.2 170.6 239.6 169.4 236.6 168.4H236.4C233.6 167.4 230.6 166.8 227.6 166.2C226.8000000000001 166 226 165.8 225.4000000000001 165.8C222.4 165.4 219.4 165 216.2 165C179.2 165 149.2 195.2 149.2 232.4S179.2 299.8 216.2 300C253.2 300 283.2 269.8 283.2 232.6C283.2 229.4 282.8 226.4 282.4000000000001 223.2C282.2000000000001 222.4 282.2000000000001 221.8 282 221C281.6 218 281 215.2 280 212.2V212C279 209 277.8 206.4 276.6 203.6C276.4 203.2 276.2 202.6 276 202.2C274.6 199.4 273.2 196.8 271.4 194.2L316.4 149.4zM216.2 188.2C240.6 188.2 260.4 208 260.4 232.6C260.4 257.2000000000001 240.6 277 216.2 277C191.8 277 172 257.2000000000001 172 232.6C172 208.2 191.8 188.2 216.2 188.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.SeriesSearch.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.SeriesSearch.displayName = "Blueprint5.Icon.SeriesSearch";
exports.default = exports.SeriesSearch;
//# sourceMappingURL=series-search.js.map