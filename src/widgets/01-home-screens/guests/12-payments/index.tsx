import React from "react";
import BankIcon from "widgets/01-home-screens/_icons/Bank.icon";
import { useViewport } from "shared/hooks/use-viewport";
import Image from "shared/ui/Image";
import { TextSplitter } from "shared/ui/TextSplitter";
import { Marquee } from "shared/ui/marquee";
import testimontialCSS from "../10-testimontials/testimontials.module.scss";
import css from "./payments.module.scss";
import { useGSAP } from "@gsap/react";
import { getTimeline, getTitleAnimationOptions } from "shared/animation/utils";

const paymentsImages = [
    "/img/payments/p-1.svg",
    "/img/payments/p-2.svg",
    "/img/payments/p-3.svg",
    "/img/payments/p-4.svg",
    "/img/payments/p-5.svg",
];

export const Payments: React.FC = () => {
    const rootRef = React.useRef<HTMLDivElement>(null);
    const { screenWidth } = useViewport(1000);

    useGSAP(() => {
        getTimeline(rootRef.current)
            .to(".payments-box", {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "back.out(1)"
            }, "payments")
            .to(
                ".payments-title span", 
                getTitleAnimationOptions(),
                "payments"
            )
            .to(
                ".payments-title span", 
                getTitleAnimationOptions(),
                "payments" 
            )
            .to(
                ".payments-text",
                { opacity: 1, duration: 1 },
                "payments+=90%"
            )
            .to(
                ".payments-bottom-text",
                { opacity: 1, y: 0, duration: 0.8 },
                "payments+=120%"
            )
    }, { scope: rootRef });

    return (
        <div className={css.payments} ref={rootRef}>
            <div className={testimontialCSS.testimontials_container}>
                <div className={css.payments_wrapper}>
                    <div className={`${css.payments_box} payments-box`}>
                        <div className={css.payments_content}>
                            <div className={css.payments_content_icon}>
                                <BankIcon />
                            </div>
                            <h2 className={css.payments_content_title}> 
                                <strong>
                                    <TextSplitter
                                        className="payments-title"
                                        text="Payment"
                                        tagName="span"
                                        splitter=""
                                    />
                                </strong>{" "}
                                <TextSplitter
                                    className="payments-title"
                                    text="methodsare available"
                                    tagName="span"
                                    splitter=""
                                />
                            </h2>
                            <p className={`${css.payments_content_text} payments-text`}>
                                We accept Visa, Mastercard, American Express, Discover and various
                                Crypto currencies
                            </p>
                            <p className={`${css.payments_content_bottom} payments-bottom-text`}>
                                Punt places the utmost priority on the safety, security and
                                integrity of its systems and customer payment data.
                            </p>
                        </div>
                        <div className={css.payments_back}>
                            {[1, 2].map((item, id) => (
                                <Marquee
                                    className={css.payments_marquee}
                                    direction={
                                        screenWidth > 991
                                            ? item === 1
                                                ? "utd"
                                                : "dtu"
                                            : item === 1
                                              ? "ltr"
                                              : "rtl"
                                    }
                                    speed={0.7}
                                    key={id}
                                >
                                    <ul className={css.payments_list}>
                                        {[...paymentsImages, ...paymentsImages].map((item, id) => (
                                            <li className={css.payments_list_item} key={item + id}>
                                                <div className={css.payments_list_content}>
                                                    <Image.Default src={item} alt="" />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </Marquee>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
