import React, { JSX } from "react";
import clsx from "clsx";
import css from "./Title.module.scss";

interface Props {
    text: string;
    className?: string;
    variant?: "yellow" | "green";
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const TitleDef: React.FC<Props> = ({ level = 2, variant = "green", text, className }) => {
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

interface PropsV2 {
    children: React.ReactNode;
    className?: string;
    variant?: "yellow" | "green";
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const V2: React.FC<PropsV2> = ({ level = 2, variant = "green", children, className }) => {
    const Tag: keyof JSX.IntrinsicElements = `h${level}`;

    return (
        <Tag 
            className={clsx(
                css.title_v2, 
                css['_' + variant],  
                className
            )} 
        >
            {children}
            <i className={css.title_v2_span}>{children}</i>
        </Tag>
    );
};

const Title = Object.assign(TitleDef, { V2 })

export { Title };