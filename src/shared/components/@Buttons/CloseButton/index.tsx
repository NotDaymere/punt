import React from "react";
import clsx from "clsx";
import CrossIcon from "shared/icons/Cross.icon";
import css from "./CloseButton.module.scss";

interface Props {
    className?: string;
    onClick?: () => void;
}

export const CloseButton: React.FC<Props> = ({ className, onClick }) => {
    return (
        <button className={clsx(css.closeBtn, className)} onClick={onClick} type="button">
            <CrossIcon />
        </button>
    );
};
