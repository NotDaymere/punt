import React from "react";
import { GameSlider } from "widgets/04-games-screens/_components";
import Image from "shared/ui/Image";
import css from "./Featured.module.scss";

export const Featured: React.FC = () => {
    return (
        <GameSlider
            data={[
                "/img/temp/featured-1.png",
                "/img/temp/featured-2.png",
                "/img/temp/featured-3.png",
                "/img/temp/featured-4.png",
                "/img/temp/featured-5.png",
                "/img/temp/featured-6.png",
                "/img/temp/featured-7.png",
            ]}
            renderCard={(item) => <Image.Default src={item} alt="" />}
            swiperOptions={{
                spaceBetween: 10,
            }}
            getKey={(item) => item}
            classNameHeader={css.header}
            classNameSlide={css.slide}
            title="Featured Games"
        />
    );
};
