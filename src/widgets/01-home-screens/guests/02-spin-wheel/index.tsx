import React from "react";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Wheel } from "widgets/01-home-screens/_components/Wheel";
import WheelLightIcon from "widgets/01-home-screens/_icons/WheelLight";
import { useHomeActions } from "widgets/01-home-screens/lib";
import { Chips } from "shared/animation/Chips";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import css from "./spin-wheel.module.scss";

export const SpinWheel: React.FC = () => {
    const imageRef = React.useRef<HTMLImageElement>(null);
    const rootRef = React.useRef<HTMLDivElement>(null);
    const tween = React.useRef<gsap.core.Tween>(null);
    const [activeButton, setActiveButton] = React.useState(false);
    const { toggleSpinAnimation } = useHomeActions();

    useGSAP(() => {
        tween.current = gsap.to(imageRef.current, {
            ease: "none",
            rotate: 360,
            duration: 15,
            repeat: -1,
        });
    }, []);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: "#spin-wheel",
            start: "top top",
            end: "bottom+=50% bottom",
            pin: true,
            pinSpacing: true,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: "#spin-wheel",
                start: "top-=10% top",
                once: true,
            },
        })
            .to(
                "#spin-wheel-transform",
                {
                    scale: 1,
                    duration: 0.8,
                },
                "main"
            )
            .to(
                "#spin-wheel-bonus",
                {
                    opacity: 1,
                    visibility: "visible",
                    duration: 1,
                    delay: 0.9,
                    onStart: () => {
                        setActiveButton(true);
                    },
                },
                "main"
            )
            .to("#spin-wheel-bonus", {
                duration: 0.5,
            })
            .to(
                `.${css.spinWheel_bonus_title}`,
                {
                    scale: 0.4,
                    duration: 0.7,
                },
                "finish"
            )
            .to(
                "#spin-wheel-bonus",
                {
                    opacity: 0,
                    visibility: "hidden",
                    duration: 0.7,
                    onStart: () => {
                        rootRef.current?.classList.add("_animated");
                    },
                    onComplete() {
                        toggleSpinAnimation(true);
                    },
                },
                "finish"
            );
    }, []);

    const handleClick = () => {
        if (!activeButton) {
            return;
        }
        setActiveButton(false);

        const DURATION = 4.5; // seconds
        const RESUME_DELAY = 1.5; // seconds
        const MINIMAL_ROTATION = 360 * 10; // * count wheel revolution
        const CELL_DEGREE = 360 / 5; // / count cells (games)
        const RANDOM_CELL = Math.floor(Math.random() * 5); // Get random cell

        const rotation = MINIMAL_ROTATION + CELL_DEGREE * RANDOM_CELL;

        tween.current?.pause();

        gsap.timeline().to(imageRef.current, {
            rotate: rotation,
            duration: DURATION,
            ease: "power4.inOut",
            onStart() {
                rootRef.current?.classList.remove("_animated");
                gsap.set(".wheel-lights", { animationDuration: 0.5 });
                gsap.set(".wheel-lights-delayed", { animationDelay: 0.25 });
            },
            onComplete() {
                gsap.set(".wheel-lights", { animationDuration: 1 });
                gsap.set(".wheel-lights-delayed", { animationDelay: 0.5 });
            },
        });

        setTimeout(
            () => {
                tween.current?.progress((rotation % 360) / 360);
                tween.current?.resume();
                setActiveButton(true);
            },
            (DURATION + RESUME_DELAY) * 1000
        );
    };

    return (
        <section className={`${css.spinWheel_section} spin-wheel-section`}>
            <div className={css.spinWheel} id="spin-wheel" ref={rootRef}>
                <div className={css.spinWheel_figures}>
                    {/* <WheelLightIcon className={css.spinWheel_figures_light} /> */}
                    <Image.Default 
                        className={css.spinWheel_figures_light}
                        src="/img/figures/light.webp"
                        alt=""
                    />
                    <p className={clsx(css.spinWheel_figures_text, css._left)}>
                        <span>Spin</span> the
                        <br /> Wheel
                    </p>
                    <p className={clsx(css.spinWheel_figures_text, css._right)}>
                        Win <span>Free</span>
                        <br /> Spins!
                    </p>
                    <div className={css.spinWheel_sc_coin}>
                        <Image.Default src="/img/figures/sc-coin.png" alt="" />
                    </div>
                    <div className={css.spinWheel_sc_coin_sm}>
                        <Image.Default src="/img/figures/sc-coin.png" alt="" />
                    </div>
                    <div className={css.spinWheel_gc_coin}>
                        <Image.Default src="/img/figures/gc-coin.png" alt="" />
                    </div>
                    <div className={css.spinWheel_gc_coin_sm}>
                        <Image.Default src="/img/figures/gc-coin.png" alt="" />
                    </div>
                    <Chips className={css.spinWheel_chips_right} count={4} />
                    <Chips className={css.spinWheel_chips_left} count={3} />
                </div>
                <div className={css.spinWheel_wheel_container} id="spin-wheel-transform">
                    <Wheel
                        ref={imageRef}
                        className={css.spinWheel_wheel}
                        disabled={!activeButton}
                        onClickButton={handleClick}
                    />
                </div>
                <div className={css.spinWheel_bonus} id="spin-wheel-bonus">
                    <Title className={css.spinWheel_bonus_title} text="Welcome Bonus" />
                    <Image.Default
                        className={css.spinWheel_bonus_logo}
                        src="/img/logo.png"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};
