import React from "react";
import { Grid } from 'swiper/modules';
import { Slider } from "shared/components/Slider";
import { Title } from "shared/components/Title";
import { ArrowButton } from "shared/components/@Buttons/ArrowButton";
import { Button } from "shared/components/@Buttons/Button";
import { challenges } from "widgets/01-home-screens/mock-data";
import { Challenge } from "entities/games";
import 'swiper/css/grid';
import css from "./challenges.module.scss";
import { MediaQuery } from "shared/ui/MediaQuery";

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
                        spaceBetween: 24,
                        modules: [Grid],
                        grid: {
                            rows: 2,
                            fill: "row"
                        },
                        breakpoints: {
                            768: {
                                grid: {
                                    rows: 1
                                }
                            }
                        }
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
                                <Title 
                                    className={css.challenges_title} 
                                    text="Challenges" 
                                />
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
                                <MediaQuery 
                                    size="min.md"
                                    children={
                                        <Button 
                                            component="a"
                                            href="/" 
                                            circle
                                        >
                                            View All
                                        </Button>
                                    }
                                />
                            </div>
                            {Slider}
                            <MediaQuery 
                                size="max.md"
                                children={
                                    <div className={css.challenges_footer}>
                                        <Button 
                                            component="a"
                                            href="/" 
                                            circle
                                        >
                                            View All
                                        </Button>
                                    </div>
                                }
                            />
                        </>
                    )}
                </Slider>
            </div>
        </div>
    );
};