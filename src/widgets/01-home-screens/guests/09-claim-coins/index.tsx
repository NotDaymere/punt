import React from "react";
import { Button } from "shared/components/@Buttons/Button";
import Image from "shared/ui/Image";
import css from "./claim-coins.module.scss";

export const ClaimCoins: React.FC = () => {
    return (
        <section className={css.claim} id="claim-coins">
            <div className="container">
                <div className={css.claim_wrapper}>
                    <div className={css.claim_content}>
                        <Image.Default 
                            className={css.claim_content_img}
                            src="/img/home/claim-coins.svg"
                            alt=""
                        />
                        <h2 className={css.claim_content_title}>
                            <span>No purchase</span> necessary
                        </h2>
                        <p className={css.claim_content_text}>Claim your free coins today!</p>
                        <Button className={css.claim_content_btn} variant="black" circle>
                            Play for Free!
                        </Button>
                        <p className={css.claim_bottom_text}>
                            Punt places the utmost priority on the safety, security and integrity of
                            its systems and customer payment data.
                        </p>
                    </div>
                    <div className={css.claim_animation}>
                        <Image.Default 
                            className={css.claim_animation_img}
                            src="/img/temp/claim-scissors.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
