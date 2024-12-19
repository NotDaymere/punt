import React from "react";
import clsx from "clsx";
import css from "./leader-list.module.scss";
import { leaders } from "widgets/01-home-screens/mock-data";
import { LeaderItem } from "../leader-item";

interface Props {
    className?: string;
}

export const LeaderList: React.FC<Props> = ({
    className
}) => {
    return (
        <div className={clsx(css.leader, className)}>
            <ul className={css.leader_title}>
                <li className={css.leader_title_pos}>#</li>
                <li className={css.leader_title_user}>Player</li>
                <li className={css.leader_title_wager}>Wager</li>
                <li className={css.leader_title_prize}>Prize</li>
            </ul>
            <div className={css.leader_list}>
                {leaders.map((leader) => (
                    <LeaderItem 
                        img={leader.img}
                        position={leader.position}
                        prize={leader.prize}
                        username={leader.username}
                        wager={leader.wager}
                        key={leader.position}
                    />
                ))}
            </div>
        </div>
    );
};