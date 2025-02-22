import React from "react";
import clsx from "clsx";
import { tempGameplayData } from "widgets/12-mygameplay-screens/lib";
import { Table } from "shared/components/Table";
import Image from "shared/ui/Image";
import css from "./History.module.scss";

export const History: React.FC = () => {
    return (
        <div className={css.history}>
            <div className="container">
                <Table
                    className={css.history_table}
                    classNameRow={css.history_table_row}
                    title={["Game", "Date", "Type", "Bet", "X", "Payout"]}
                    data={tempGameplayData}
                    getKey={(item) => item.id}
                    renderRow={(row) => (
                        <>
                            <Table.Column className={css.history_table_column}>
                                <p className={css.history_table_text}>
                                    <Image.Default
                                        className={css.history_table_img}
                                        src={row.img}
                                        alt=""
                                    />
                                    {row.name}
                                </p>
                            </Table.Column>
                            <Table.Column className={css.history_table_column}>
                                <p className={css.history_table_date}>{row.createdAt}</p>
                            </Table.Column>
                            <Table.Column className={css.history_table_column}>
                                <p
                                    className={clsx(
                                        css.history_type,
                                        row.type === "Win" ? css._win : css._failed
                                    )}
                                >
                                    <Image.Default
                                        src={`/img/icons/${row.type === "Win" ? "win" : "failed"}.svg`}
                                        alt=""
                                    />
                                    {row.type}
                                </p>
                            </Table.Column>
                            <Table.Column className={css.history_table_column}>
                                <p className={css.history_table_text}>
                                    <Image.Default src="/img/icons/gc.svg" alt="" />
                                    {row.bet.toFixed(2)}
                                </p>
                            </Table.Column>
                            <Table.Column className={css.history_table_column}>
                                <p className={css.history_table_text}>{row.x}</p>
                            </Table.Column>
                            <Table.Column className={css.history_table_column}>
                                <p className={css.history_table_text}>
                                    <Image.Default src="/img/icons/gc.svg" alt="" />
                                    <span>
                                        <span
                                            style={{ color: row.pnl < 0 ? "#FF3D4B" : "#D7FF82" }}
                                        >
                                            {row.pnl < 0 ? "-" : "+"}
                                        </span>
                                        {Math.abs(row.pnl).toFixed(2)}
                                    </span>
                                </p>
                            </Table.Column>
                        </>
                    )}
                />

                <p className={css.history_display}>Displaying 10 of 10 games</p>
            </div>
        </div>
    );
};
