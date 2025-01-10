import React from "react";
import clsx from "clsx";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { ArrowButton } from "shared/components/@Buttons/ArrowButton";
import { Button } from "shared/components/@Buttons/Button";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import css from "./GameSlider.module.scss";

interface Props<T> {
    data: T[];
    title?: string;
    viewHref?: string;
    renderCard: (item: T, index: number) => React.ReactNode;
    getKey: (item: T, index: number) => string | number;
    swiperOptions?: SwiperOptions;
    className?: string;
    classNameSlide?: string;
    classNameHeader?: string;
    icon?: "suits" | "chips" | "hearts" | "spades" | "diamonds" | "clubs";
}

export function GameSlider<T>({
    title,
    data,
    renderCard,
    getKey,
    className,
    classNameSlide,
    classNameHeader,
    swiperOptions,
    viewHref,
    icon,
}: Props<T>) {
    const [swiperCore, setSwiperCore] = React.useState<SwiperCore | null>(null);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [_, update] = React.useState(0);

    const prevSlide = () => {
        update((item) => item + 1);
        swiperCore?.slidePrev();
    };

    const nextSlide = () => {
        update((item) => item + 1);
        swiperCore?.slideNext();
    };

    const options = React.useMemo(() => {
        const defaultOptions: SwiperOptions = {
            slidesPerView: "auto",
            spaceBetween: 24,
            allowTouchMove: false,
        };
        return Object.assign(defaultOptions, swiperOptions);
    }, [swiperOptions]);

    return (
        <div className={css.slider}>
            <div className="container">
                <div className={clsx(css.slider_header, classNameHeader)}>
                    <div className={css.slider_header_wrapper}>
                        {title && <Title.V2>{title}</Title.V2>}
                        {icon && (
                            <Image.Default
                                className={clsx(css.icon, css["_" + icon])}
                                src={`/img/figures/slider-${icon}.svg`}
                                alt=""
                            />
                        )}
                    </div>
                    <div className={css.slider_header_right}>
                        <ArrowButton
                            disabled={swiperCore?.isBeginning}
                            variant="prev"
                            onClick={prevSlide}
                        />
                        <ArrowButton disabled={swiperCore?.isEnd} onClick={nextSlide} />
                        {viewHref && (
                            <Button
                                className={css.slider_header_viewBtn}
                                href={viewHref}
                                component="a"
                            >
                                View All Games
                            </Button>
                        )}
                    </div>
                </div>
                <div className={css.slider_slider}>
                    <Swiper
                        {...options}
                        className={clsx(css.slider_swiper, className)}
                        onInit={setSwiperCore}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    >
                        {data.map((item, index) => (
                            <SwiperSlide
                                className={clsx(css.slider_swiper_slide, classNameSlide)}
                                key={getKey(item, index)}
                            >
                                {renderCard(item, index)}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
