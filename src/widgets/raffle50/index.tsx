import React from "react";
import clsx from "clsx";
import { Button } from "shared/components/@Buttons/Button";
import { CloseButton } from "shared/components/@Buttons/CloseButton";
import { Timer } from "shared/components/Timer";
import { Title } from "shared/components/Title";
import ArrowRightMediumIcon from "shared/icons/ArrowRightMedium.icon";
import Image from "shared/ui/Image";
import { Modal } from "shared/ui/Modal";
import css from "./raffle50.module.scss";

export const Raffle50: React.FC = () => {
    const [isViewedTickets, setViewedTickets] = React.useState(false);

    const toggleViewTickets = () => setViewedTickets(!isViewedTickets);

    return (
        <Modal
            name="raffle50"
            transitionCSS={{
                enter: "modal-enter",
                enterActive: "modal-enter-active",
                exit: "modal-exit",
                exitActive: "modal-exit-active",
            }}
            className={clsx("modal-window", css.modal_window)}
            timeout={350}
            hideOnClickOutside
            overflow
        >
            {({ close }) => (
                <div className={clsx("modal-component", css.modal)}>
                    <Title.V2 className={css.modal_title}>5,000 SC Weekly Raffle</Title.V2>
                    <div className={css.picture}>
                        <Image.Default src="/img/raffle50gcsc.webp" alt="" />
                    </div>
                    {!isViewedTickets ? (
                        <div className={css.content}>
                            <Title.V2 className={css.content_title}>
                                5,000 SC AND 50 Million GC Raffle
                            </Title.V2>
                            <div className={css.content_container}>
                                <Timer className={css.content_timer} />
                                <div className={css.content_nextTicket}>
                                    <p className={css.content_nextTicket_left}>
                                        <strong>Next Ticket</strong>
                                    </p>
                                    <p className={css.content_nextTicket_right}>
                                        <Image.Default src="/img/icons/sc.svg" alt="" /> 722.88 /{" "}
                                        <Image.Default src="/img/icons/sc.svg" alt="" /> 1,000
                                    </p>
                                </div>
                                <div className={css.content_progress}>
                                    <span></span>
                                </div>
                                <p className={css.content_numberEntries}>
                                    Your number of entries: 0
                                </p>
                                <p className={css.content_text}>
                                    The total prize pool is 5,000 Sweeps Coins and 50M Gold Coins
                                    and you can win more than once! Earn tickets for every 1,000
                                    Sweeps Coins you play on qualifying games. The raffle takes
                                    place between Friday at 12AM PST to the following Friday at 12AM
                                    PST, the countdown will show you how long you have left to enter
                                    and your progress to your next ticket. Winners will be announced
                                    on Saturday evening during a livestream, tune in to see if
                                    you&apos;ve won!
                                </p>
                                <Button
                                    className={css.content_btn}
                                    onClick={toggleViewTickets}
                                    variant="green"
                                    circle
                                >
                                    View your tickets
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className={css.content}>
                            <div className={css.content_container}>
                                <Title.V2 className={css.upcoming_title}>
                                    Upcoming Raffle Tickets
                                </Title.V2>
                                <p className={css.upcoming_text}>Next Draw: Saturday, 3-5 PM PST</p>
                                <div className={css.upcoming_table}>
                                    <p className={css.upcoming_table_title}>
                                        <span>Ticket Number</span>
                                        <span>Earned On</span>
                                    </p>
                                    <ul className={css.upcoming_table_list}>
                                        <li className={css.upcoming_table_item}>
                                            <p className={css._block}>
                                                <strong>#254783</strong>
                                            </p>
                                            <p>Jan 25, 2025</p>
                                        </li>
                                        <li className={css.upcoming_table_item}>
                                            <p className={css._block}>
                                                <strong>#254783</strong>
                                            </p>
                                            <p>Jan 26, 2025</p>
                                        </li>
                                        <li className={css.upcoming_table_item}>
                                            <p className={css._block}>
                                                <strong>#254783</strong>
                                            </p>
                                            <p>Jan 26, 2025</p>
                                        </li>
                                        <li className={css.upcoming_table_item}>
                                            <p>...</p>
                                            <p>...</p>
                                        </li>
                                    </ul>
                                </div>
                                <Button className={css.upcoming_btn} onClick={toggleViewTickets}>
                                    <ArrowRightMediumIcon />
                                    Back
                                </Button>
                            </div>
                        </div>
                    )}
                    <CloseButton className={css.modal_close} onClick={close} />
                </div>
            )}
        </Modal>
    );
};
