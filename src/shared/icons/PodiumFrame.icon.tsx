import React, { SVGProps } from "react";

const PodiumFrameIcon: React.FC<SVGProps<SVGSVGElement>> = ({ id, ...props }) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg">
            <clipPath id={id} clipPathUnits="objectBoundingBox">
                <path d="M46 2.04145C50.3316 -0.459407 55.6684 -0.459407 60 2.04145L98.8275 24.4585C103.159 26.9594 105.828 31.5812 105.828 36.5829V81.4171C105.828 86.4188 103.159 91.0406 98.8275 93.5415L60 115.959C55.6684 118.459 50.3316 118.459 46 115.959L7.17245 93.5415C2.84084 91.0406 0.172451 86.4188 0.172451 81.4171V36.5829C0.172451 31.5812 2.84084 26.9594 7.17245 24.4585L46 2.04145Z" />
            </clipPath>
        </svg>
    );
};

export default PodiumFrameIcon;
