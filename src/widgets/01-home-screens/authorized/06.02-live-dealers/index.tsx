import React from "react";
import { Slider } from "shared/components/Slider";
import { Title } from "shared/components/Title";
import { ArrowButton } from "shared/components/@Buttons/ArrowButton";
import { LiveDealer } from "entities/games";
import css from "./live-dealers.module.scss";

export const LiveDealers: React.FC = () => {
    return (
        <Slider
            options={{
                spaceBetween: 10,
                slidesPerView: "auto",
                allowTouchMove: false,
                breakpoints: {
                    768: {
                        spaceBetween: 24
                    }
                }
            }}
            data={[
                "/img/temp/dealer-1.jpg",
                "/img/temp/dealer-2.jpg",
                "/img/temp/dealer-3.jpg",
                "/img/temp/dealer-4.jpg",
                "/img/temp/dealer-5.jpg",
                "/img/temp/dealer-6.jpg",
            ]}
            getKey={(item) => item}
            renderItem={(item) => <LiveDealer className={css.dealer} img={item} />}
            className={css.games_swiper}
            classNameSlide={css.games_swiper_slide}
        >
            {({ Slider, isBegin, isEnd, prevSlide, nextSlide }) => (
                <div className={css.games}>
                    <div className={css.games_header}>
                        <Title className={css.games_title} text="Live Dealer" />
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