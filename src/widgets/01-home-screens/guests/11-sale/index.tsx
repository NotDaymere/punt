import React from "react";
import { useGSAP } from "@gsap/react";
import { getTimeline, getTitleAnimationOptions } from "shared/animation/utils";
import { Button } from "shared/components/@Buttons/Button";
import { Title } from "shared/components/Title";
import { useInput } from "shared/hooks/use-input";
import Image from "shared/ui/Image";
import testimontialCSS from "../10-testimontials/testimontials.module.scss";
import css from "./sale.module.scss";

export const Sale: React.FC = () => {
    const rootRef = React.useRef<HTMLDivElement>(null);
    const { typingValue, handleValue } = useInput();

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
    };

    useGSAP(
        () => {
            getTimeline(rootRef.current, {
                trigger: ".sale-content",
            })
                .to(".sale-title .title-span-1 span", getTitleAnimationOptions(), "sale")
                .to(".sale-title .title-span-2 span", getTitleAnimationOptions(), "sale")
                .to(".sale-text", { opacity: 1, duration: 1 }, "sale+=80%")
                .to(
                    ".sale-form",
                    { opacity: 1, scale: 1, duration: 1, ease: "back.out(2)" },
                    "sale+=90%"
                )
                .to(".sale-login", { opacity: 1, duration: 1 }, "sale+=110%")
                .to(".sale-socials > *", {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "back.out(3)",
                }, "sale+=120%")
                .to(".sale-wheel", {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "back.out"
                }, "sale+=80%");
        },
        {
            scope: rootRef,
        }
    );

    return (
        <section className={css.sale} ref={rootRef} id="sale">
            <div className={testimontialCSS.testimontials_container}>
                <div className={css.sale_wrapper}>
                    {/* <Starfield className={css.sale_starfield} /> */}
                    <video
                        className={css.sale_starfield}
                        src="/img/home/media/star-falling.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className={css.sale_wheel}>
                        <Image.Default
                            className="sale-wheel"
                            src="/img/home/sale-wheel.webp"
                            loading="lazy"
                            alt=""
                        />
                    </div>
                    <div className={`${css.sale_content} sale-content`}>
                        <Title
                            className={`${css.sale_title} sale-title`}
                            text="100% Sale"
                            animated="manual"
                        />
                        <Title
                            className={`${css.sale_title} sale-title`}
                            text="on 1st Purchase"
                            animated="manual"
                        />
                        <p className={`${css.sale_text} sale-text`}>
                            <span>250K</span> for free for registrations
                        </p>
                        <form className={`${css.sale_form} sale-form`} onSubmit={handleSubmit}>
                            <input
                                className={css.sale_form_input}
                                value={typingValue}
                                onChange={handleValue}
                                placeholder="Enter your email"
                            />
                            <Button
                                className={css.sale_form_submitBtn}
                                variant="green"
                                type="submit"
                            >
                                Join Now
                            </Button>
                        </form>
                        <p className={`${css.sale_or_login} sale-login`}>
                            or login with these social
                        </p>
                        <div className={`${css.socials} sale-socials`}>
                            <Button className={css.socials_item} component="a" variant="black">
                                <Image.Default src="/img/icons/social-google.svg" alt="google" />
                                Google
                            </Button>
                            <Button className={css.socials_item} component="a" variant="black">
                                <Image.Default src="/img/icons/social-facebook.svg" alt="google" />
                                Facebook
                            </Button>
                            <Button className={css.socials_item} component="a" variant="black">
                                <Image.Default src="/img/icons/social-twitch.svg" alt="google" />
                                Twitch
                            </Button>
                            <Button className={css.socials_item} component="a" variant="black">
                                <Image.Default src="/img/icons/social-instagram.svg" alt="google" />
                                Instagram
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
