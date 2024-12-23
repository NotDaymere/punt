import React from "react";
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
                    >
                        {testimontials.map((review, id) => (
                            <SwiperSlide 
                                className={css.testimontials_swiper_slide}
                                key={id}
                            >
                                <TestimontialItem 
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