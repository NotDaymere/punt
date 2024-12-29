import React from "react";
import { Button } from "shared/components/@Buttons/Button";
import mainCSS from "../01-general/general.module.scss";
import css from "./gameplay.module.scss";

const Gameplay: React.FC = () => {
    return (
        <div className={css.gameplay}>
            <div className={mainCSS.item}>
                <div className={mainCSS.item_inner}>
                    <h3 className={mainCSS.title}>Break In Play</h3>
                    <div className={mainCSS.text}>
                        <p>
                            If you want to take a short break from gaming with us, you can do so by
                            taking a Time-Out for a period of 24 hours, 48 hours, 7 days, 30 days, 2
                            months, 3 months. Once you begin your Time-Out, you will not be able to
                            use your account for gaming, although you will still be able to log in
                            to redeem any remaining balance.
                        </p>
                        <p>
                            It will not be possible to reactivate your account until your chosen
                            period has ended.
                        </p>
                    </div>
                    <Button className={css.gameplay_button} circle>
                        Request Break in Play
                    </Button>
                </div>
            </div>
            <div className={mainCSS.item}>
                <div className={mainCSS.item_inner}>
                    <h3 className={mainCSS.title}>Self Exclusion</h3>
                    <div className={mainCSS.text}>
                        <p>
                            If you feel you are at risk of developing a social gaming problem or
                            believe you currently have a social gaming problem, please consider
                            using Self-Exclusion which prevents you playing with Punt for a
                            specified period of 6 months, 1 year, 2 years or 5 years. If you want to
                            stop playing for other reasons, please consider a Time-Out or using
                            Account Closure.
                        </p>
                    </div>
                    <Button className={css.gameplay_button} circle>
                        Request Self Exclusion
                    </Button>
                </div>
            </div>
            <div className={mainCSS.item}>
                <div className={mainCSS.item_inner}>
                    <h3 className={mainCSS.title}>Purchase Limits</h3>
                    <div className={mainCSS.text}>
                        <p>No Current Purchase Limits Set!</p>
                    </div>
                    <Button className={css.gameplay_button} circle>
                        Set Purchase Limit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Gameplay;
