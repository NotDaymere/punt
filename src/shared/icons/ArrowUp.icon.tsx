import React, { SVGProps } from "react";

const ArrowUpIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.99911 15.5438L9.99911 4.45654M9.99911 4.45654L6.45117 8.00448M9.99911 4.45654L13.547 8.00448"
                fill="none"
                strokeWidth="1.38591"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowUpIcon;
