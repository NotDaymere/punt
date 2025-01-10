import React from "react";
import { Featured, LiveDealers, NewGames, OtherGames, Slots } from "./sections";
import css from "./all-games.module.scss";

export const AllGames: React.FC = () => {
    return (
        <section className={css.games}>
            <div className={css.games_featured}>
                <Featured />
            </div>
            <div className={css.games_nls}>
                <div className={css.games_nls_inner}>
                    <NewGames />
                    <LiveDealers />
                    <Slots />
                </div>
            </div>
            <div className={css.games_other}>
                <OtherGames />
            </div>
        </section>
    );
};
