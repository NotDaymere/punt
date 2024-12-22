import React from "react";
import { Title } from "shared/components/Title";
import clsx from "clsx";
import Image from "shared/ui/Image";
import { CubeSlide, CubeSlider } from "shared/components/CubeSlider";
import { ArrowButton } from "shared/components/@Buttons/ArrowButton";
import { CubeSliderCore } from "shared/components/CubeSlider/lib/CubeSliderCore";
import { exclusives } from "widgets/01-home-screens/mock-data";
import LightIcon from "shared/icons/Light.icon";
import SpadeIcon from "shared/icons/Spade.icon";
import css from "./exclusives.module.scss";

export const Exclusives: React.FC = () => {
    const cubeControllerUp = React.useRef<CubeSliderCore>(null);
    const cubeControllerDown = React.useRef<CubeSliderCore>(null);

    const handlePrev = () => {
        if(cubeControllerUp.current) {
            cubeControllerUp.current.prevSlide();
        }
        if(cubeControllerDown.current) {
            cubeControllerDown.current.nextSlide();
        }
    }
    
    const handleNext = () => {
        if(cubeControllerUp.current) {
            cubeControllerUp.current.nextSlide();
        }
        if(cubeControllerDown.current) {
            cubeControllerDown.current.prevSlide();
        }
    }

    return (
        <section className={css.exclusives} id="exclusives">
            <div className="container">
                <div className={css.exclusives_wrapper}>
                    <div className={css.exclusives_title_container}>
                        <Image.Default 
                            className={css.exclusives_logo}
                            src="/img/logo.png"
                            alt=""
                        />
                        <Title 
                            className={css.exclusives_title}
                            text="Exclusives" 
                        />
                    </div>
                    <div className={css.exclusives_content}>
                        <div className={css.exclusives_sliders}>
                            <div className={css.exclusives_sliders_slider}>
                                <CubeSlider 
                                    className={css.exclusives_slider}
                                    classNameWrapper={css.exclusives_slider_left}
                                    onInitController={(controller) => cubeControllerUp.current = controller}
                                    onlyWrapper
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
                                            <Image.Default 
                                                className={css.slide_stars}
                                                src="/img/home/cube-stars.png"
                                                alt=""
                                            />
                                            <p className={css.slide_text}>
                                                {item[0]} {item[1] && <span>{item[1]}</span>}
                                            </p>
                                        </CubeSlide>
                                    ))}
                                </CubeSlider>
                            </div>
                            <div className={css.exclusives_sliders_slider}>
                                <CubeSlider 
                                    className={css.exclusives_slider}
                                    classNameWrapper={css.exclusives_slider_right}
                                    onInitController={(controller) => cubeControllerDown.current = controller}
                                    onlyWrapper
                                >
                                    {exclusives.right.map((item) => (
                                        <CubeSlide 
                                            className={clsx(css.slide, css._bg)}
                                            key={item}
                                        >
                                            <div className={css.slide_image}>
                                                <Image.Default 
                                                    className={css.slide_image_stars}
                                                    src="/img/home/exclusives-stars.png"
                                                    alt=""
                                                />
                                                <Image.Default
                                                    className={css.slide_image_game} 
                                                    src={item}
                                                    alt=""
                                                />
                                                <Image.Default 
                                                    className={css.slide_image_join}
                                                    src="/img/figures/join-game.svg"
                                                    alt="join the game"
                                                />
                                            </div>
                                        </CubeSlide>
                                    ))}
                                </CubeSlider>
                            </div>
                        </div>
                        <div className={css.exclusives_controls}>
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
        </section>
    );
};