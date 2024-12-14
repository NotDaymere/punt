import React from "react";
import css from "./IconButton.module.scss";
import clsx from "clsx";

interface Props {
    icon: React.FC<any>;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit";
    onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

export const IconButton: React.FC<Props> = ({
    className,
    disabled,
    onClick,
    type = "button",
    ...props
}) => {
    return (
        <button 
            className={clsx(css.button, className)}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            <props.icon />            
        </button>
    );
};