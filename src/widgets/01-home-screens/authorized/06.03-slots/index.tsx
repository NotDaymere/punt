import React from "react";
import { Slider } from "shared/components/Slider";
import { Title } from "shared/components/Title";
import { ArrowButton } from "shared/components/@Buttons/ArrowButton";
import { Slot } from "entities/games";
import css from "./slots.module.scss";
import Image from "shared/ui/Image";

export const Slots: React.FC = () => {
    return (
        <Slider
            options={{
                spaceBetween: 12,
                slidesPerView: "auto",
                allowTouchMove: false,
                breakpoints: {
                    768: {
                        spaceBetween: 32
                    }
                }
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
                        <div className={css.games_header_title}>
                            <Image.Default 
                                className={css.games_header_bc}
                                src="/img/home/blue-clubs.svg" 
                                alt="" 
                            />
                            <Image.Default 
                                className={css.games_header_gc}
                                src="/img/home/green-clubs.svg" 
                                alt="" 
                            />
                            <Title className={css.games_title} text="Slots" />
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