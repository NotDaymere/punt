import React from "react";
import { coins } from "widgets/01-home-screens/mock-data";
import { CoinsBuy } from "entities/coins";
import { ArrowButton } from "shared/components/@Buttons/ArrowButton";
import { Button } from "shared/components/@Buttons/Button";
import { Slider } from "shared/components/Slider";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import css from "./quick-buy.module.scss";

export const QuickBuy: React.FC = () => {
    return (
        <div className={css.quickBuy}>
            <div className="container">
                <Slider
                    options={{
                        slidesPerView: "auto",
                        spaceBetween: 20,
                        allowTouchMove: false,
                    }}
                    data={coins}
                    getKey={(item) => item.amount}
                    renderItem={(item) => (
                        <CoinsBuy
                            className={css.quickBuy_coinsBuy}
                            amount={item.amount}
                            discount={item.discount}
                            img={item.img}
                            price={item.price}
                        />
                    )}
                    className={css.quickBuy_swiper}
                    classNameSlide={css.quickBuy_swiper_slide}
                >
                    {({ Slider, isBegin, isEnd, nextSlide, prevSlide }) => (
                        <>
                            <div className={css.quickBuy_header}>
                                {/* Left */}
                                <div className={css.quickBuy_header_left}>
                                    <div className={css.quickBuy_header_title}>
                                        <Title className={css.quickBuy_title} text="Quick Buy" />
                                        <p className={css.quickBuy_header_label}>
                                            <span>#</span> Securely
                                        </p>
                                    </div>
                                    <p className={css.quickBuy_header_text}>
                                        No purchase necessary. Claim your free coins today!
                                    </p>
                                </div>
                                {/* Center */}
                                <div className={css.quickBuy_header_center}>
                                    <Image.Default
                                        className={css.quickBuy_header_buyStars}
                                        src="/img/home/buy-stars.svg"
                                        alt=""
                                    />
                                    <p className={css.quickBuy_header_platform}>
                                        Punt ™ is a FREE-TO-PLAY online social casino platform{" "}
                                        <span>that operates in 2 different modes</span>
                                    </p>
                                    <Button className={css.quickBuy_header_link} href="/" circle>
                                        How It works
                                    </Button>
                                </div>
                                {/* Right */}
                                <div className={css.quickBuy_header_right}>
                                    <ArrowButton
                                        onClick={prevSlide}
                                        disabled={isBegin}
                                        variant="prev"
                                    />
                                    <ArrowButton onClick={nextSlide} disabled={isEnd} />
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
