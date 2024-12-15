import React from "react";
import { LiveDealer } from "entities/games";
import { Button } from "shared/components/@Buttons/Button";
import { Title } from "shared/components/Title";
import LightIcon from "shared/icons/Light.icon";
import LightDotIcon from "shared/icons/LightDot.icon";
import css from "./trending-slots.module.scss";

const slots = [
    [
        "/img/temp/games-3.jpg",
        "/img/temp/games-3.jpg",
        "/img/temp/jackpot-g-1.jpg",
        "/img/temp/games-1.jpg",
        "/img/temp/games-2.jpg",
        "/img/temp/games-4.jpg",
    ],
    [
        "/img/temp/games-5.jpg",
        "/img/temp/games-6.jpg",
        "/img/temp/games-3.jpg",
        "/img/temp/games-1.jpg",
        "/img/temp/games-2.jpg",
        "/img/temp/games-5.jpg",
    ]
];

export const TrendingSlots: React.FC = () => {
    return (
        <section className={css.trending} id="trending-slots">
            <div className={css.trending_box}>
                <div className={css.trending_light}>
                    <LightIcon />
                </div>
                <div className="container">
                    <div className={css.trending_wrapper}>
                        {/* Slots left */}
                        <div className={`${css.trending_slots} ${css._left}`}>
                            {slots[0].map((slot, id) => (
                                <LiveDealer
                                    className={css.trending_slots_item}
                                    img={slot}
                                    key={slot + id}
                                />
                            ))}
                        </div>
                        {/* Slots right */}
                        <div className={`${css.trending_slots} ${css._right}`}>
                            {slots[1].map((slot, id) => (
                                <LiveDealer
                                    className={css.trending_slots_item}
                                    img={slot}
                                    key={slot + id}
                                />
                            ))}
                        </div>
                        {/* Wrapper */}
                        <div className={css.trending_wrapper_inner}>
                            <p className={css.trending_dots}>
                                <LightDotIcon />
                                <LightDotIcon />
                                <LightDotIcon />
                            </p>
                            <Title className={css.trending_title} text="Trending Slots" />
                            <p className={css.trending_text}>
                                Explore the hottest games everyone is talking about, handpicked just
                                for you. Dive into thrilling adventures and find your next big win
                                today!
                            </p>
                            <div className={css.trending_button_container}>
                                <Button className={css.trending_button} variant="green">
                                    View All Games
                                </Button>
                                <span className={css.trending_button_outlines} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
