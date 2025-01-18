import React from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Button } from "shared/components/@Buttons/Button";
import { WinnersList } from "widgets/01-home-screens/_components/WinnersList";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import css from "./winners.module.scss";

export const Winners: React.FC = () => {
    const rootRef = React.useRef<HTMLDivElement>(null);

    const setSticky = () => {
        const header = document.getElementById("header");
        const root = rootRef.current;
        if (header && root) {
            root.style.top = header.offsetHeight + "px";
        }
    };

    React.useEffect(() => {
        setSticky();
    }, []);

    React.useEffect(() => {
        window.addEventListener("resize", setSticky);
        return () => window.removeEventListener("resize", setSticky);
    });

    // useGSAP(() => {
    //     ScrollTrigger.create({
    //         trigger: rootRef.current,
    //         start: "top 90px",
    //         markers: false,
    //         onEnter: () => {
    //             if(!rootRef.current?.classList.contains('_fixed')) {
    //                 rootRef.current?.classList.add('_fixed')
    //             }
    //         },
    //         onLeaveBack: () => {
    //             if(rootRef.current?.classList.contains('_fixed')) {
    //                 rootRef.current?.classList.remove('_fixed')
    //             }
    //         },
    //     })
    // });

    return (
        <div className={css.winners} ref={rootRef}>
            <div className="container">
                <div className={css.winners_box}>
                    <span className={css.winners_garland} />
                    <span className={css.winners_garland} />
                    <span className={css.winners_garland} />
                    <span className={css.winners_garland} />
                    <div className={css.winners_content}>
                        <Image.Default
                            className={css.winners_content_animation}
                            src="/img/temp/winners-animation.png"
                            alt=""
                        />
                        <Button className={css.winners_content_live} circle>
                            Live
                        </Button>

                        <div className={css.winners_content_h}>
                            <Title className={css.winners_content_title} text="Live Winners Feed" />
                        </div>

                        <div className={css.winners_content_block}>
                            <div className={css.winners_marquee}>
                                <WinnersList className={css.winners_list} />
                                <WinnersList className={css.winners_list} />
                                <WinnersList className={css.winners_list} />
                            </div>
                            <Button className={css.winners_content_livePinned} circle>
                                Live
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
