import React from "react";
import css from "./UserInfo.module.scss";

interface Props {
    img: string;
    name: string;
    username?: string;
}

export const UserInfo: React.FC<Props> = ({ img, name, username }) => {
    return (
        <span className={css.user}>
            <span className={css.user_img}>
                <img src={img} alt="" />
            </span>
            <span className={css.user_col}>
                <span className={css.user_name}>{name}</span>
                {username && <span className={css.user_username}>{username}</span>}
            </span>
        </span>
    );
};
