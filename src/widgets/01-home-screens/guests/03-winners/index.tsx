import React from "react";
import { useGSAP } from "@gsap/react";
import { WinnersList } from "widgets/01-home-screens/_components/WinnersList";
import { getTimeline, getTitleAnimationOptions } from "shared/animation/utils";
import { Button } from "shared/components/@Buttons/Button";
import { Title } from "shared/components/Title";
import css from "./winners.module.scss";

export const Winners: React.FC = () => {
    const rootRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            getTimeline(rootRef.current)
                .to(
                    ".winners-box",
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                        ease: "back.out(2)",
                    },
                    0
                )
                .to(".title-span-1 span", getTitleAnimationOptions(), 0)
                .to(".title-span-2 span", getTitleAnimationOptions(), 0);
        },
        { scope: rootRef }
    );

    return (
        <section className={css.winners} ref={rootRef} id="winners">
            <div className="container">
                <div className={`${css.winners_box} winners-box`}>
                    <div className={css.winners_content}>
                        <video
                            className={css.winners_content_anim}
                            src="/img/home/media/stickers.mp4"
                            playsInline
                            autoPlay
                            loop
                            muted
                        />
                        <Title
                            className={css.winners_title}
                            text="Live Winners Feed"
                            animated="manual"
                        />
                        <Button className={css.winners_liveBtn} circle>
                            Live
                        </Button>
                        <div className={css.winners_marquee}>
                            <WinnersList className={css.winners_marquee_list} />
                            <WinnersList className={css.winners_marquee_list} />
                            <WinnersList className={css.winners_marquee_list} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
