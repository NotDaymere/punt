import React from "react";
import clsx from "clsx";
import { EventsItem } from "../events-item";
import { events } from "widgets/01-home-screens/mock-data";
import css from "./events-list.module.scss";

interface Props {
    className?: string;
}

export const EventsList: React.FC<Props> = ({ className }) => {
    return (
        <div className={clsx(css.events,  className)}>
            <ul className={css.events_title}>
                <li className={css.events_title_main}>Event Name</li>
                <li className={css.events_title_date}>Date & Time</li>
                <li className={css.events_title_type}>Type</li>
                <li className={css.events_title_prize}>Prize Pool</li>
                <li className={css.events_title_status}>Status</li>
                <li className={css.events_title_action}>Action</li>
            </ul>
            <div className={css.events_list}>
                {events.map((item) => (
                    <EventsItem
                        date={item.date}
                        img={item.img}
                        type={item.type}
                        name={item.name}
                        prizePool={item.prizePool}
                        status={item.status as any}
                        action={item.btn as any}
                        key={item.name + item.type + item.status}
                    />
                ))}
            </div>
        </div>
    );
};