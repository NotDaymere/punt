import React from "react";
import BankIcon from "widgets/01-home-screens/_icons/Bank.icon";
import Image from "shared/ui/Image";
import testimontialCSS from "../10-testimontials/testimontials.module.scss";
import css from "./payments.module.scss";
import { Marquee } from "shared/ui/marquee";

const paymentsImages = [
    "/img/payments/p-1.svg",
    "/img/payments/p-2.svg",
    "/img/payments/p-3.svg",
    "/img/payments/p-4.svg",
    "/img/payments/p-5.svg",
];

export const Payments: React.FC = () => {
    return (
        <div className={css.payments}>
            <div className={testimontialCSS.testimontials_container}>
                <div className={css.payments_wrapper}>
                    <div className={css.payments_box}>
                        <div className={css.payments_content}>
                            <div className={css.payments_content_icon}>
                                <BankIcon />
                            </div>
                            <h2 className={css.payments_content_title}>
                                <span>Payment</span> methods are available
                            </h2>
                            <p className={css.payments_content_text}>
                                We accept Visa, Mastercard, American Express, Discover and various
                                Crypto currencies
                            </p>
                            <p className={css.payments_content_bottom}>
                                Punt places the utmost priority on the safety, security and
                                integrity of its systems and customer payment data.
                            </p>
                        </div>
                        <div className={css.payments_back}>
                            {[1, 2].map((item) => (
                                <Marquee
                                    className={css.payments_marquee}
                                    direction={item === 1 ? "utd" : "dtu"}
                                    speed={0.7}
                                    key={item}
                                >
                                    <ul className={css.payments_list}>
                                        {paymentsImages.map((item) => (
                                            <li className={css.payments_list_item} key={item}>
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
