import React from "react";
import clsx from "clsx";
import css from "./CubeSlide.module.scss";

interface Props {
    className?: string;
    children?: React.ReactNode;
    index?: number;
}

export const CubeSlide: React.FC<Props> = ({
    children,
    className,
    index
}) => {
    return (
        <div className={clsx("cube-slide", css.slide, className)} data-index={index}>
            {children}
        </div>
    );
};

CubeSlide.displayName = "CubeSlide";