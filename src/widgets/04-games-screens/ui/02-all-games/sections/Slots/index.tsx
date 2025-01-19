import React from "react";
import { GameSlider } from "widgets/04-games-screens/_components";
import { Slot } from "entities/games";
import css from "./Slots.module.scss";

export const Slots: React.FC = () => {
    return (
        <GameSlider
            data={[
                "/img/temp/slot-1.jpg",
                "/img/temp/slot-2.jpg",
                "/img/temp/slot-3.jpg",
                "/img/temp/slot-4.jpg",
                "/img/temp/slot-5.jpg",
                "/img/temp/slot-6.jpg",
            ]}
            swiperOptions={{
                spaceBetween: 10,
                breakpoints: {
                    768: {
                        spaceBetween: 24
                    }
                }
            }}
            renderCard={(item) => <Slot img={item} />}
            getKey={(item) => item}
            classNameSlide={css.slide}
            title="Slots"
            icon="chips"
        />
    );
};
