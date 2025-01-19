import React from "react";
import { GameSlider } from "widgets/04-games-screens/_components";
import { Game, NewGame } from "entities/games";
import css from "./OtherGames.module.scss";

export const OtherGames: React.FC = () => {
    return (
        <div className={css.other}>
            <div className={css.other_item}>
                <GameSlider
                    data={[
                        "/img/temp/games-5.jpg",
                        "/img/temp/games-6.jpg",
                        "/img/temp/games-4.jpg",
                        "/img/temp/games-2.jpg",
                        "/img/temp/games-1.jpg",
                        "/img/temp/games-3.jpg",
                        "/img/temp/games-6.jpg",
                    ]}
                    swiperOptions={{
                        spaceBetween: 12,
                        breakpoints: {
                            768: {
                                spaceBetween: 24
                            }
                        }
                    }}
                    renderCard={(item) => <Game img={item} />}
                    getKey={(item, id) => item + id}
                    classNameSlide={css.slide}
                    title="Table Games"
                    icon="hearts"
                />
            </div>
            <div className={css.other_item}>
                <GameSlider
                    data={[
                        "/img/temp/games-5.jpg",
                        "/img/temp/games-6.jpg",
                        "/img/temp/games-1.jpg",
                        "/img/temp/games-3.jpg",
                        "/img/temp/games-4.jpg",
                        "/img/temp/games-2.jpg",
                        "/img/temp/games-6.jpg",
                    ]}
                    swiperOptions={{
                        spaceBetween: 12,
                        breakpoints: {
                            768: {
                                spaceBetween: 24
                            }
                        }
                    }}
                    renderCard={(item) => <Game img={item} />}
                    getKey={(item, id) => item + id}
                    classNameSlide={css.slide}
                    title="Blackjack"
                    icon="spades"
                />
            </div>
            <div className={css.other_item}>
                <GameSlider
                    data={[
                        "/img/temp/games-1.jpg",
                        "/img/temp/games-3.jpg",
                        "/img/temp/games-4.jpg",
                        "/img/temp/games-5.jpg",
                        "/img/temp/games-6.jpg",
                        "/img/temp/games-6.jpg",
                        "/img/temp/games-2.jpg",
                    ]}
                    swiperOptions={{
                        spaceBetween: 12,
                        breakpoints: {
                            768: {
                                spaceBetween: 24
                            }
                        }
                    }}
                    renderCard={(item) => <Game img={item} />}
                    getKey={(item, id) => item + id}
                    classNameSlide={css.slide}
                    title="Baccarat"
                    icon="diamonds"
                />
            </div>
            <div className={css.other_item}>
                <GameSlider
                    data={[
                        "/img/temp/games-5.jpg",
                        "/img/temp/games-2.jpg",
                        "/img/temp/games-6.jpg",
                        "/img/temp/games-6.jpg",
                        "/img/temp/games-4.jpg",
                        "/img/temp/games-1.jpg",
                        "/img/temp/games-3.jpg",
                    ]}
                    swiperOptions={{
                        spaceBetween: 12,
                        breakpoints: {
                            768: {
                                spaceBetween: 24
                            }
                        }
                    }}
                    renderCard={(item) => <Game img={item} />}
                    getKey={(item, id) => item + id}
                    classNameSlide={css.slide}
                    title="Roulette"
                    icon="clubs"
                />
            </div>
            <div className={css.other_item}>
                <GameSlider
                    data={[
                        "/img/temp/games-2.jpg",
                        "/img/temp/games-6.jpg",
                        "/img/temp/games-1.jpg",
                        "/img/temp/games-3.jpg",
                        "/img/temp/games-6.jpg",
                        "/img/temp/games-5.jpg",
                        "/img/temp/games-4.jpg",
                    ]}
                    swiperOptions={{
                        spaceBetween: 12,
                        breakpoints: {
                            768: {
                                spaceBetween: 24
                            }
                        }
                    }}
                    renderCard={(item) => <Game img={item} />}
                    getKey={(item, id) => item + id}
                    classNameSlide={css.slide}
                    title="Scratch Cards"
                    icon="hearts"
                />
            </div>
        </div>
    );
};
