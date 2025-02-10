import React from "react";
import clsx from "clsx";
import Image from "shared/ui/Image";
import css from "./WheelButton.module.scss";

interface Props {
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export const WheelButton: React.FC<Props> = ({ className, onClick, disabled }) => {
    return (
        <button
            className={clsx(css.button, className)}
            onClick={onClick}
            disabled={disabled}
            type="button"
        >
            <Image.Default
                onDragStart={(ev) => ev.preventDefault()}
                className={css.button_borders}
                src="/img/home/wheel/wheel-button-borders.webp"
                alt=""
            />
            <Image.Default
                onDragStart={(ev) => ev.preventDefault()}
                className={css.button_btn}
                src="/img/home/wheel/wheel-button.webp"
                alt=""
            />
        </button>
    );
};
