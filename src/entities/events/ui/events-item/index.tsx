import React from "react";
import css from "./events-item.module.scss";
import clsx from "clsx";
import Image from "shared/ui/Image";
import dayjs from "dayjs";
import { Button } from "shared/components/@Buttons/Button";

interface Props {
    img: string;
    date: string;
    type: string;
    name: string;
    prizePool?: string;
    status: 'upcoming';
    action: 'join' | 'learn';

    className?: string;
}

export const EventsItem: React.FC<Props> = ({
    action,
    date,
    img,
    status,
    type,
    name,
    prizePool,
    className,
}) => {
    return (
        <div className={clsx(css.event, className)}>
            <div className={css.event_col_main}>
                <p className={css.event_main}>
                    <Image.Default src={img} alt="" /> {name}
                </p>
            </div>
            <div className={css.event_col_date}>
                <p 
                    className={css.event_date}
                    dangerouslySetInnerHTML={{
                        __html: dayjs(date).format('MMM DD, YYYY, [<span>]h A[</span>]')
                    }}
                />
            </div>
            <div className={css.event_col_type}>
                <p className={css.event_type}>{type}</p>
            </div>
            <div className={css.event_col_prize}>
                <p className={css.event_prize}>
                    {!prizePool ? "-" : (
                        <>
                            <Image.Default src="/img/icons/gc.svg" alt="" /> {prizePool}
                        </>
                    )}
                </p>
            </div>
            <div className={css.event_col_status}>
                <p className={clsx(css.event_status, css['_' + status.toLowerCase()])}>
                    {status}
                </p>
            </div>
            <div className={css.event_col_action}>
                {action === "join" && (
                    <Button variant="green" className={css.event_action} circle>
                        Join Now
                    </Button>
                )}
                {action === "learn" && (
                    <Button className={css.event_action} circle>
                        Learn More
                    </Button>
                )}
            </div>
        </div>
    );
};