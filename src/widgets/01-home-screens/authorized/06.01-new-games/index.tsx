import React from "react";
import { Slider } from "shared/components/Slider";
import { Title } from "shared/components/Title";
import { ArrowButton } from "shared/components/@Buttons/ArrowButton";
import { NewGame } from "entities/games";
import css from "./new-games.module.scss";
import Image from "shared/ui/Image";
import StarIcon from "shared/icons/Star.icon";

export const NewGames: React.FC = () => {
    return (
        <Slider
            options={{
                spaceBetween: 20,
                slidesPerView: "auto",
                allowTouchMove: false,
                breakpoints: {
                    768: {
                        spaceBetween: 40
                    }
                }
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
                        <StarIcon className={css.games_header_star} />
                        <StarIcon className={`${css.games_header_star} ${css._small}`} />
                        <div className={css.games_header_title}>
                            <Title className={css.games_title} text="New Games" />
                            <Image.Default 
                                className={css.games_header_clubs}
                                src="/img/home/clubs.svg"
                                alt=""
                            />
                            <Image.Default 
                                className={css.games_header_hearts}
                                src="/img/home/hearts.svg"
                                alt=""
                            />
                        </div>
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