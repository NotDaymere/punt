import React from "react";
import { Button } from "shared/components/@Buttons/Button";
import Image from "shared/ui/Image";
import css from "./FAQ.module.scss";
import Accordeon from "shared/ui/Accordeon";

const data = [
    {
        question: "Which currency is used for purchases?",
        answer: `
            <p>The currency used is United States Dollar (USD)</p>
        `
    }, {
        question: "Which payment methods are available to use for purchases?",
        answer: `
            <p>We accept Visa, Mastercard, American Express, Discover and various Crypto currencies for purchases.</p>
        `
    }, {
        question: "How do I make a purchase?",
        answer: `
            <p>In order to make a purchase you first need to complete your profile. You then need to click “wallet” at the header and choose a selection of Gold Coin packages. Each Gold Coin package has the purchase price of each package clearly listed. Some of these packages will come with free promotions such as SC. </p>
            <p>Choose your coin package and you will be taken to a page where you can select your payment method. Click on the payment method to move to the next step. On this page simply follow the instructions of the payment flow and complete your transaction. The name of the card or bank account that you are using must match the name registered in your account. If successful, we will credit the coins to your account.</p>
        `
    }, {
        question: "Is there a playthrough requirement on purchases?",
        answer: `
            <p>Yes, all Sweep Coins must be played through 3x in order to be eligible for redemption.</p>
        `
    }, {
        question: "How do I request a prize redemption?",
        answer: `
            <p>Ensure you have the required minimum amount which is 100 SC in prize winnings and navigate to the ‘Redemption’ button via the Wallet icon at the header. If your account is verified for redemption you will proceed to the next stage where you will enter the amount you wish to redeem and then proceed to redeem. Follow the steps to input your account details and complete the request. Once we have processed your redemptions on our end, please be aware that your preferred payment method may have its own processing timeline</p>
        `
    }, {
        question: "What is the name of the company who is charging my payment method?",
        answer: `
            <p>Your payment will be charged by Punt Gold Coins.</p>
            <ul>
                <li>
                    <p><strong>How will the payment appear on my statement?</strong></p>
                    <p>The payment will be listed on your statement as Punt Gold Coins.</p>
                </li>
                <li>
                    <p><strong>How quickly will my coins be credited to my account?</strong></p>
                    <p>Coins are credited automatically to your account upon successfully charging your payment method. Sometimes transactions may go into a manual check by our payments team which can take a few moments.</p>
                </li>
                <li>
                    <p><strong>What should I do if I don’t receive my coins after a successful purchase?</strong></p>
                    <p>Please contact our support team through the live chat immediately and we will be happy to help resolve this for you asap.</p>
                </li>
                <li>
                    <p><strong>How do I request a refund?</strong></p>
                    <p>Refunds are only for customers that have NOT received their coins. If you haven’t received your coins we always suggest contacting our support team in the first instance. We have a very high rate of resolving purchase issues for our customers, in fact it is probably a 100% success rate and this is something we are very proud of.</p>
                </li>
            </ul>
        `
    }
]

export const FAQ: React.FC = () => {
    return (
        <div className={css.faq}>
            <div className="container">
                <div className={css.faq_wrapper}>
                    <div className={css.faq_left}>
                        <h2 className={css.faq_title}>
                            <span>You Asked.</span>
                            <span>We Answered.</span>
                        </h2>
                        <p className={css.faq_text}>
                            But if we didn&apos;t, just reach out to us and we&apos;ll be happy to
                            answer your questions.
                        </p>
                        <div className={css.faq_btn_container}>
                            <Button className={css.faq_btn} variant="green" circle>
                                Contact Us
                            </Button>
                        </div>
                        <Image.Default 
                            className={css.faq_suits}
                            src="/img/icons/suits.webp"
                            alt=""
                        />
                    </div>
                    <div className={css.faq_list}>
                        {data.map((item) => (
                            <Accordeon className={css.faq_accordeon} key={item.question} smooth>
                                <Accordeon.Button >
                                    <button className={css.faq_accordeon_btn}>
                                        {item.question}
                                        <span></span>
                                    </button>
                                </Accordeon.Button>
                                <Accordeon.Content>
                                    <div 
                                        className={css.faq_accordeon_content}
                                        dangerouslySetInnerHTML={{
                                            __html: item.answer
                                        }}
                                    />
                                </Accordeon.Content>
                            </Accordeon>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
