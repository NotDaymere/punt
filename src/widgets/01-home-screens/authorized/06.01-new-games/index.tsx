import React from "react";
import { Slider } from "shared/components/Slider";
import { Title } from "shared/components/Title";
import { ArrowButton } from "shared/components/@Buttons/ArrowButton";
import { NewGame } from "entities/games";
import css from "./new-games.module.scss";

export const NewGames: React.FC = () => {
    return (
        <Slider
            options={{
                spaceBetween: 40,
                slidesPerView: "auto",
                allowTouchMove: false
            }}
            data={[
                "/img/temp/games-1.jpg",
                "/img/temp/games-2.jpg",
                "/img/temp/games-3.jpg",
                "/img/temp/games-4.jpg",
                "/img/temp/games-5.jpg",
                "/img/temp/games-6.jpg",
            ]}
            getKey={(item) => item}
            renderItem={(item) => <NewGame img={item} />}
            className={css.games_swiper}
            classNameSlide={css.games_swiper_slide}
        >
            {({ Slider, isBegin, isEnd, prevSlide, nextSlide }) => (
                <div className={css.games}>
                    <div className={css.games_header}>
                        <Title text="New Games" />
                        <div className={css.games_header_right}>
                            <ArrowButton  
                                disabled={isBegin}
                                variant="prev"
                                onClick={prevSlide}
                            />
                            <ArrowButton  
                                disabled={isEnd}
                                onClick={nextSlide}
                            />
                        </div>
                    </div>
                    {Slider}
                </div>
            )}
        </Slider>
    );
};