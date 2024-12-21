import React from "react";
import css from "./winners.module.scss";

export const Winners: React.FC = () => {
    return (
        <section className={css.winners} id="winners">
            <div className="container">
                Winners
            </div>
        </section>
    );
};