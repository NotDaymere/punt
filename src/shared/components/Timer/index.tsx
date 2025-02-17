import React from "react";
import css from "./Timer.module.scss";
import clsx from "clsx";

interface Props {
    className?: string;
}

export const Timer: React.FC<Props> = ({
    className
}) => {
    return (
        <p className={clsx(css.timer, className)}>
            <span>0</span>
            <span>2</span>d<strong>:</strong>
            <span>0</span>
            <span>4</span>h<strong>:</strong>
            <span>5</span>
            <span>5</span>m<strong>:</strong>
            <span>2</span>
            <span>4</span>s
        </p>
    );
};