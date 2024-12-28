import React from "react";
import css from "./offers.module.scss";

interface Props {

}

const Offers: React.FC<Props> = (props) => {
    return (
        <div className={css.root}>
            Offers
        </div>
    );
};

export default Offers;