import React from "react";
import { useGSAP } from "@gsap/react";
import { getTimeline, getTitleAnimationOptions } from "shared/animation/utils";
import { Button } from "shared/components/@Buttons/Button";
import Image from "shared/ui/Image";
import { TextSplitter } from "shared/ui/TextSplitter";
import css from "./claim-coins.module.scss";

export const ClaimCoins: React.FC = () => {
    const rootRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            getTimeline(rootRef.current)
                .to(".claim-wrapper", {
                    scale: 1,
                    duration: 0.8,
                    ease: "back.out(1)"
                }, "claim")
                .to(
                    ".claim-content-segments span",
                    getTitleAnimationOptions(),
                    "claim"
                )
                .to(".claim-content-img", {
                    rotate: 0,
                    duration: 0.8
                }, "claim+=10%")
                .to(".claim-content-text", {
                    opacity: 1,
                    duration: 0.5,
                }, "claim+=90%")
                .to(".claim-content-btn", {
                    opacity: 1,
                    scale: 1,
                    ease: "back.out(3)"
                }, "claim+=90%")
        },
        { scope: rootRef }
    );

    return (
        <section className={css.claim} ref={rootRef} id="claim-coins">
            <div className="container">
                <div className={`${css.claim_wrapper} claim-wrapper`}>
                    <div className={css.claim_content}>
                        <Image.Default
                            className={`${css.claim_content_img} claim-content-img`}
                            src="/img/home/claim-coins.svg"
                            alt=""
                        />
                        <h2 className={css.claim_content_title}>
                            <strong>
                                <TextSplitter
                                    className="claim-content-segments"
                                    text="No purchase"
                                    tagName="span"
                                    splitter=""
                                />
                            </strong>
                            <br />
                            <TextSplitter
                                className="claim-content-segments"
                                text="necessary"
                                tagName="span"
                                splitter=""
                            />
                        </h2>
                        <p className={`${css.claim_content_text} claim-content-text`}>
                            Claim your free coins today!
                        </p>
                        <Button
                            className={`${css.claim_content_btn} claim-content-btn`}
                            variant="black"
                            circle
                        >
                            Play for Free!
                        </Button>
                        <p className={css.claim_bottom_text}>
                            Punt places the utmost priority on the safety, security and integrity of
                            its systems and customer payment data.
                        </p>
                    </div>
                    <div className={css.claim_animation}>
                        <video
                            className={css.claim_animation_img}
                            src="/img/home/media/scissors.mp4"
                            playsInline
                            autoPlay
                            muted
                            loop
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
