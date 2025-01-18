import React from "react";
import { Title } from "shared/components/Title";
import { Button } from "shared/components/@Buttons/Button";
import { EventsList } from "entities/events/ui/events-list";
import css from "./events.module.scss";

export const Events: React.FC = () => {
    return (
        <section 
            className={css.events} 
            id="events"
        >
            <div className="container">
                <header className={css.events_header}>
                    <Title className={css.event_title} text="Events" />
                    <Button>Upcoming</Button>
                </header>
                <EventsList 
                    className={css.events_list}
                />
            </div>
        </section>
    );
};