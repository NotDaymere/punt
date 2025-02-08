import React from "react";
import { useGSAP } from "@gsap/react";
import WheelLightIcon from "widgets/01-home-screens/_icons/WheelLight";
import { featuredGames } from "widgets/01-home-screens/mock-data";
import { getTimeline, getTitleAnimationOptions } from "shared/animation/utils";
import { BigButton } from "shared/components/@Buttons/BigButton";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import css from "./featured.module.scss";

export const Featured: React.FC = () => {
    const rootRef = React.useRef<HTMLDivElement>(null);
    const [isAnimated, setAnimated] = React.useState(false);

    useGSAP(
        () => {
            getTimeline(rootRef.current, {
                trigger: ".featured-content-inner",
                onEnter() {
                    setAnimated(true);
                },
            })
                .to(".title-span-1 span", getTitleAnimationOptions(), "featured")
                .to(".title-span-2 span", getTitleAnimationOptions(), "featured")
                .to(
                    ".featured-content-text",
                    {
                        duration: 1,
                        opacity: 1,
                        y: 0,
                    },
                    "featured+=60%"
                )
                .to(
                    ".featured-content-btn",
                    {
                        duration: 1,
                        ease: "back.out(3)",
                        scale: 1,
                    },
                    "featured+=75%"
                );
        },
        { scope: rootRef }
    );

    return (
        <section className={css.featured} ref={rootRef} id="featured">
            <div className="container">
                <div className={css.featured_wrapper}>
                    <WheelLightIcon className={css.featured_light} />
                    <div className={css.featured_games}>
                        {featuredGames.map((item, id) => {
                            const offset = id - (featuredGames.length - 1) / 2;

                            return (
                                <div className={css.featured_games_item} key={item}>
                                    <Image.Default
                                        className="featured-game"
                                        style={{
                                            transform: `rotate(${offset * 6}deg) translate(${offset * 100}%, ${isAnimated ? -70 : 70}%) rotate(${offset * 6}deg)`,
                                            opacity: isAnimated ? 1 : 0,
                                        }}
                                        src={item}
                                        alt=""
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className={`${css.featured_content} featured-content`}>
                        <div className={`${css.featured_content_inner} featured-content-inner`}>
                            <Title
                                className={`${css.featured_content_title} featured-content-title`}
                                text="Featured Games"
                                animated="manual"
                            />
                            <p className={`${css.featured_content_text} featured-content-text`}>
                                Explore the hottest games everyone is talking about, handpicked just
                                for you. Dive into thrilling adventures and find your next big win
                                today!
                            </p>
                            <div className={css.featured_btn_box}>
                                <div
                                    className={`${css.featured_btn_animation} featured-content-btn`}
                                >
                                    <BigButton className={css.featured_btn}>
                                        View All Games
                                    </BigButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
