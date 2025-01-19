import React from "react";
import { useGamesNav } from "widgets/04-games-screens/lib";
import { CATEGORIES_ENUM } from "widgets/04-games-screens/lib/games-navigation";
import { Game, LiveDealer, NewGame, Slot } from "entities/games";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import css from "./category-games.module.scss";

const images = Array.from({ length: 32 }).map(() => {
    const idx = Math.floor(Math.random() * 6) + 1;
    return `/img/temp/games-${idx}.jpg`;
});

export const CategoryGames: React.FC = () => {
    const { navActive } = useGamesNav();

    const renderCard = React.useCallback((img: string) => {
        if (navActive.id === CATEGORIES_ENUM.SLOT_GAMES) {
            return <Slot className={css.slot} img={img} />;
        }
        if (navActive.id === CATEGORIES_ENUM.LIVE_DEALERS) {
            return <LiveDealer className={css.leaveDealer} img={img} />;
        }
        if (navActive.id === CATEGORIES_ENUM.NEW_REALESES) {
            return <NewGame className={css.newGame} img={img} />;
        }
    
        return <Game className={css.game} img={img} />;
    }, [navActive.id])

    return (
        <div className={css.games}>
            <div className="container">
                <div className={css.games_title_wrapper}>
                    <Title.V2 className={css.games_title}>{navActive.name}</Title.V2>
                    <Image.Default
                        className={css.games_label}
                        src="/img/labels/best-games.svg"
                        alt=""
                    />
                </div>
                <ul className={css.games_list} data-type={navActive.id}>
                    {images.map((item, idx) => (
                        <li className={css.games_list_item} key={idx}>
                            {renderCard(item)}
                        </li>
                    ))}
                </ul>

                <p className={css.games_count}>
                    Displaying 30 of 30 games
                </p>
            </div>
        </div>
    );
};
