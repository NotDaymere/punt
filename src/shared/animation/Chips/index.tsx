import React from "react";
import clsx from "clsx";
import Image from "shared/ui/Image";
import css from "./Chips.module.scss";

interface Props {
    className?: string;
    count?: 3 | 4;
}

export const Chips: React.FC<Props> = ({ className, count }) => {
    return (
        <div className={clsx(css.chips, className)}>
            <div className={css.chips_item}>
                <Image.Default src="/img/figures/chip.svg" alt="" />
            </div>
            <div className={css.chips_item}>
                <Image.Default src="/img/figures/chip.svg" alt="" />
            </div>
            <div className={css.chips_item}>
                <Image.Default src="/img/figures/chip.svg" alt="" />
            </div>
            {count === 4 && (
                <div className={css.chips_item}>
                    <Image.Default src="/img/figures/chip.svg" alt="" />
                </div>
            )}
        </div>
    );
};
