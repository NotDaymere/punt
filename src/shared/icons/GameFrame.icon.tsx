import React, { SVGProps } from "react";

const GameFrameIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg">
            <clipPath id="game-frame" clipPathUnits="objectBoundingBox">
                <path
                    d="M2.43155 7.16296L12.2235 0L121.219 0.331704L126.912 6.40393C128.013 27.1124 129.614 75.1911 130.935 100.364L128.812 171.872L121.222 178.703L13.0605 179.462L4.71179 171.872C1.68294 128.931 -2.85515 38.145 2.43155 7.16296Z"
                    transform="scale(0.007633, 0.0055555)"
                />
            </clipPath>
        </svg>
    );
};

export default GameFrameIcon;
