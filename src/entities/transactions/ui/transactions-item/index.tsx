import React from "react";
import css from "./transactions-item.module.scss";
import mainCSS from "../transactions-list/transactions-list.module.scss";
import Image from "shared/ui/Image";
import clsx from "clsx";

interface Props {
    id: number;
    amount: string | number;
    tx_fee: string | number;
    mining_fee: string | number;
    status: "Completed" | "Pending" | "Failed";
    blockchain: string;
    createdAt: string;
}

export const TransactionsItem: React.FC<Props> = ({
    id,
    amount,
    blockchain,
    createdAt,
    mining_fee,
    status,
    tx_fee
}) => {
    return (
        <div className={css.item}>
            <div className={mainCSS.transactions_col}>
                <p className={css.item_id}>№{id}</p>
            </div>
            <div className={mainCSS.transactions_col}>
                <p className={css.item_date}>{createdAt}</p>
            </div>
            <div className={mainCSS.transactions_col}>
                <p className={css.item_price}>${amount}</p>
            </div>
            <div className={mainCSS.transactions_col}>
                <p className={css.item_price}>${tx_fee}</p>
            </div>
            <div className={mainCSS.transactions_col}>
                <p className={css.item_price}>${mining_fee}</p>
            </div>
            <div className={mainCSS.transactions_col}>
                <p className={clsx(css.item_status, css['_' + status])}>
                    <Image.Default 
                        src={
                            status === "Completed"
                                ? "/img/icons/status-ok.svg"
                                : status === "Pending"
                                    ? "/img/icons/status-pending.svg"
                                    : "/img/icons/status-failed.svg"
                        }
                        alt="" 
                    /> <span>{status}</span>
                </p>
            </div>
            <div className={mainCSS.transactions_col}>
                <p className={css.item_blockchain}>
                    <Image.Default src="/img/temp/eth.svg" alt="" />
                    <span>{blockchain}</span>
                </p>
            </div>
        </div>
    );
};