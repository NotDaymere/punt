import React from "react";
import { Title } from "shared/components/Title";
import css from "./events.module.scss";
import { Button } from "shared/components/@Buttons/Button";
import { EventsList } from "entities/events/ui/events-list";

export const Events: React.FC = () => {
    return (
        <section 
            className={css.events} 
            id="events"
        >
            <div className="container">
                <header className={css.events_header}>
                    <Title text="Events" />
                    <Button>Upcoming</Button>
                </header>
                <EventsList 
                    className={css.events_list}
                />
            </div>
        </section>
    );
};