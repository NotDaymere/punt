import React from "react";
import clsx from "clsx";
import { TransactionsList } from "entities/transactions";
import { Button } from "shared/components/@Buttons/Button";
import FilterIcon from "shared/icons/Filter.icon";
import css from "./transactions.module.scss";

const tabs = [
    {
        name: "Purchases",
        payload: 98,
        id: "purchases",
    },
    {
        name: "Redemptions",
        payload: 10,
        id: "redemptions",
    },
];

export const Transactions: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState(tabs[0].id);
    const [value, setValue] = React.useState("");

    return (
        <section className={css.transactions} id="transactions">
            <div className="container">
                <h2 className={css.transactions_title}>Transactions History</h2>
                <div className={css.transactions_row}>
                    <ul className={css.tabs}>
                        {tabs.map((item) => (
                            <li
                                className={clsx(
                                    css.tabs_item,
                                    item.id === activeTab && css._active
                                )}
                                onClick={() => setActiveTab(item.id)}
                                key={item.id}
                            >
                                {item.name} <span>{item.payload}</span>
                            </li>
                        ))}
                    </ul>
                    <div className={css.transactions_form}>
                        <input
                            className={css.transactions_form_input}
                            value={value}
                            onChange={(ev) => setValue(ev.target.value)}
                            placeholder="Search"
                            type="text"
                        />
                        <button className={css.transactions_form_filterBtn}>
                            <FilterIcon /> Filters
                        </button>
                    </div>
                </div>

                <TransactionsList className={css.transactions_list} />

                <div className={css.transactions_footer}>
                    <p className={css.transactions_displayed}>Displaying 12 of 98 Transactions</p>

                    <Button className={css.transactions_download} circle>
                        Download all Purchases
                    </Button>
                </div>
            </div>
        </section>
    );
};
