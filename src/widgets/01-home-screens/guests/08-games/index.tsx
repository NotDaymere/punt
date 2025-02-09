import React from "react";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { GameTemplate } from "widgets/01-home-screens/_components/GameTemplate";
import { LiveDealer, NewGame, Slot } from "entities/games";
import { getTimeline } from "shared/animation/utils";
import { ArrowButton } from "shared/components/@Buttons/ArrowButton";
import { Slider } from "shared/components/Slider";
import css from "./games.module.scss";

export const Games: React.FC = () => {
    const rootRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const elements = gsap.utils.toArray(".slider-swiper") as HTMLElement[];
            for (const trigger of elements) {
                getTimeline(trigger, {
                    trigger,
                    onEnter() {
                        trigger.classList.add(css._animated);
                    },
                });
            }
        },
        { scope: rootRef }
    );

    return (
        <section className={css.games} ref={rootRef} id="games">
            <div className="container">
                {/* New Games */}
                <GameTemplate title="New Games" icons={1}>
                    <Slider
                        options={{
                            spaceBetween: 32,
                            slidesPerView: "auto",
                            allowTouchMove: false,
                            breakpoints: {
                                768: {
                                    spaceBetween: 80,
                                },
                            },
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
                        renderItem={(item) => <NewGame className={css.newGame} img={item} />}
                        className={css.games_swiper}
                        classNameSlide={css.games_swiper_newGame}
                    >
                        {({ Slider, isBegin, isEnd, prevSlide, nextSlide }) => (
                            <>
                                {Slider}
                                <div className={css.games_controls}>
                                    <ArrowButton
                                        disabled={isBegin}
                                        variant="prev"
                                        onClick={prevSlide}
                                    />
                                    <ArrowButton disabled={isEnd} onClick={nextSlide} />
                                </div>
                            </>
                        )}
                    </Slider>
                </GameTemplate>
                {/* Slots */}
                <GameTemplate title="Slots" icons={2}>
                    <Slider
                        options={{
                            spaceBetween: 21,
                            slidesPerView: "auto",
                            allowTouchMove: false,
                            breakpoints: {
                                768: {
                                    spaceBetween: 40,
                                },
                            },
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
                        renderItem={(item) => <Slot className={css.games_item} img={item} />}
                        className={css.games_swiper}
                        classNameSlide={css.games_swiper_slot}
                    >
                        {({ Slider, isBegin, isEnd, prevSlide, nextSlide }) => (
                            <>
                                {Slider}
                                <div className={css.games_controls}>
                                    <ArrowButton
                                        disabled={isBegin}
                                        variant="prev"
                                        onClick={prevSlide}
                                    />
                                    <ArrowButton disabled={isEnd} onClick={nextSlide} />
                                </div>
                            </>
                        )}
                    </Slider>
                </GameTemplate>
                {/* Live dealers */}
                <GameTemplate title="Live Dealer" icons={3}>
                    <Slider
                        options={{
                            spaceBetween: 15,
                            slidesPerView: "auto",
                            allowTouchMove: false,
                            breakpoints: {
                                768: {
                                    spaceBetween: 24,
                                },
                            },
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
                        renderItem={(item) => (
                            <LiveDealer
                                className={clsx(css.games_dealer, css.games_item)}
                                img={item}
                            />
                        )}
                        className={css.games_swiper}
                        classNameSlide={css.games_swiper_dealer}
                    >
                        {({ Slider, isBegin, isEnd, prevSlide, nextSlide }) => (
                            <>
                                {Slider}
                                <div className={css.games_controls}>
                                    <ArrowButton
                                        disabled={isBegin}
                                        variant="prev"
                                        onClick={prevSlide}
                                    />
                                    <ArrowButton disabled={isEnd} onClick={nextSlide} />
                                </div>
                            </>
                        )}
                    </Slider>
                </GameTemplate>
            </div>
        </section>
    );
};
