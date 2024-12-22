import React from "react";
import { GameTemplate } from "widgets/01-home-screens/_components/GameTemplate";
import { ArrowButton } from "shared/components/@Buttons/ArrowButton";
import { LiveDealer, NewGame, Slot } from "entities/games";
import { Slider } from "shared/components/Slider";
import css from "./games.module.scss";

export const Games: React.FC = () => {
    return (
        <section className={css.games} id="games">
            <div className="container">
                {/* New Games */}
                <GameTemplate title="New Games" icons={1}>
                    <Slider
                        options={{
                            spaceBetween: 80,
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
                                    <ArrowButton  
                                        disabled={isEnd}
                                        onClick={nextSlide}
                                    />
                                </div>
                            </>
                        )}
                    </Slider>
                </GameTemplate>
                {/* Slots */}
                <GameTemplate title="Slots" icons={2}>
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
                                    <ArrowButton  
                                        disabled={isEnd}
                                        onClick={nextSlide}
                                    />
                                </div>
                            </>
                        )}
                    </Slider>
                </GameTemplate>
                {/* Live dealers */}
                <GameTemplate title="Live Dealer" icons={3}>
                    <Slider
                        options={{
                            spaceBetween: 24,
                            slidesPerView: "auto",
                            allowTouchMove: false
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
                        renderItem={(item) => <LiveDealer img={item} />}
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
                                    <ArrowButton  
                                        disabled={isEnd}
                                        onClick={nextSlide}
                                    />
                                </div>
                            </>
                        )}
                    </Slider>
                </GameTemplate>
            </div>
        </section>
    );
};