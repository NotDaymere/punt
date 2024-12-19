import React from "react";
import css from "./leader-item.module.scss";
import Image from "shared/ui/Image";

interface Props {
    position: string | number;
    img: string;
    username: string;
    wager: string | number;
    prize: string | number;
}

export const LeaderItem: React.FC<Props> = ({
    img,
    position,
    prize,
    username,
    wager
}) => {
    return (
        <div className={css.leader}>
            <div className={css.leader_col_pos}>
                <p className={css.leader_pos}>
                    <Image.Default src="/img/icons/position.svg" alt="" /> {position}th
                </p>
            </div>
            <div className={css.leader_col_user}>
                <p className={css.leader_user}>
                    <Image.Default src={img} alt="" /> {username}
                </p>
            </div>
            <div className={css.leader_col_wager}>
                <p className={css.leader_wager}>
                    <Image.Default src="/img/icons/gc.svg" alt="" /> {wager}
                </p>
            </div>
            <div className={css.leader_col_prize}>
                <p className={css.leader_prize}>
                    <Image.Default src="/img/icons/gc.svg" alt="" /> {prize}
                </p>
            </div>
        </div>
    );
};