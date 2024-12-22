import React from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import WinClubsIcon from "widgets/01-home-screens/_icons/WinClubs.icon";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import css from "./real-wins.module.scss";

export const RealWins: React.FC = () => {
    const rootRef = React.useRef<HTMLDivElement>(null);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: rootRef.current,
            start: "top top",
            end: "bottom+=200% bottom",
            pin: true,
            pinSpacing: true
        });

        gsap.to(`.${css.wins_cards_item}`, {
            scrollTrigger: {
                trigger: rootRef.current,
                start: "top-=35% top",
                end: "bottom+=110% bottom",
                scrub: 1
            },
            y: 0
        })
    }, []);

    return (
        <section 
            className={css.wins} 
            ref={rootRef}
            id="real-wins"
        >
            <div className={css.wins_back}>
                <WinClubsIcon className={css.wins_back_svg} />
                <Title text="Real People." className={css.wins_back_title} />
                <Title text="Real Wins" className={css.wins_back_title} />
            </div>
            <div className="container">
                <div className={css.wins_content}>
                    <div className={css.wins_cards}>
                        <div className={css.wins_cards_item}>
                            <Image.Default src="/img/temp/videos/v-1.jpg" alt="" />
                        </div>
                        <div className={css.wins_cards_item}>
                            <Image.Default src="/img/temp/videos/v-2.jpg" alt="" />
                        </div>
                        <div className={css.wins_cards_item}>
                            <Image.Default src="/img/temp/videos/v-3.jpg" alt="" />
                        </div>
                        <div className={css.wins_cards_item}>
                            <Image.Default src="/img/temp/videos/v-4.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
