import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Wheel } from "widgets/01-home-screens/_components/Wheel";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import css from "./spin-wheel.module.scss";
import clsx from "clsx";
import LightIcon from "shared/icons/Light.icon";

export const SpinWheel: React.FC = () => {
    const imageRef = React.useRef<HTMLImageElement>(null);
    const rootRef = React.useRef<HTMLDivElement>(null);
    const tween = React.useRef<gsap.core.Tween>(null);
    const activeRotation = React.useRef(false);
    const [activeButton, setActiveButton] = React.useState(false);

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
            end: "bottom+=100% bottom",
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
                    }
                },
                "main"
            )
            .to("#spin-wheel-bonus", {
                duration: 3,
            })
            .to("#spin-wheel-bonus", {
                opacity: 0,
                visibility: "hidden",
                duration: 1,
                onStart: () => {
                    rootRef.current?.classList.add("_animated");
                },
            });
    }, []);

    const handleClick = () => {
        if(!activeButton) {
            return;
        }
        setActiveButton(false);

        const DURATION = 9; // seconds
        const RESUME_DELAY = 3; // seconds
        const MINIMAL_ROTATION = 360 * 8; // * count wheel revolution 
        const CELL_DEGREE = 360 / 5; // / count cells (games)
        const RANDOM_CELL = Math.floor(Math.random() * 5); // Get random cell

        const rotation = MINIMAL_ROTATION + (CELL_DEGREE * RANDOM_CELL);

        tween.current?.pause();

        gsap.timeline().to(imageRef.current, {
            rotate: rotation,
            duration: DURATION,
            ease: "power4.inOut",
            onStart: () => {
                rootRef.current?.classList.remove('_animated');
            }
        });
        
        setTimeout(() => {
            tween.current?.progress((rotation % 360) / 360);
            tween.current?.resume();
            setActiveButton(true);
        }, (DURATION + RESUME_DELAY) * 1000);
    };

    return (
        <section className={css.spinWheel} id="spin-wheel" ref={rootRef}>
            <div className={css.spinWheel_figures}>
                <LightIcon className={css.spinWheel_figures_light} />
                <p className={clsx(css.spinWheel_figures_text, css._left, !activeButton && css._hidden)}>
                    <span>Spin</span> the<br/> Wheel
                </p>
                <p className={clsx(css.spinWheel_figures_text, css._right, !activeButton && css._hidden)}>
                    Win <span>Free</span><br/> Spins!
                </p>
                <Image.Default 
                    className={css.spinWheel_sc_coin}
                    src="/img/figures/sc-coin.png"
                    alt="" 
                />
                <Image.Default 
                    className={css.spinWheel_sc_coin_sm}
                    src="/img/figures/sc-coin.png"
                    alt="" 
                />
                <Image.Default 
                    className={css.spinWheel_gc_coin}
                    src="/img/figures/gc-coin.png"
                    alt="" 
                />
                <Image.Default 
                    className={css.spinWheel_gc_coin_sm}
                    src="/img/figures/gc-coin.png"
                    alt="" 
                />
                <Image.Default 
                    className={css.spinWheel_chips_right}
                    src="/img/home/chips_right.png"
                    alt="" 
                />
                <Image.Default 
                    className={css.spinWheel_chips_left}
                    src="/img/home/chips_left.png"
                    alt="" 
                />
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
                <Image.Default className={css.spinWheel_bonus_logo} src="/img/logo.png" alt="" />
            </div>
        </section>
    );
};
