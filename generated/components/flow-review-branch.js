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
exports.FlowReviewBranch = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.FlowReviewBranch = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "flow-review-branch", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M260.797012 131.525098C248.802586 124.313996 234.765448 120.168416 219.762708 120.168416C182.5737802 120.168416 151.317997 145.640912 142.4007968 180.1354648L66.8385368 180.1354648L114.2878034 133.934052C117.795365 130.416868 119.9388748 125.531892 119.9388748 120.060716C119.9388748 109.313766 110.9032724 100.098944 100.1857228 100.098944C94.7295156 100.098944 89.8634064 102.159658 86.3558448 105.872242L5.84593616 186.3442214C2.33837446 189.861405 1.1e-12 194.550983 1.1e-12 200.0221574C1.1e-12 205.4933318 2.14350992 210.378309 5.65107162 213.8954926L86.3558448 294.7122578C89.8634064 298.2294412 94.7295156 300.4675066 100.1857228 300.4675066C110.9032724 300.4675066 119.9388748 291.0627746 119.9388748 280.3158248C119.9388748 274.8446504 117.795365 269.9596734 114.2878034 266.4424898L66.6436724 220.3260758L142.3644456 220.3260758C151.2327734 254.892267 182.523073 280.4342744 219.762708 280.4342744C235.187474 280.4342744 249.591548 276.0521832 261.804346 268.4617966L333.094664 339.8614728L282.335368 339.9118194C277.370004 339.9167442 272.402728 341.8541062 268.536952 345.7228108C260.94346 353.3220518 260.9301500000001 366.76292282 268.508602 374.3471153C272.366724 378.208158764 277.330172 380.1356707952 282.433598 379.99257780614L380.3638380000001 379.8954442182C385.329202 379.8905192484 390.296204 378.229219706 394.1619800000001 374.3605152C398.027758 370.49181068 399.5659940000001 365.52116614 399.570914 360.55204234L399.667976 262.547622C399.6728960000001 257.5784984 397.746842 252.61129 393.88872 248.7502464C386.3102700000001 241.166054 373.157372 241.1790998 365.5638820000001 248.7783408C361.6981040000001 252.6470454 359.7622100000001 257.6180844 359.757288 262.5872082L359.70698 313.3849532L288.618256 240.997573C295.644588 229.0698852 299.67642 215.1577492 299.67642 200.3013452C299.67642 185.030641 295.41658 170.757606 288.023464 158.611888L359.92979 86.72787L359.980098 137.525614C359.985018 142.494738 361.9209140000001 147.465778 365.78669 151.334482C373.38018 158.933724 386.772942 158.947006 394.351394 151.362814C398.209514 147.50177 400.13557 142.534562 399.992584 137.42727L399.895524 39.42285C399.890602 34.453726 398.230854 29.7799700000001 394.3650780000001 25.911266C390.499302 22.042562 385.532026 20.1052 380.566662 20.100276L279.478592 20.00001C274.5132280000001 19.995086 269.54978 21.922598 265.691658 25.78364C258.113208 33.367834 258.126314 46.601292 265.719802 54.200532C269.585578 58.069236 274.552854 60.006598 279.518218 60.011522L333.4353440000001 60.0650020000001L260.797012 131.525098z" : "M207.838848 107.0543138C199.4745472 102.6361524 189.9392114 100.1343842 179.8188874 100.1343842C153.6874726 100.1343842 131.456233 116.8139276 123.2139092 140.0958078L67.410214 140.0966668L94.174242 113.7490006C97.6251746 110.1795432 99.9162722 105.5363486 99.8209924 100.0791986C99.6338356 89.359794 89.345798 80.183236 80.0375544 80.18338C70.7293106 80.183522 67.4110798 83.91805 65.0819224 86.054052L5.6183411 146.3665006C2.16740852 149.9359584 -0.092379026 154.6543754 0.00290078472 160.1115262C0.0981805928 165.5686768 2.32958646 170.4036782 5.90302168 173.850557L66.0827968 234.4102578C69.656232 237.8571368 74.5716964 239.915893 80.0350936 239.820554C90.7667668 239.633281 100.00631 230.1191058 99.8191532 219.3997028C99.7238734 213.9425522 97.4924676 209.107551 93.9190322 205.660672L67.409598 180.0547356L123.2037772 180.0538768C131.4380022 203.350719 153.6767576 220.0439438 179.8188874 220.0439438C188.9340872 220.0439438 197.5747276 218.0144362 205.312608 214.3831314L253.633306 259.9165510000001L219.008086 259.848267C214.045492 260.019327 209.151274 262.4208344 205.427966 266.4125496C198.1143272 274.2534188 198.5530402 286.65628206 206.402884 293.97446812C210.399168 297.70008994 215.596224 300.287910822 220.691794 299.9742896574L300.93453 299.8771036538C305.897124 299.706043554 310.801224 297.8812686 314.524532 293.8895533C318.247838 289.897838 320.002252 284.8701694 319.826766 279.9090242L319.791134 199.0019896C319.615648 194.0408444 317.510264 189.1462224 313.51398 185.4206002C305.664136 178.1024146 292.406936 178.5296898 285.093298 186.3705592C281.36999 190.3622744 279.615576 195.3899432 279.791062 200.3510884L279.80597 234.202238L232.973788 187.964708C237.360058 179.6369824 239.842294 170.1526204 239.842294 160.0891638C239.842294 151.0606106 237.844342 142.4981708 234.265972 134.8189022L279.97017 86.42151L279.901868 121.0376834C280.072974 125.9989818 282.36483 130.8919696 286.357588 134.6143044C294.200506 141.9260332 306.60661 141.4874346 313.926708 133.6396412C317.653304 129.6444008 320.241802 124.4487026 319.928098 119.3544636L319.830886 39.132692C319.659782 34.171392 317.834632 29.035146 313.841874 25.31281C309.849116 21.590476 304.820134 19.836522 299.857692 20.01196L218.929516 20.047584C213.967074 20.223024 209.07107 22.561288 205.344474 26.556528C198.0243762 34.404322 198.451857 47.445122 206.294774 54.756852C210.287534 58.479188 215.316516 60.23314 220.278958 60.0577L254.138952 60.042796L207.838848 107.0543138z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.FlowReviewBranch.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.FlowReviewBranch.displayName = "Blueprint5.Icon.FlowReviewBranch";
exports.default = exports.FlowReviewBranch;
//# sourceMappingURL=flow-review-branch.js.map