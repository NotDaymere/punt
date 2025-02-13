import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import WinClubsIcon from "widgets/01-home-screens/_icons/WinClubs.icon";
import { getTimeline, getTitleAnimationOptions } from "shared/animation/utils";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import css from "./real-wins.module.scss";

export const RealWins: React.FC = () => {
    const rootRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // Cards appear
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: rootRef.current,
                        start: "top top",
                        end: "top+=160% top",
                        pin: true,
                        pinSpacing: true,
                        scrub: 1,
                        invalidateOnRefresh: true
                    }
                })
                .to(".real-wins-card", {
                    y: 0,
                    duration: 1.5
                })
                .to(".real-wins-card", {
                    duration: 0.5
                })

            // Club and title animation
            getTimeline(rootRef.current, {
                start: "start 60%",
            })
                .to(
                    ".real-wins-club",
                    {
                        duration: 1,
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                    },
                    0
                )

                .to(".title-span-1 span", getTitleAnimationOptions(), 0)
                .to(".title-span-2 span", getTitleAnimationOptions(), 0);
        },
        { scope: rootRef }
    );

    return (
        <section className={css.wins} ref={rootRef} id="real-wins">
            <div className={css.wins_back}>
                <div className={css.wins_back_svg}>
                    {/* <WinClubsIcon  /> */}
                    <Image.Default 
                        className="real-wins-club"
                        src="/img/home/clubs-big.webp"
                        alt="" 
                    />
                </div>
                <Title text="Real People." className={css.wins_back_title} animated="manual" />
                <Title text="Real Wins" className={css.wins_back_title} animated="manual" />
            </div>
            <div className="container">
                <div className={css.wins_content}>
                    <div className={css.wins_cards}>
                        <div className={`${css.wins_cards_item} real-wins-card`}>
                            <div className={css.wins_cards_video}>
                                <Image.Default src="/img/temp/videos/v-1.webp" alt="" />
                            </div>
                        </div>
                        <div className={`${css.wins_cards_item} real-wins-card`}>
                            <div className={css.wins_cards_video}>
                                <Image.Default src="/img/temp/videos/v-2.webp" alt="" />
                            </div>
                        </div>
                        <div className={`${css.wins_cards_item} real-wins-card`}>
                            <div className={css.wins_cards_video}>
                                <Image.Default src="/img/temp/videos/v-3.webp" alt="" />
                            </div>
                        </div>
                        <div className={`${css.wins_cards_item} real-wins-card`}>
                            <div className={css.wins_cards_video}>
                                <Image.Default src="/img/temp/videos/v-4.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
