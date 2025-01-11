import React from "react";
import { bigWinsMock } from "widgets/05-gamedetails-screens/mock-game";
import { Table } from "shared/components/Table";
import Image from "shared/ui/Image";
import { formatDate } from "shared/utils/format";
import ClockIcon from "shared/icons/Clock.icon";
import css from "./content-big-wins.module.scss";

export const ContentBigWins: React.FC = () => {
    return (
        <div className={css.wins}>
            <div className="container">
                <Table
                    className={css.lucky_table}
                    classNameRow={css.lucky_table_row}
                    title={["Game", "Username", "Time", "Amount Won"]}
                    data={bigWinsMock}
                    getKey={(item) => item.id}
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
                                        src="/img/icons/sc.svg"
                                        alt=""
                                    />
                                    <p className={css.value}>
                                        {data.amount.toFixed(2)}
                                    </p>
                                </Table.Column>
                            </>
                        )
                    }}
                />
            </div>
        </div>
    );
};