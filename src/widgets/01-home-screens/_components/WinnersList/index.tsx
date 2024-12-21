import React from "react";
import clsx from "clsx";
import Image from "shared/ui/Image";
import { winners } from "widgets/01-home-screens/mock-data";
import css from "./WinnersList.module.scss";

interface Props {
    className?: string;
}

export const WinnersList: React.FC<Props> = ({ className }) => {
    return (
        <ul className={clsx(css.winners_list, className)}>
            {winners.map((item) => (
                <li className={css.winners_list_item} key={item.id}>
                    <div className={css.winners_list_img}>
                        <Image.Default src={item.img} alt="" />
                    </div>
                    <div className={css.winners_list_col}>
                        <p className={css.winners_list_name}>{item.username}</p>
                        <p className={css.winners_list_text}>{item.text}</p>
                    </div>
                    <div className={css.winners_list_prize}>
                        <p className={css.winners_list_total}>Total won</p>
                        <p className={css.winners_list_amount}>{item.win_amount}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};