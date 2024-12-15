import React from "react";
import { ArrowButton } from "shared/components/@Buttons/ArrowButton";
import { Button } from "shared/components/@Buttons/Button";
import { Slider } from "shared/components/Slider";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import css from "./featured.module.scss";
import StarIcon from "shared/icons/Star.icon";

export const Featured: React.FC = () => {
    return (
        <div className={css.featured}>
            <div className="container">
                <Image.Default
                    className={css.featured_light} 
                    src="/img/home/featured-light.png"
                    alt=""
                />
                <Slider
                    data={[
                        "/img/temp/featured-1.png",
                        "/img/temp/featured-2.png",
                        "/img/temp/featured-3.png",
                        "/img/temp/featured-4.png",
                        "/img/temp/featured-5.png",
                        "/img/temp/featured-6.png",
                        "/img/temp/featured-7.png",
                    ]}
                    options={{
                        slidesPerView: "auto",
                        allowTouchMove: false,
                        spaceBetween: 10,
                    }}
                    renderItem={(item) => (
                        <Image.Default 
                            className={css.featured_swiper_img} 
                            src={item} 
                            alt="" 
                        />
                    )}
                    getKey={(item) => item}
                    className={css.featured_swiper}
                    classNameSlide={css.featured_swiper_item}
                >
                    {({ Slider, isBegin, isEnd, prevSlide, nextSlide }) => (
                        <>
                            <div className={css.featured_header}>
                                <div className={css.featured_header_title}>
                                    <Title text="Featured Games" />
                                    <StarIcon className={css.featured_header_star} />
                                    <StarIcon className={`${css.featured_header_star} ${css._small}`} />
                                </div>
                                <div className={css.featured_header_right}>
                                    <ArrowButton
                                        onClick={prevSlide}
                                        disabled={isBegin}
                                        variant="prev"
                                    />
                                    <ArrowButton
                                        onClick={nextSlide}
                                        disabled={isEnd}
                                    />
                                    <Button className={css.featured_header_viewBtn} circle>
                                        View All Games
                                    </Button>
                                </div>
                            </div>
                            {Slider}
                        </>
                    )}
                </Slider>
            </div>
        </div>
    );
};
