import React from "react";
import css from "./ProgressRange.module.scss";
import clsx from "clsx";
import Image from "shared/ui/Image";

interface Rank {
    name: string;
    medal: string;
}

interface Props {
    current: Rank;
    target: Rank;
    progress: number;
    className?: string;
}

export const ProgressRange: React.FC<Props> = ({
    current,
    progress,
    target,
    className
}) => {
    return (
        <div className={clsx(css.progress, className)}>
            <p className={css.progress_title}>
                Your VIP Progress:
                <span>{progress}%</span>
            </p>
            <p className={css.progress_line}>
                <span style={{ width: (100 - progress) + "%" }} />
            </p>
            <div className={css.progress_range}>
                <p className={css.progress_range_item}>
                    <Image.Default src={current.medal} alt="current-medal" />
                    {current.name}
                </p>
                <p className={css.progress_range_item}>
                    <Image.Default src={target.medal} alt="current-medal" />
                    {target.name}
                </p>
            </div>
        </div>
    );
};