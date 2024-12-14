import React from "react";
import { Title } from "shared/components/Title";
import { Button } from "shared/components/@Buttons/Button";
import Image from "shared/ui/Image";
import css from "./main.module.scss";
import { ProgressRange } from "shared/components/ProgressRange";
import { Chapter } from "widgets/01-home-screens/_components/Chapter";

export const Main: React.FC = () => {
    return (
        <section className={css.main} id="main">
            <div className="container">
                <div className={css.main_wrapper}>
                    {/* Welcome */}
                    <div className={css.welcome}>
                        <div className={css.welcome_title_container}>
                            <Title 
                                className={css.welcome_title}
                                level={1} 
                                text="Hello, Linda" 
                            />
                            <p className={css.welcome_label}>
                                Welcome back
                            </p>
                            <Image.Default 
                                className={css.welcome_suits}
                                src="/img/home/suits.png"
                                alt=""
                            />
                        </div>
                    </div>

                    {/* News */}
                    <div className={css.news}>
                        <Chapter 
                            color="red"
                            label="Claim Now"
                            title="Grab Your VIP Rewards"
                            image="/img/home/diamonds.png"
                        />
                        <Chapter 
                            color="yellow"
                            label="Events"
                            title="Upcoming VIP Events"
                            image="/img/home/cup.png"
                        />
                        <Chapter 
                            color="blue"
                            label="Promotions"
                            title="Exclusive Offers"
                            image="/img/home/speaker.png"
                        />
                    </div>

                    {/* Rank */}
                    <div className={css.rank}>
                        <p className={css.rank_title}>
                            <Image.Default
                                className={css.rank_title_icon}
                                src="/img/icons/vip.jpg" 
                                alt="vip"
                            />
                            VIP Rank:
                            <span className={css.rank_title_value}>COPPER</span>
                        </p>
                        <ProgressRange 
                            className={css.rank_rank}
                            current={{
                                name: "COPPER",
                                medal: "/img/temp/medal.svg"
                            }}
                            target={{
                                name: "BRONZE",
                                medal: "/img/temp/bronze-medal.svg"
                            }}
                            progress={60}
                        />
                        <Button className={css.rank_viewBtn} circle>
                            View Benefits
                        </Button>
                    </div>

                    {/* Winners */}
                    <div className={css.winners}>
                        <div className={css.winners_content}>
                            <Image.Default 
                                className={css.winners_content_gameOn}
                                src="/img/home/game-on.svg"
                                alt="game on"
                            />
                            <p className={css.winners_content_label}>
                                Winners
                            </p>
                            <p className={css.winners_content_title}>
                                Become a True Winner
                            </p>
                            <p className={css.winners_content_text}>
                                Our players have already claimed their big wins — now it’s your turn!
                            </p>
                            <Button className={css.winners_content_startBtn} circle>
                                Start Winning!
                            </Button>
                        </div>
                        <div className={css.winners_winner}>
                            <div className={css.winners_winner_container}>
                                <Image.Default 
                                    className={css.winners_winner_img}
                                    src="/img/temp/winner.jpg"
                                    alt="winner"
                                />
                                <Image.Default 
                                    className={css.winners_winner_icons}
                                    src="/img/home/winner-icons.png"
                                    alt="winner"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};