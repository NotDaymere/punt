import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import InvertedClubsIcon from "widgets/01-home-screens/_icons/InvertedClubs.icon";
import { Framer } from "shared/components/Framer";
import { formatNumberWithZero } from "shared/utils/format";
import { FramerCore } from "shared/components/Framer/lib";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import css from "./checkouts.module.scss";

const coinFrames = Array.from({ length: 90 })
    .map((_, id) => `/img/coin-frames/frame_${formatNumberWithZero(id + 1)}.jpg`)

export const Checkouts: React.FC = () => {
    const framer = React.useRef<FramerCore | null>(null);

    useGSAP(() => {
        gsap.to("#checkouts-title", {
            scrollTrigger: {
                trigger: "#checkouts",
                start: "top 90%",
                end: "top+=130% top",
                scrub: 1,
            },
            xPercent: -150
        });

        gsap.to("#checkouts-mover", {
            scrollTrigger: {
                trigger: "#checkouts-title",
                start: "top 90%",
                end: "bottom top",
                scrub: 2,
                onUpdate(self) {
                },
            },
            xPercent: 100,
            onUpdate() {
                const fr = framer.current;
                if(fr) {
                    const current = Math.floor(fr.countFrames * this.ratio);
                    const frame = current % fr.countFrames;
                    fr.setFrame(frame);
                }
            }
        })
    });

    return (
        <section className={css.checkouts} id="checkouts">
            <Image.Default 
                className={css.checkouts_hand}
                src="/img/temp/hand.webp"
                alt=""
            />
            <div className={css.checkouts_coin}>
                <div className={css.checkouts_coin_mover} id="checkouts-mover">
                    <Framer 
                        ref={framer}
                        frames={coinFrames}
                        className={css.checkouts_coin_img}
                    />
                </div>
            </div>
            <div className={css.checkouts_container}>
                <div className={css.checkouts_title_container} id="checkouts-title">
                    <Title 
                        className={css.checkouts_title} 
                        text="Instant"
                    />
                    <Image.Default 
                        className={css.checkouts_icon}
                        src="/img/home/instant-checkouts-icon.svg" 
                        alt="" 
                    />
                    <Title 
                        className={css.checkouts_title} 
                        text="Checkouts" 
                    />
                </div>
                <div className={css.checkouts_content}>
                    <div className={css.checkouts_content_bg}>
                        <InvertedClubsIcon />
                    </div>
                    <h2 className={css.checkouts_content_title}>
                        Instant Payment
                    </h2>
                    <p className={css.checkouts_content_text}>
                        Dive into the excitement with our 1000+ games. 
                        Register now and receive FREE gold coins. 
                        America's Finest Social Casino. 
                    </p>
                </div>
            </div>
        </section>
    );
};