import React from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useHomeContext } from "widgets/01-home-screens/lib";
import { Button } from "shared/components/@Buttons/Button";
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
                        <Title level={1} className={css.hero_title} text="#1 Free -To - Play" />
                        <Title
                            level={2}
                            className={css.hero_casino}
                            text="Social Casino"
                            variant="yellow"
                        />
                    </div>
                    <div className={css.hero_button_container}>
                        <Button className={css.hero_button} variant="green">
                            Play for Free!
                        </Button>
                        <span className={css.hero_button_outlines} />
                        <Image.Default
                            className={css.hero_button_smile}
                            src="/img/home/hearts-smile.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
