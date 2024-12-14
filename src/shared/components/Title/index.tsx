import React, { JSX } from "react";
import clsx from "clsx";
import css from "./Title.module.scss";

interface Props {
    text: string;
    className?: string;
    variant?: "yellow" | "green";
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Title: React.FC<Props> = ({ level = 2, variant = "green", text, className }) => {
    const Tag: keyof JSX.IntrinsicElements = `h${level}`;

    return (
        <Tag 
            className={clsx(
                css.title, 
                css['_' + variant],  
                className
            )} 
            data-title={text}
        >
            {text}
        </Tag>
    );
};