import React from "react";
import { CSSTransition } from "react-transition-group";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { getTitleAnimationOptions } from "shared/animation/utils";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import css from "./preloader.module.scss";
import { useAppStore } from "shared/store";

const config = {
    counter: {
        duration: 8,
        ease: "power4.inOut",
    },

    documentOverflow(bool: boolean) {
        if (bool) {
            document.documentElement.classList.add("hidden");
        } else {
            document.documentElement.classList.remove("hidden");
        }
    },
};

export const Preloader: React.FC = () => {
    const { prealoderActive, changePreloaderState } = useAppStore();
    const nodeRef = React.useRef<HTMLDivElement>(null);
    const counterRef = React.useRef<HTMLSpanElement>(null);

    React.useEffect(() => {
        config.documentOverflow(true);
        return () => config.documentOverflow(false);
    }, []);

    useGSAP(
        () => {
            const pv = { value: 0 };

            gsap.timeline({
                onComplete() {
                    changePreloaderState(false);
                    config.documentOverflow(false);
                },
                onStart() {
                    if(nodeRef.current) {
                        nodeRef.current.classList.add(css._animated);
                    }
                }
            })
                // Title appear
                .to(
                    ".preloaded-content-title .title-span-1 span, .preloader-content-text .title-span-1 span",
                    getTitleAnimationOptions({ delay: 2 }),
                    "counter"
                )
                .to(
                    ".preloaded-content-title .title-span-2 span, .preloader-content-text .title-span-2 span",
                    getTitleAnimationOptions({ delay: 2 }),
                    "counter"
                )
                // Background appear
                .to(
                    ".preloader-bg-image",
                    {
                        opacity: 1,
                        duration: config.counter.duration * 0.5,
                        delay: 2,
                    },
                    "counter"
                )
                // Line filling
                .to(
                    ".preloader-progress-line",
                    {
                        scaleX: 1,
                        duration: config.counter.duration,
                        ease: config.counter.ease,
                    },
                    "counter"
                )
                // Progress offset
                .to(
                    ".preloader-progress-counter",
                    {
                        xPercent: 100,
                        duration: config.counter.duration,
                        ease: config.counter.ease,
                    },
                    "counter"
                )
                // Progress change text
                .to(
                    pv,
                    {
                        value: 100,
                        duration: config.counter.duration,
                        ease: config.counter.ease,
                        onUpdate() {
                            if (counterRef.current) {
                                counterRef.current.innerHTML = `${Math.round(pv.value)}%`;
                            }
                        },
                    },
                    "counter"
                );
        },
        { scope: nodeRef }
    );

    return (
        <CSSTransition
            classNames={css}
            timeout={800}
            // in={prealoderActive}
            in
            unmountOnExit
            mountOnEnter
            nodeRef={nodeRef}
        >
            <div className={css.preloader} ref={nodeRef}>
                <Image.Default
                    className={`${css.preloader_image} preloader-bg-image`}
                    src="/img/profile-bg.webp"
                    alt=""
                />
                <div className={css.preloader_animation}>
                    <div className={css.preloader_animation_card_1}>
                        <Image.Default 
                            src="/img/home/preloader/card.webp"
                            alt=""
                        />
                    </div>
                    <div className={css.preloader_animation_card_2}>
                        <Image.Default 
                            src="/img/home/preloader/card.webp"
                            alt=""
                        />
                    </div>
                    <div className={css.preloader_animation_chip_black}>
                        <Image.Default 
                            src="/img/home/preloader/chip-black.webp"
                            alt=""
                        />
                    </div>
                    <div className={css.preloader_animation_chip_green}>
                        <Image.Default 
                            src="/img/home/preloader/chip-green.webp"
                            alt=""
                        />
                    </div>
                </div>
                <div className={css.preloader_content}>
                    <Title
                        className={`${css.preloader_content_title} preloaded-content-title`}
                        text="America's"
                        animated="manual"
                    />
                    <Title
                        className={`${css.preloader_content_text} preloader-content-text`}
                        text="#1 Social Casino"
                        variant="yellow"
                        animated="manual"
                    />
                </div>
                <div className={css.preloader_progress}>
                    <div className={css.preloader_progress_counter}>
                        <p
                            className={`${css.preloader_progress_counter_wrapper} preloader-progress-counter`}
                        >
                            <span ref={counterRef}>0%</span>
                        </p>
                    </div>
                    <div className={css.preloader_progress_wrapper}>
                        <div className={`${css.preloader_progress_line} preloader-progress-line`} />
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};
