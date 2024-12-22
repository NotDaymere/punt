import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import css from "./checkouts.module.scss";
import InvertedClubsIcon from "widgets/01-home-screens/_icons/InvertedClubs.icon";

export const Checkouts: React.FC = () => {
    useGSAP(() => {
        gsap.to("#checkouts-title", {
            scrollTrigger: {
                trigger: "#checkouts",
                start: "top 90%",
                end: "top+=100% top",
                scrub: 1,
            },
            xPercent: -150
        })
    });

    return (
        <section className={css.checkouts} id="checkouts">
            <Image.Default 
                className={css.checkouts_hand}
                src="/img/temp/hand.webp"
                alt=""
            />
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