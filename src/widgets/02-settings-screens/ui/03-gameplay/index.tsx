import React from "react";
import css from "./gameplay.module.scss";

interface Props {

}

const Gameplay: React.FC<Props> = (props) => {
    return (
        <div className={css.root}>
            Gameplay
        </div>
    );
};

export default Gameplay;