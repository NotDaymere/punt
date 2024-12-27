import React, { SVGProps } from "react";

const EyeRIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M32.9912 26.3612C31.9421 29.6783 31.3022 29.8356 20.2747 29.7485C9.96636 29.6902 9.24771 29.5552 9.62606 27.8033C10.2752 24.6178 11.5814 24.2765 23.3018 24.2595C32.8645 24.2624 33.6099 24.4241 32.9912 26.3612Z"
                fill="#BFDBFF"
                fillOpacity="0.3"
            />
            <path
                d="M20.579 2.28368C21.3666 6.00485 21.2603 5.95146 12.7669 13.3096C6.49034 18.7355 4.56953 19.6858 3.96272 17.798C3.32986 15.7242 3.54389 15.4062 11.2644 8.17843C18.5576 1.32121 20.1067 -0.00214332 20.579 2.28368Z"
                fill="#BFDBFF"
            />
        </svg>
    );
};

export default EyeRIcon;
