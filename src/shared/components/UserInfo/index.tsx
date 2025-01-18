import React from "react";
import clsx from "clsx";
import css from "./UserInfo.module.scss";

interface Props {
    img: string;
    name: string;
    username?: string;
    className?: string;
}

export const UserInfo: React.FC<Props> = ({ img, name, username, className }) => {
    return (
        <span className={clsx(css.user, className)}>
            <span className={css.user_img} data-img>
                <img src={img} alt="" />
            </span>
            <span className={css.user_col} data-info>
                <span className={css.user_name}>{name}</span>
                {username && <span className={css.user_username}>{username}</span>}
            </span>
        </span>
    );
};
