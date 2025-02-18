import React from "react";
import { Button } from "shared/components/@Buttons/Button";
import { Breadcrumbs } from "shared/components/Breadcrumbs";
import { Title } from "shared/components/Title";
import css from "./Hero.module.scss";
import Image from "shared/ui/Image";

export const Hero: React.FC = () => {
    return (
        <div className={css.hero}>
            <div className="container">
                <Breadcrumbs
                    navigation={[{ name: "Home Page", href: "/" }, { name: "My Game Play" }]}
                />
                <Title.V2 className={css.hero_title}>My Game Play</Title.V2>
                <div className={css.hero_row}>
                    <ul className={css.hero_info}>
                        <li className={css.hero_info_item}>
                            <p className={css.hero_info_title}>Total Games Played</p>
                            <p className={css.hero_info_value}>10</p>
                        </li>
                        <li className={css.hero_info_item}>
                            <p className={css.hero_info_title}>Win Rate</p>
                            <p className={css.hero_info_value}>
                                34<span>%</span>
                            </p>
                        </li>
                        <li className={css.hero_info_item}>
                            <p className={css.hero_info_title}>Total Wins</p>
                            <p className={css.hero_info_value}>8</p>
                        </li>
                    </ul>
                    <div className={css.hero_content}>
                        <Image.Default 
                            className={css.hero_content_suits}
                            src="/img/mgp/text-suits.png"
                            alt=""
                        />
                        <Image.Default 
                            className={css.hero_content_stars}
                            src="/img/mgp/stars.png"
                            alt=""
                        />
                        <p className={css.hero_content_text}>
                            <span>Ready to cash out your rewards?</span> Withdraw your available
                            funds now!
                        </p>
                        <Button className={css.hero_content_btn} variant="green" circle>
                            Claim Rewards
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
