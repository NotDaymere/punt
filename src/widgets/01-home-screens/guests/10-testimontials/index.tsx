import React from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "shared/ui/Image";
import { Title } from "shared/components/Title";
import { testimontials } from "widgets/01-home-screens/mock-data";
import { TestimontialItem } from "entities/testimontial";
import css from "./testimontials.module.scss";

const colors = [
    "black",
    "light-green",
    "white",
    "light-blue",
    "light-gray",
] as const;

export const Testimontials: React.FC = () => {
    useGSAP(() => {
        ScrollTrigger.create({
            trigger: "#testimontials",
            start: "top 30%",
            once: true,
            onEnter: function() {
                document.getElementById("testimontials")?.classList.add("_animated");
            }
        })
    }, []);
    return (
        <section className={css.testimontials} id="testimontials">
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
                                className={css.testimontials_header_title} 
                                text="Check"
                            />
                            <Image.Default 
                                className={css.testimontials_header_img} 
                                src="/img/home/testimontials-person-1.png"
                                alt=""
                            />
                            <Image.Default 
                                className={css.testimontials_header_img} 
                                src="/img/home/testimontials-person-2.png"
                                alt=""
                            />
                            <Title 
                                className={css.testimontials_header_title} 
                                text="out our"
                            />
                        </div>
                        <Title 
                            className={css.testimontials_header_title} 
                            text="testimonials"
                        />
                    </div>
                    <p className={css.testimontials_text}>
                        Magnify our satisfied customers' triumphs and big wins
                    </p>
                    <Swiper
                        className={css.testimontials_swiper}
                        spaceBetween={24}
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
                </div>
            </div>
        </section>
    );
};