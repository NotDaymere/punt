import React from "react";
import { GameFilters } from "widgets/04-games-screens/_components";
import { useGamesNav } from "widgets/04-games-screens/lib";
import { Navigation } from "shared/components/Navigation";
import css from "./filters.module.scss";

export const Filters: React.FC = () => {
    const { navigation, changeActiveNav, navActive } = useGamesNav();

    return (
        <section className={css.hero}>
            <div className={css.hero_nav}>
                <div className="container">
                    <Navigation
                        className={css.hero_nav_list}
                        activeId={navActive.id}
                        onClick={changeActiveNav}
                        data={navigation}
                    />
                </div>
            </div>
            <div className={css.hero_wrapper}>
                <div className="container">
                    <GameFilters />
                </div>
            </div>
        </section>
    );
};
