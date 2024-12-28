import React from "react";
import css from "./assessment.module.scss";

interface Props {

}

const Assessment: React.FC<Props> = (props) => {
    return (
        <div className={css.root}>
            Assessment
        </div>
    );
};

export default Assessment;