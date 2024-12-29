import React from "react";
import css from "./transactions.module.scss";

export const Transactions: React.FC = () => {
    return (
        <section className={css.transactions} id="transactions">
            <div className="container">
                Transactions
            </div>
        </section>
    );
};