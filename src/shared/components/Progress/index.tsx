import React from "react";
import css from "./Progress.module.scss";

interface Props {
    medal: string;
    rank: string;
    progress: number;
}

export const Progress: React.FC<Props> = ({
    medal,
    progress,
    rank
}) => {
    return (
        <div className={css.progress}>
            <div className={css.progress_img}>
                <img src={medal} alt="medal" />
            </div>
            <div className={css.progress_main}>
                <p className={css.progress_rank}>
                    {rank} <span>{progress}%</span>
                </p>
                <p className={css.progress_line}>
                    <span style={{ width: `${100 - progress}%` }} />
                </p>
            </div>
        </div>
    );
};