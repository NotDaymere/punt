import React, { SVGProps } from "react";

const MarkIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
           {...props}
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9 2.5L3.49999 7.5L1 5.22727"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default MarkIcon;
