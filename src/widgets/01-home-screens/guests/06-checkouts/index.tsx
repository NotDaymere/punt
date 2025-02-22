import React from "react";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import CheckoutRays from "widgets/01-home-screens/_icons/CheckoutRays";
import { getTimeline, getTitleAnimationOptions } from "shared/animation/utils";
import { Framer } from "shared/components/Framer";
import { FramerCore } from "shared/components/Framer/lib";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import { TextSplitter } from "shared/ui/TextSplitter";
import { formatNumberWithZero } from "shared/utils/format";
import css from "./checkouts.module.scss";

const coinFrames = Array.from({ length: 90 }).map(
    (_, id) => `/img/coin-frames/frame_${formatNumberWithZero(id + 1)}.jpg`
);

export const Checkouts: React.FC = () => {
    const rootRef = React.useRef<HTMLDivElement>(null);
    const framer = React.useRef<FramerCore | null>(null);
    const [isAnimated, setAnimated] = React.useState(false);

    useGSAP(
        () => {
            gsap.to("#checkouts-title", {
                scrollTrigger: {
                    trigger: rootRef.current,
                    start: "top 90%",
                    end: "top+=130% top",
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
                xPercent: -150,
            });

            gsap.to("#checkouts-mover", {
                scrollTrigger: {
                    trigger: "#checkouts-title",
                    start: "top 90%",
                    end: "bottom top",
                    scrub: 2,
                    invalidateOnRefresh: true,
                },
                // xPercent: 100,
                onUpdate() {
                    const fr = framer.current;
                    if (fr) {
                        const current = Math.floor(fr.countFrames * this.ratio);
                        const frame = current % fr.countFrames;
                        fr.setFrame(frame);
                    }
                },
            });

            getTimeline(rootRef.current, {
                trigger: ".checkouts-content",
            })
                .to(".checkouts-content-title span", getTitleAnimationOptions(), "checkoutsTitle")
                .to(
                    ".checkouts-content-text span",
                    {
                        stagger: 0.05,
                        opacity: 1,
                        y: 0,
                    },
                    "checkoutsTitle+=80%"
                )
                .to(
                    ".checkouts-content-club img",
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                    },
                    "checkoutsTitle+=50%"
                );

            ScrollTrigger.create({
                trigger: ".checkouts-hand",
                start: "top 60%",
                once: true,
                invalidateOnRefresh: true,
                onEnter() {
                    setAnimated(true);
                },
            });
        },
        { scope: rootRef }
    );

    return (
        <section className={css.checkouts} ref={rootRef} id="checkouts">
            <div
                className={clsx("checkouts-hand", css.checkouts_hand, isAnimated && css._animated)}
            >
                <div className={css.checkouts_hand_container}>
                    <Image.Default
                        className={css.checkouts_hand_image}
                        src="/img/home/checkouts/hand.webp"
                        // loading="lazy"
                        alt=""
                    />
                    <div className={css.checkouts_hand_display}>
                        <Image.Default
                            src="/img/home/checkouts/checkouts-mark.svg"
                            loading="lazy"
                            alt=""
                        />
                    </div>
                    <CheckoutRays className={css.checkouts_hand_rays} />
                </div>
                <div className={css.checkouts_hand_card}>
                    <Image.Default src="/img/home/checkouts/card.webp" loading="lazy" alt="" />
                </div>
            </div>
            <div className={css.checkouts_coin}>
                <div className={css.checkouts_coin_mover} id="checkouts-mover">
                    <Framer ref={framer} frames={coinFrames} className={css.checkouts_coin_img} />
                </div>
            </div>
            <div className={css.checkouts_container}>
                <div className={css.checkouts_title_container} id="checkouts-title">
                    <Title className={css.checkouts_title} text="Instant" />
                    <Image.Default
                        className={css.checkouts_icon}
                        src="/img/home/instant-checkouts-icon.svg"
                        loading="lazy"
                        alt=""
                    />
                    <Title className={css.checkouts_title} text="Checkouts" />
                </div>
                <div className={`${css.checkouts_content} checkouts-content`}>
                    <div className={`${css.checkouts_content_bg} checkouts-content-club`}>
                        <Image.Default src="/img/home/inverted-clubs.webp" loading="lazy" alt="" />
                    </div>
                    <TextSplitter
                        className={`${css.checkouts_content_title} checkouts-content-title`}
                        tagName="h2"
                        text="Instant Payment"
                        splitter=""
                    />

                    <TextSplitter
                        className={`${css.checkouts_content_text} checkouts-content-text`}
                        tagName="p"
                        text="Dive into the excitement<br> with our 1000+ games.<br>
                            Register now and receive<br> FREE gold coins. 
                            America's<br> Finest Social Casino. "
                        splitter="<br>"
                    />
                </div>
            </div>
        </section>
    );
};
