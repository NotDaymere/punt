import React from "react";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { exclusives } from "widgets/01-home-screens/mock-data";
import { getTimeline } from "shared/animation/utils";
import { ArrowButton } from "shared/components/@Buttons/ArrowButton";
import { CubeSlide, CubeSlider } from "shared/components/CubeSlider";
import { CubeSliderCore } from "shared/components/CubeSlider/lib/CubeSliderCore";
import { PuntImageText } from "shared/components/PuntImageText";
import { Title } from "shared/components/Title";
import { useViewport } from "shared/hooks/use-viewport";
import LightIcon from "shared/icons/Light.icon";
import SpadeIcon from "shared/icons/Spade.icon";
import Image from "shared/ui/Image";
import css from "./exclusives.module.scss";
import { VideoHover } from "shared/components/VideoHover";

export const Exclusives: React.FC = () => {
    const rootRef = React.useRef<HTMLDivElement>(null);
    const timeline = React.useRef<gsap.core.Timeline>(null);
    const cubeControllerUp = React.useRef<CubeSliderCore>(null);
    const cubeControllerDown = React.useRef<CubeSliderCore>(null);
    const { screenWidth } = useViewport(1000);

    const handlePrev = () => {
        if (cubeControllerUp.current) {
            cubeControllerUp.current.slidePrev();
        }
        if (cubeControllerDown.current) {
            cubeControllerDown.current.slideNext();
        }
    };

    const handleNext = () => {
        if (cubeControllerUp.current) {
            cubeControllerUp.current.slideNext();
        }
        if (cubeControllerDown.current) {
            cubeControllerDown.current.slidePrev();
        }
    };

    useGSAP(
        () => {
            const textAnimation = {
                ease: "back.out(3)",
                duration: 1,
                scale: 1,
                opacity: 1,
                stagger: 0.05,
            }
            getTimeline(rootRef.current)
                .to(
                    ".exclusives-sliders, .exclusives-controls",
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                        x: 0,
                        y: 0,
                    },
                    0
                )
                .to(
                    ".exclusives-logo span, .title-span-1 span",
                    textAnimation,
                    0
                )
                .to(
                    ".title-span-2 span",
                    {
                        ...textAnimation,
                        delay: 0.2,
                    },
                    0
                )
        },
        { scope: rootRef }
    );

    return (
        <section className={css.exclusives} id="exclusives" ref={rootRef}>
            <div className="container">
                <div className={css.exclusives_wrapper}>
                    {/* Title */}
                    <div className={css.exclusives_title_container}>
                        <PuntImageText className={`${css.exclusives_logo} exclusives-logo`} />
                        <Title
                            className={css.exclusives_title}
                            text="Exclusives"
                            animated="manual"
                        />
                    </div>
                    <div className={css.exclusives_content}>
                        <div className={`${css.exclusives_sliders} exclusives-sliders`}>
                            {/* Slider left */}
                            <div className={css.exclusives_sliders_slider}>
                                <CubeSlider
                                    className={css.exclusives_slider}
                                    onInitController={(controller) =>
                                        (cubeControllerUp.current = controller)
                                    }
                                    direction={screenWidth > 768 ? "vertical" : "horizontal"}
                                >
                                    {exclusives.left.map((item) => (
                                        <CubeSlide 
                                            className={css.slide}     
                                            key={item.join()}
                                        >
                                            <ul className={css.slide_marquee}>
                                                <li className={css.slide_marquee_item}>
                                                    Punt Exclusives <SpadeIcon />
                                                    Punt Exclusives <SpadeIcon />
                                                </li>
                                                <li className={css.slide_marquee_item}>
                                                    Punt Exclusives <SpadeIcon />
                                                    Punt Exclusives <SpadeIcon />
                                                </li>
                                                <li className={css.slide_marquee_item}>
                                                    Punt Exclusives <SpadeIcon />
                                                    Punt Exclusives <SpadeIcon />
                                                </li>
                                            </ul>
                                            <LightIcon className={css.slide_light} />
                                            <div className={css.slide_stars}>
                                                <Image.Default 
                                                    src="/img/home/exc-star.png"
                                                    alt=""
                                                />
                                                <Image.Default 
                                                    src="/img/home/exc-star.png"
                                                    alt=""
                                                />
                                                <Image.Default 
                                                    src="/img/home/exc-star-orange.png"
                                                    alt=""
                                                />

                                            </div>
                                            {/* <Image.Default
                                                className={css.slide_stars}
                                                src="/img/home/cube-stars.png"
                                                loading="lazy"
                                                alt=""
                                            /> */}
                                            <p className={css.slide_text}>
                                                {item[0]} {item[1] && <span>{item[1]}</span>}
                                            </p>
                                        </CubeSlide>
                                    ))}
                                </CubeSlider>
                            </div>
                            {/* Slider right */}
                            <div className={css.exclusives_sliders_slider}>
                                <CubeSlider
                                    className={css.exclusives_slider}
                                    onInitController={(controller) =>
                                        (cubeControllerDown.current = controller)
                                    }
                                    direction={screenWidth > 768 ? "vertical" : "horizontal"}
                                >
                                    {exclusives.right.map((item) => (
                                        <CubeSlide className={clsx(css.slide, css._bg)} key={item}>
                                            <div className={css.slide_image}>
                                                <div className={css.slide_image_stars}>
                                                    <Image.Default 
                                                        src="/img/home/exc-star.png"
                                                        alt=""
                                                    />
                                                    <Image.Default 
                                                        src="/img/home/exc-star.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <VideoHover 
                                                    src={item}
                                                    className={css.slide_image_game}
                                                />
                                                <div className={css.slide_image_cursor}>
                                                    <Image.Default
                                                        src="/img/home/exc-cursor.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <Image.Default
                                                    className={css.slide_image_join}
                                                    src="/img/figures/join-game.svg"
                                                    alt="join the game"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </CubeSlide>
                                    ))}
                                </CubeSlider>
                            </div>
                        </div>
                        {/* Controls */}
                        <div className={`${css.exclusives_controls}`}>
                            <div className={`${css.exclusives_controls_inner} exclusives-controls`}>
                                <ArrowButton
                                    className={css.exclusives_controls_button}
                                    onClick={handlePrev}
                                    variant="prev"
                                />
                                <ArrowButton
                                    className={css.exclusives_controls_button}
                                    onClick={handleNext}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
