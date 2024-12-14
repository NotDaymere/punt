import React from "react";
import { NewGames } from "../06.01-new-games";
import { LiveDealers } from "../06.02-live-dealers";
import { Slots } from "../06.03-slots";
import css from "./games.module.scss";

export const Games: React.FC = () => {
    return (
        <div className={css.games}>
            <div className="container">
                <div className={css.games_type}>
                    <NewGames />
                </div>
                <div className={css.games_type}>
                    <LiveDealers />
                </div>
                <div className={css.games_type}>
                    <Slots />
                </div>
            </div>
        </div>
    );
};
