import React from "react";
import clsx from "clsx";
import css from "./CubeSlide.module.scss";

interface Props {
    className?: string;
    children?: React.ReactNode;
}

export const CubeSlide: React.FC<Props> = ({
    children,
    className
}) => {
    return (
        <div className={clsx("cube-slide",css.slide, className)}>
            {children}
        </div>
    );
};

CubeSlide.displayName = "CubeSlide";