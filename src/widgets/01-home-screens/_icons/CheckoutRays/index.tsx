import React, { SVGProps } from "react";
import "./checkout-rays.scss";

const CheckoutRays: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg {...props} viewBox="0 0 483 196" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M391.5 93L419.498 60.5"
                stroke="#D7FF82"
                strokeWidth="6"
                strokeLinecap="round"
                className="checkout-ray-1"
            />
            <path
                d="M400.5 106.5C432.133 93.6132 448.369 86.8878 480.002 74.0005"
                stroke="#D7FF82"
                strokeWidth="6"
                strokeLinecap="round"
                className="checkout-ray-2"
            />
            <path
                d="M404.498 122L443.498 121.5"
                stroke="#D7FF82"
                strokeWidth="6"
                strokeLinecap="round"
                className="checkout-ray-3"
            />
            <path
                d="M189.5 45.5C177.394 28.9027 170.606 19.5973 158.5 3"
                stroke="#D7FF82"
                strokeWidth="6"
                strokeLinecap="round"
                className="checkout-ray-4"
            />
            <path
                d="M42 188L3 193"
                stroke="#D7FF82"
                strokeWidth="6"
                strokeLinecap="round"
                className="checkout-ray-5"
            />
        </svg>
    );
};

export default CheckoutRays;
