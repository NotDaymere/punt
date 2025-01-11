import React from "react";
import dayjs from "dayjs";
import { luckyWinsMock } from "widgets/05-gamedetails-screens/mock-game";
import { Table } from "shared/components/Table";
import ClockIcon from "shared/icons/Clock.icon";
import Image from "shared/ui/Image";
import { formatDate } from "shared/utils/format";
import css from "./content-lucky-wins.module.scss";

export const ContentLuckyWins: React.FC = () => {
    return (
        <div className={css.lucky}>
            <div className="container">
                <Table
                    className={css.lucky_table}
                    classNameRow={css.lucky_table_row}
                    title={["Game", "Username", "Time", "Bet", "Multiplayer", "Profit"]}
                    data={luckyWinsMock}
                    renderRow={(data) => {
                        const date = formatDate(data.time);

                        return (
                            <>
                                <Table.Column className={css.column}>
                                    <Image.Default className={css.img} src={data.game_img} alt="" />
                                    <p className={css.game_name}>{data.game_name}</p>
                                </Table.Column>
                                <Table.Column className={css.column}>
                                    <Image.Default className={css.img} src={data.user_img} alt="" />
                                    <p className={css.user_name}>{data.user_name}</p>
                                </Table.Column>
                                <Table.Column className={css.column}>
                                    {!date.today && (<ClockIcon className={css.icon} />)}
                                    <p className={css.date}>
                                        {date.date}
                                    </p>
                                </Table.Column>
                                <Table.Column className={css.column}>
                                    <Image.Default
                                        className={css.icon}
                                        src="/img/icons/gc.svg"
                                        alt=""
                                    />
                                    <p className={css.value}>{data.bet.toFixed(2)}</p>
                                </Table.Column>
                                <Table.Column className={css.column}>
                                    <p className={css.value}>{data.multiplier.toFixed(2)}</p>
                                </Table.Column>
                                <Table.Column className={css.column}>
                                    <Image.Default
                                        className={css.icon}
                                        src="/img/icons/gc.svg"
                                        alt=""
                                    />
                                    <p className={css.value}>{data.profit.toFixed(2)}</p>
                                </Table.Column>
                            </>
                        );
                    }}
                    getKey={(item) => item.id}
                />
            </div>
        </div>
    );
};
