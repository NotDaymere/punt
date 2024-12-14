import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import css from "./Slider.module.scss";

interface Props<T> {
    options: SwiperOptions;
    data: T[]
    getKey: (item: T) => string | number;
    children: (state: { 
        swiperCore: SwiperCore | null;
        activeIndex: number;
        Slider: React.JSX.Element;
        isBegin: boolean;
        isEnd: boolean;
        nextSlide: () => void;
        prevSlide: () => void;
    }) => React.ReactNode
    renderItem: (item: T, index: number) => React.ReactNode;
    className?: string;
    classNameSlide?: string;
}

export function Slider<T>({
    data,
    getKey,
    options,
    children,
    renderItem,
    className,
    classNameSlide
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

    const Component = (
        <Swiper 
            {...options}
            className={className}
            onInit={setSwiperCore}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
            {data.map((item, id) => (
                <SwiperSlide 
                    className={classNameSlide}
                    key={getKey(item)}
                >
                    {renderItem(item, id)}
                </SwiperSlide>
            ))}
        </Swiper>
    );

    return children({
        Slider: Component,
        activeIndex: activeIndex,
        swiperCore,
        isBegin: swiperCore?.isBeginning || false,
        isEnd: swiperCore?.isEnd || false,
        nextSlide,
        prevSlide
    });
};