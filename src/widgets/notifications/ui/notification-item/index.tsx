import React from "react";
import css from "./notification-item.module.scss";

interface Props {
    icon: string;
    title: string;
    createdAt: string;
    category: string;
    readed?: boolean;
}

export const NotificationItem: React.FC<Props> = ({
    category,
    createdAt,
    icon,
    title,
    readed,
}) => {
    return (
        <div className={css.notify}>
            <div className={css.notify_icon}>
                {icon}
            </div>
            <div className={css.notify_content}>
                <p className={css.notify_content_title}>
                    {title}
                </p>
                <ul className={css.notify_content_info}>
                    <li className={css.notify_content_info_item}>
                        {createdAt}
                    </li>
                    <li className={css.notify_content_info_item}>
                        {category}
                    </li>
                </ul>
            </div>
            {!readed && (
                <p className={css.notify_circle} />
            )}
        </div>
    );
};