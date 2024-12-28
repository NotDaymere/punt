import React from "react";
import css from "./signs.module.scss";

interface Props {

}

const Signs: React.FC<Props> = (props) => {
    return (
        <div className={css.root}>
            Signs
        </div>
    );
};

export default Signs;