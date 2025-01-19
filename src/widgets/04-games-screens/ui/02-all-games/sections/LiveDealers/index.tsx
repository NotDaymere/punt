import React from "react";
import { GameSlider } from "widgets/04-games-screens/_components";
import { LiveDealer } from "entities/games";
import css from "./LiveDealers.module.scss";

export const LiveDealers: React.FC = () => {
    return (
        <GameSlider
            data={[
                "/img/temp/dealer-1.jpg",
                "/img/temp/dealer-2.jpg",
                "/img/temp/dealer-3.jpg",
                "/img/temp/dealer-4.jpg",
                "/img/temp/dealer-5.jpg",
                "/img/temp/dealer-6.jpg",
            ]}
            swiperOptions={{
                spaceBetween: 10,
                breakpoints: {
                    768: {
                        spaceBetween: 24
                    }
                }
            }}
            renderCard={(item) => <LiveDealer className={css.dealer} img={item} />}
            getKey={(item) => item}
            classNameSlide={css.slide}
            title="Live Dealers"
        />
    );
};
