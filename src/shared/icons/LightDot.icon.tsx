import React, { SVGProps } from "react";

const LightDotIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.68218 0.558487C2.42384 0.866507 0.84279 2.94696 1.15081 5.2053C1.45883 7.46365 3.53928 9.0447 5.79762 8.73668C8.05597 8.42865 9.63702 6.34821 9.329 4.08986C9.02098 1.83152 6.94053 0.250467 4.68218 0.558487Z"
                fill="url(#paint0_radial_1812_142050)"
            />
            <path
                d="M4.73321 0.99783C2.71735 1.27278 1.30607 3.12984 1.58102 5.14569C1.85596 7.16155 3.71302 8.57283 5.72888 8.29788C7.74473 8.02294 9.15602 6.16588 8.88107 4.15002C8.60612 2.13417 6.74906 0.722883 4.73321 0.99783Z"
                fill="url(#paint1_linear_1812_142050)"
            />
            <path
                d="M3.90761 8.55428C3.55676 8.0414 3.31653 7.44145 3.22684 6.78387C2.91882 4.52554 4.49989 2.44508 6.75822 2.13706C7.41579 2.04737 8.05816 2.11816 8.64614 2.31886C7.79213 1.07046 6.28097 0.339543 4.68022 0.557873C2.42189 0.865892 0.840826 2.94636 1.14884 5.20469C1.36717 6.80544 2.47609 8.06566 3.90761 8.55428Z"
                fill="url(#paint2_linear_1812_142050)"
            />
            <path
                d="M2.7149 6.77535C2.57177 5.72599 3.69372 4.70648 5.22074 4.4982C6.74777 4.28993 8.10163 4.97176 8.24476 6.02112C8.38788 7.07048 7.26606 8.08997 5.73904 8.29825C4.21189 8.50654 2.85802 7.82471 2.7149 6.77535Z"
                fill="url(#paint3_linear_1812_142050)"
            />
            <defs>
                <radialGradient
                    id="paint0_radial_1812_142050"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(6.63175 6.0573) rotate(172.233) scale(5.14218)"
                >
                    <stop stopColor="#DBFFBF" />
                    <stop offset="0.4169" stopColor="#DBFFBF" />
                    <stop offset="0.6278" stopColor="#DBFFBF" />
                    <stop offset="0.7926" stopColor="#B9FF82" />
                    <stop offset="0.9326" stopColor="#AFF578" />
                    <stop offset="1" stopColor="#86DA44" />
                </radialGradient>
                <linearGradient
                    id="paint1_linear_1812_142050"
                    x1="4.42381"
                    y1="4.03439"
                    x2="9.98256"
                    y2="8.2588"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#CFFFA9" stopOpacity="0" />
                    <stop offset="1" stopColor="#B9FF82" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_1812_142050"
                    x1="3.47989"
                    y1="4.7303"
                    x2="-3.25794"
                    y2="12.2167"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#DBFFBF" stopOpacity="0" />
                    <stop offset="1" stopColor="#86DA44" />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_1812_142050"
                    x1="5.41259"
                    y1="5.90576"
                    x2="5.93851"
                    y2="9.76165"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default LightDotIcon;
