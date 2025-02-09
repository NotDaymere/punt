import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useHomeContext } from "widgets/01-home-screens/lib";
import { getTitleAnimationOptions } from "shared/animation/utils";
import { BigButton } from "shared/components/@Buttons/BigButton";
import { Title } from "shared/components/Title";
import StarIcon from "shared/icons/Star.icon";
import Image from "shared/ui/Image";
import { inactivityTimer } from "shared/utils/inactivityTimer";
import css from "./hero.module.scss";

export const Hero: React.FC = () => {
    const [activeSection, setActiveSection] = React.useState(true);
    const { spinAnimated } = useHomeContext();

    React.useEffect(() => {
        ScrollTrigger.create({
            trigger: "#hero",
            start: "start start",
            end: "bottom start",
            onEnter: () => setActiveSection(true),
            onEnterBack: () => setActiveSection(true),
            onLeave: () => setActiveSection(false),
        });

        gsap.timeline({ defaults: { delay: 0 } })
            .to(".hero-title .title-span-1 span", getTitleAnimationOptions(), "heroAnimation")
            .to(".hero-title .title-span-2 span", getTitleAnimationOptions(), "heroAnimation")
            .to(".hero-casino .title-span-1 span", getTitleAnimationOptions(), "heroAnimation+=50%")
            .to(".hero-casino .title-span-2 span", getTitleAnimationOptions(), "heroAnimation+=50%")
            .to(".hero-btn", {
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: "back.out(2)",
            }, "heroAnimation+=70%")
            .to(
                ".spin-wheel-section", 
                { 
                    opacity: 1, 
                    duration: 1
                }, 
                "heroAnimation+=95%"
            );
    }, []);

    React.useEffect(() => {
        if (activeSection && !spinAnimated) {
            const timer = inactivityTimer();

            timer.start(() => {
                document.getElementById("spin-wheel")?.scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                });
            }, 5000);

            return () => timer.destroy();
        }
    }, [activeSection, spinAnimated]);

    return (
        <div className={css.hero} id="hero">
            <div className="container">
                {/* UI / Figures */}
                <Image.Default
                    className={css.hero_figure_square}
                    src="/img/figures/square.svg"
                    alt=""
                />
                <Image.Default
                    className={css.hero_figure_clubs}
                    src="/img/figures/clubs.svg"
                    alt=""
                />
                <Image.Default
                    className={css.hero_figure_hearts}
                    src="/img/figures/hearts.svg"
                    alt=""
                />
                <StarIcon className={css.hero_figure_star_1} />
                <StarIcon className={css.hero_figure_star_2} />
                <StarIcon className={css.hero_figure_star_3} />
                <StarIcon className={css.hero_figure_star_4} />
                {/* Content */}
                <div className={css.hero_wrapper}>
                    <div className={css.hero_title_box}>
                        <Title
                            level={1}
                            className={`${css.hero_title} hero-title`}
                            text="#1 Free -To - Play"
                            animated="manual"
                        />
                        <Title
                            level={2}
                            className={`${css.hero_casino} hero-casino`}
                            text="Social Casino"
                            variant="yellow"
                            animated="manual"
                        />
                    </div>
                    <div className={css.hero_btn_box}>
                        <div className={`${css.hero_btn_animation} hero-btn`}>
                            <BigButton className={css.hero_btn}>Play for Free!</BigButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
