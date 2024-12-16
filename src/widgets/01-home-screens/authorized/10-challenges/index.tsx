import React from "react";
import { Slider } from "shared/components/Slider";
import { Title } from "shared/components/Title";
import { ArrowButton } from "shared/components/@Buttons/ArrowButton";
import { Button } from "shared/components/@Buttons/Button";
import { challenges } from "widgets/01-home-screens/mock-data";
import { Challenge } from "entities/games";
import css from "./challenges.module.scss";

export const Challenges: React.FC = () => {
    return (
        <div className={css.challenges}>
            <div className="container">
                <Slider
                    data={challenges}
                    getKey={(item) => item.id}
                    options={{
                        slidesPerView: "auto",
                        allowTouchMove: false,
                        spaceBetween: 24
                    }}
                    renderItem={(item) => (
                        <Challenge 
                            img={item.img}
                            name={item.name}
                            content={item.description}
                            prize={item.prize}
                        />
                    )}
                    className={css.challenges_swiper}
                    classNameSlide={css.challenges_swiper_slide}
                >
                    {({ isBegin, isEnd, prevSlide, nextSlide, Slider }) => (
                        <>
                            <div className={css.challenges_header}>
                                <Title text="Challenges" />
                                <div className={css.challenges_header_arrows}>
                                    <ArrowButton 
                                        disabled={isBegin}
                                        onClick={prevSlide}
                                        variant="prev" 
                                    />
                                    <ArrowButton 
                                        disabled={isEnd}
                                        onClick={nextSlide}
                                    />
                                </div>
                                <Button 
                                    component="a"
                                    href="/" 
                                    circle
                                >
                                    View All
                                </Button>
                            </div>
                            {Slider}
                        </>
                    )}
                </Slider>
            </div>
        </div>
    );
};