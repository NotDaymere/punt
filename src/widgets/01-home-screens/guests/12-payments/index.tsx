import React from "react";
import css from "./payments.module.scss";
import testimontialCSS from "../10-testimontials/testimontials.module.scss";

export const Payments: React.FC = () => {
    return (
        <div className={css.payments}>
            <div className={testimontialCSS.testimontials_container}>
                <div className={css.payments_wrapper}>
                    <div className={css.payments_box}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};