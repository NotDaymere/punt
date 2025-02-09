import React from "react";
import SwiperCore from "swiper";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "shared/ui/Image";
import { Title } from "shared/components/Title";
import { ArrowButton } from "shared/components/@Buttons/ArrowButton";
import { Eye } from "shared/animation/Eye";
import { testimontials } from "widgets/01-home-screens/mock-data";
import { TestimontialItem } from "entities/testimontial";
import css from "./testimontials.module.scss";
import EyeRIcon from "widgets/01-home-screens/_icons/EyeR.icon";
import { getTimeline, getTitleAnimationOptions } from "shared/animation/utils";

const colors = [
    "black",
    "light-green",
    "white",
    "light-blue",
    "light-gray",
] as const;

export const Testimontials: React.FC = () => {
    const [swiperCore, setSwiperCore] = React.useState<SwiperCore>();
    const [activeIndex, setActiveIndex] = React.useState(0);
    const rootRef = React.useRef<HTMLDivElement>(null);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: rootRef.current,
            start: "top 30%",
            once: true,
            onEnter: function() {
                document.getElementById("testimontials")?.classList.add("_animated");
            }
        });

        getTimeline(rootRef.current, {
            start: "top 50%"
        })
            .to(
                ".testi-title .title-span-1 span, .testi-img",
                getTitleAnimationOptions(),
                "testi"
            )
            .to(
                ".testi-title .title-span-2 span, .testi-img",
                getTitleAnimationOptions(),
                "testi"
            )
            .to(".testi-text", {
                opacity: 1,
                y: 0,
                duration: 1,
            }, "testi+=50%")
    }, {
        scope: rootRef
    });

    return (
        <section className={css.testimontials} ref={rootRef} id="testimontials">
            <Image.Default 
                className={css.testimontials_stars}
                src="/img/home/testimontials-stars.webp"
                alt=""
            />
            <div className={css.testimontials_container}>
                <div className={css.testimontials_wrapper}>
                    <Image.Default 
                        className={css.testimontials_lights}
                        src="/img/home/testimontials-light.webp"
                        alt=""
                    />
                    <div className={css.testimontials_header}>
                        <div className={css.testimontials_header_row}>
                            <Title 
                                className={`${css.testimontials_header_title} testi-title`} 
                                text="Check"
                                animated="manual"
                            />
                            <Image.Default 
                                className={`${css.testimontials_header_img} testi-img`} 
                                src="/img/home/testimontials-person-1.png"
                                alt=""
                            />
                            <Image.Default 
                                className={`${css.testimontials_header_img} testi-img`} 
                                src="/img/home/testimontials-person-2.png"
                                alt=""
                            />
                            <Title 
                                className={`${css.testimontials_header_title} testi-title`} 
                                text="out our"
                                animated="manual"
                            />
                        </div>
                        <Title 
                            className={`${css.testimontials_header_title} testi-title`} 
                            text="testimonials"
                            animated="manual"
                        />
                    </div>
                    <p className={`${css.testimontials_text} testi-text`}>
                        Magnify our satisfied customers&apos; triumphs and big wins
                    </p>
                    <Swiper
                        className={css.testimontials_swiper}
                        spaceBetween={24}
                        onInit={setSwiperCore}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        slidesPerView="auto"
                        allowTouchMove
                    >
                        {testimontials.map((review, id) => (
                            <SwiperSlide 
                                className={css.testimontials_swiper_slide}
                                key={id}
                            >
                                <TestimontialItem 
                                    className={css.testimontials_item}
                                    person_img={review.img}
                                    person_location={review.location}
                                    person_name={review.name}
                                    rate={review.rate}
                                    review={review.review}
                                    variant={colors[id % colors.length]}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={css.testimontials_controls}>
                        <ArrowButton 
                            onClick={() => swiperCore?.slidePrev()} 
                            disabled={swiperCore?.isBeginning} 
                            variant="prev" 
                        />
                        <ArrowButton 
                            onClick={() => swiperCore?.slideNext()} 
                            disabled={swiperCore?.isEnd} 
                        />
                    </div>
                </div>
                    <div className={css.testimontials_eyes}>
                        <Eye />
                        <Eye />
                        <EyeRIcon className={css.testimontials_eyer} />
                    </div>
            </div>
        </section>
    );
};