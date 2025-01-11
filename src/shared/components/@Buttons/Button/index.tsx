import React from "react";
import clsx from "clsx";
import css from "./Button.module.scss";

interface Anchor {
    component?: "a";
    href?: string;
    target?: "_blank";
    onClick?: (ev: React.MouseEvent<HTMLAnchorElement>) => void;
}

interface Button {
    component?: "button";
    disabled?: boolean;
    type?: "button" | "submit";
    onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

interface Span {
    component?: "span";
}

type Props = (Anchor | Button | Span) & {
    className?: string;
    variant?: "white" | "green" | "black";
    circle?: boolean;
    children?: React.ReactNode;
};

export const Button: React.FC<Props> = ({
    className,
    component: Tag = "button",
    variant = "white",
    circle,
    children,
    ...props
}) => {
    return (
        <Tag 
            {...(props as any)} 
            className={clsx(
                css.button, 
                css["_" + variant],
                circle && css._circle, 
                className
            )}
        >
            <span>{children}</span>
        </Tag>
    );
};
