import React from "react";
import { Slider } from "shared/components/Slider";
import { Title } from "shared/components/Title";
import { ArrowButton } from "shared/components/@Buttons/ArrowButton";
import { Slot } from "entities/games";
import css from "./slots.module.scss";

export const Slots: React.FC = () => {
    return (
        <Slider
            options={{
                spaceBetween: 32,
                slidesPerView: "auto",
                allowTouchMove: false
            }}
            data={[
                "/img/temp/slot-1.jpg",
                "/img/temp/slot-2.jpg",
                "/img/temp/slot-3.jpg",
                "/img/temp/slot-4.jpg",
                "/img/temp/slot-5.jpg",
                "/img/temp/slot-6.jpg",
            ]}
            getKey={(item) => item}
            renderItem={(item) => <Slot img={item} />}
            className={css.games_swiper}
            classNameSlide={css.games_swiper_slide}
        >
            {({ Slider, isBegin, isEnd, prevSlide, nextSlide }) => (
                <div className={css.games}>
                    <div className={css.games_header}>
                        <Title text="Slots" />
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