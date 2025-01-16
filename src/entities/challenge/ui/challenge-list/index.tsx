import React from "react";
import { ChallengeItem } from "../challenge-item";
import clsx from "clsx";
import { challangeMock } from "widgets/06-challenge-screens/mock";
import css from "./challenge-list.module.scss";

interface Props {
    data: (typeof challangeMock)[number][];
    claimed?: boolean;
    className?: string;
}

export const ChallengeList: React.FC<Props> = ({ data, className, claimed }) => {
    return (
        <ul className={clsx(css.list, className)}>
            {data.map((item) => (
                <li className={css.list_item} key={item.id}>
                    <ChallengeItem
                        img={item.img}
                        prize={item.prize}
                        text={item.text}
                        title={item.title}
                        claimedBy={claimed ? "Jbipolar92" : undefined}
                    />
                </li>
            ))}
        </ul>
    );
};
