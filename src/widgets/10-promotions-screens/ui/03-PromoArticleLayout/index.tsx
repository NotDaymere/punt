import React from "react";
import { PromotionItem } from "entities/promotions";
import { Button } from "shared/components/@Buttons/Button";
import { Breadcrumbs } from "shared/components/Breadcrumbs";
import { Title } from "shared/components/Title";
import ArrowRightMediumIcon from "shared/icons/ArrowRightMedium.icon";
import Image from "shared/ui/Image";
import css from "./PromoArticleLayout.module.scss";

export const PromoArticleLayout = () => {
    return (
        <div className={css.layout}>
            <div className="container">
                <div className={`${css.layout_header} hat`}>
                    <Breadcrumbs
                        navigation={[
                            { name: "Home Page", href: "/" },
                            { name: "Promotions", href: "/promotions" },
                            { name: "Recognize the Signs" },
                        ]}
                    />
                    <Button
                        className={css.layout_backBtn}
                        href="/promotions"
                        component="a"
                        variant="white"
                    >
                        <ArrowRightMediumIcon />
                        Back
                    </Button>
                </div>
            </div>
            <div className={css.layout_wrapper}>
                <div className={css.layout_content}>
                    <div className={css.layout_content_container}>
                        <div className={css.layout_content_image}>
                            <Image.Default
                                onDragStart={(ev) => ev.preventDefault()}
                                src="/img/temp/promotion-1.jpg"
                                alt=""
                            />
                        </div>
                        <p className={css.layout_content_deadline}>
                            December 20, 2024 - December 27, 2024
                        </p>
                        <Title.V2 level={1} className={css.layout_content_title}>
                            Conquer the Casino!
                        </Title.V2>
                        <div className={css.layout_content_blocks}>
                            <p>
                                Try out the latest and greatest Casino games on Stake and you could
                                win a share of $50,000!
                            </p>
                            <p>
                                Every week, Conquer the Casino will spotlight 10+ games from the
                                newest additions to our suite and, no matter what type of player you
                                are, we’ve got you covered with two major prizes available on each:
                            </p>
                            <ul>
                                <li>
                                    The BIG WINS prize goes the largest payout on each selected game
                                </li>
                                <li>
                                    The LUCKY WINS prize goes to the highest multiplier on each
                                    selected game
                                </li>
                            </ul>
                            <p>
                                Find your new favourite game today and track your progress on the
                                leaderboards under your slot game as you spin!
                            </p>
                            <h3>Prizes Breakdown</h3>
                            <p>
                                1,000.00{" "}
                                <Image.Default
                                    style={{ width: "1em" }}
                                    src="/img/icons/gc.svg"
                                    alt=""
                                />{" "}
                                – Lucky Win Prize per game
                            </p>
                            <p>
                                3,000.00{" "}
                                <Image.Default
                                    style={{ width: "1em" }}
                                    src="/img/icons/gc.svg"
                                    alt=""
                                />{" "}
                                - Big Win Prize per game
                            </p>
                            <p>
                                3,000.00{" "}
                                <Image.Default
                                    style={{ width: "1em" }}
                                    src="/img/icons/gc.svg"
                                    alt=""
                                />{" "}
                                - Lucky Win from Eddie&apos;s Choice game
                            </p>
                            <p>
                                9,000.00{" "}
                                <Image.Default
                                    style={{ width: "1em" }}
                                    src="/img/icons/gc.svg"
                                    alt=""
                                />{" "}
                                - Big Win from Eddie&apos;s Choice game
                            </p>
                            <h3>Terms and Conditions</h3>
                            <ul>
                                <li>
                                    If the top multiplier on the Lucky Win leaderboard is shared
                                    between multiple players, the Lucky Win prize will be awarded to
                                    the player whose bet amount was higher. If the bet amounts are
                                    still the same, then and only then will the prize be split.
                                </li>
                                <li>
                                    Furthermore, any streamers with ongoing affiliate benefits will
                                    not be eligible to receive Big Win prizes
                                </li>
                                <li>
                                    When browsing the site with the fiat currency view on. It reads
                                    all the crypto values on the screen, and converts it to the live
                                    fiat currency conversion rate. When a player places in the Big
                                    Win&apos;s section, their place is locked in with their payout
                                    crypto value at the time. Due to pricing fluctuations, this can
                                    result in a player&apos;s fiat currency displaying a higher
                                    amount than another due to the difference in the value of the
                                    bet when it was placed, versus the price of the crypto now.
                                </li>
                                <li>
                                    Minimum bet to be eligible for any prize in this promotion is
                                    10c USD or currency equivalent
                                </li>
                                <li>
                                    The winner/s of the Eddie&apos;s Choice game will only be
                                    awarded the dedicated Eddie&apos;s Choice prizes for that week,
                                    not in conjunction with the standard Lucky & Big Win prize for
                                    the other nine games
                                </li>
                                <li>
                                    To receive a Big Win prize, players must achieve a win with a
                                    multiplier of 1x or greater. Any bets with a multiplier less
                                    than 1x will not be eligible for Big Win prizes as they are not
                                    winning bets
                                </li>
                                <li>
                                    Prize pool advertised will be the maximum prize pool based on 10
                                    games, however prize pool may vary given the amount of new games
                                    for that week.
                                </li>
                                <li>
                                    Please note that the leaderboards won’t always rank bets based
                                    on the conditions of this promotion. We recommend referring back
                                    to the terms and conditions if you are unsure why your bet did
                                    not qualify as a winner
                                </li>
                                <li>
                                    This promotion will begin at 5:00 AM (UTC) on the start date and
                                    conclude at 5:00 AM (UTC) on the end date.
                                </li>
                                <li>Available to Stake.com users only</li>
                            </ul>
                        </div>
                        <div className={css.layout_content_btn_box}>
                            <Button className={css.layout_content_btn} variant="green" circle>
                                Conquer the Casino!
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={css.layout_wrapper_side}>
                    <h2 className={css.layout_wrapper_title}>Other Promotion</h2>
                    <div className={css.layout_side_list}>
                        <PromotionItem
                            className={css.layout_side_promo}
                            image="/img/temp/promotion-2.jpg"
                            title="Sports Betting"
                            deadline="Ends at 2:59 PM 12/31/2024"
                            url="/promotions/1"
                        />
                        <PromotionItem
                            className={css.layout_side_promo}
                            image="/img/temp/promotion-3.jpg"
                            title="Stake's Weekly Raffle"
                            deadline="Ends at 2:59 PM 12/31/2024"
                            url="/promotions/1"
                        />
                    </div>
                    <Button className={css.layout_side_seeAll} variant="white" circle>
                        See All Promotions
                    </Button>
                </div>
            </div>
        </div>
    );
};
