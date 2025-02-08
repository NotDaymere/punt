import React from "react";
import clsx from "clsx";
import { NextLink } from "shared/ui/NextLink";
import css from "./BigButton.module.scss";

type AnchorProps = {
    component?: "link";
    href?: string;
};

type ButtonProps = {
    component?: "button";
    type?: "button" | "submit";
};

type Props = {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
} & (AnchorProps | ButtonProps);

export const BigButton: React.FC<Props> = ({
    component = "button",
    className,
    children,
    ...props
}) => {
    if (component === "button") {
        <button {...props} className={clsx(css.button, className)}>
            {children}
            <span />
            <span />
            <span />
            <span />
        </button>;
    }

    return (
        <NextLink {...props} className={clsx(css.button, className)}>
            {children}
            <span />
            <span />
            <span />
            <span />
        </NextLink>
    );
};
