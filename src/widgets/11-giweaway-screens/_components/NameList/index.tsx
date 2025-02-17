import React from "react";
import css from "./NameList.module.scss";
import clsx from "clsx";

interface Props {
    title: string;
    data: string[];
    className?: string;
}

export const NameList: React.FC<Props> = ({ title, className, data }) => {
    return (
        <div className={clsx(css.nl, className)}>
            <p className={css.nl_title}>
                {title}
            </p>
            <ul className={css.nl_list}>
                {data.map((item) => (
                    <li className={css.nl_list_item} key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};