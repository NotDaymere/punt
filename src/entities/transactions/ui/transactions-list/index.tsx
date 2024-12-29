import React from "react";
import clsx from "clsx";
import css from "./transactions-list.module.scss";
import { transactions } from "widgets/01-home-screens/mock-data";
import { TransactionsItem } from "../transactions-item";
import dayjs from "dayjs";

interface Props {
    className?: string;
}

export const TransactionsList: React.FC<Props> = ({
    className
}) => {
    return (
        <div className={clsx(css.transactions, className)}>
            <div className={css.transactions_data}>
                <div className={`${css.transactions_row} ${css.transactions_row_title}`}>
                    <p className={css.transactions_col}>#</p>
                    <p className={css.transactions_col}>Created</p>
                    <p className={css.transactions_col}>Amount</p>
                    <p className={css.transactions_col}>Tx Fee</p>
                    <p className={css.transactions_col}>Mining Fee</p>
                    <p className={css.transactions_col}>Status</p>
                    <p className={css.transactions_col}>Blockchain</p>
                </div>
                <div className={css.transactions_list}>
                    {transactions.map((item) => (
                        <TransactionsItem
                            id={item.id}
                            amount={item.amount.toFixed(2)}
                            mining_fee={item.mining_fee.toFixed(2)}
                            tx_fee={item.tx_fee.toFixed(2)}
                            status={item.status}
                            createdAt={dayjs(item.createdAt).format("MMM DD, YYYY, HH:mm A")}
                            blockchain={item.blockchain} 
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};