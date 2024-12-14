import React from "react";
import clsx from "clsx";
import ArrowRightMediumIcon from "shared/icons/ArrowRightMedium.icon";
import css from "./ArrowButton.module.scss";

interface Props {
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit";
    variant?: "prev" | "next";
    onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ArrowButton: React.FC<Props> = ({
    className,
    disabled,
    onClick,
    type = "button",
    variant = "next",
}) => {
    return (
        <button
            className={clsx(css.button, className)}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            <ArrowRightMediumIcon
                style={{ transform: variant === "prev" ? "scaleX(-1)" : undefined }}
            />
        </button>
    );
};
