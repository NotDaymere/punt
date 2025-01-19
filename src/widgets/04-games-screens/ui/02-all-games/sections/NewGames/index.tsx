import React from "react";
import { GameSlider } from "widgets/04-games-screens/_components";
import { NewGame } from "entities/games";
import css from "./NewGames.module.scss";

export const NewGames: React.FC = () => {
    return (
        <GameSlider 
            data={[
                "/img/temp/games-1.jpg",
                "/img/temp/games-2.jpg",
                "/img/temp/games-3.jpg",
                "/img/temp/games-4.jpg",
                "/img/temp/games-5.jpg",
                "/img/temp/games-6.jpg",
            ]}
            swiperOptions={{
                spaceBetween: 18,
                breakpoints: {
                    768: {
                        spaceBetween: 40
                    }
                }
            }}
            renderCard={(item) => <NewGame img={item} />}
            getKey={(item) => item}
            classNameSlide={css.slide}
            title="New Games"
            icon="suits"
        />
    );
};