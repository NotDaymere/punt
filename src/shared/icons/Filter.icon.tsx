import React, { SVGProps } from "react";

const FilterIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.88281 6.30615H17.1172"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M5.00781 9.85791L14.9883 9.86176"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M7.50391 13.6938H12.4961"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default FilterIcon;
