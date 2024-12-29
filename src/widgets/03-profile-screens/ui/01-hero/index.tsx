import React from "react";
import { Button } from "shared/components/@Buttons/Button";
import { Breadcrumbs } from "shared/components/Breadcrumbs";
import { ProgressRange } from "shared/components/ProgressRange";
import { Title } from "shared/components/Title";
import { useToast } from "shared/components/Toast";
import CopyIcon from "shared/icons/Copy.icon";
import WalletIcon from "shared/icons/Wallet.icon";
import Image from "shared/ui/Image";
import { copy } from "shared/utils/copy";
import css from "./hero.module.scss";

export const Hero: React.FC = () => {
    const toast = useToast();

    const handleCopy = () => {
        copy("2453896134");
        toast.push({
            title: "Copy to clipboard",
            content: "ID copied successfully.",
            type: "success",
            duration: 1500,
        });
    };

    return (
        <section className={css.hero} id="hero">
            <div className="container">
                <div className={css.hero_wrapper}>
                    <Breadcrumbs
                        navigation={[{ name: "Home Page", href: "/" }, { name: "Profile" }]}
                    />
                    <div className={css.hero_header}>
                        <Title className={css.hero_header_title} level={1} text="Profile" />
                        <Button
                            className={css.hero_header_btn}
                            href="/settings"
                            component="a"
                            circle
                        >
                            Settings
                        </Button>
                    </div>
                    <div className={css.hero_info}>
                        {/* Profile */}
                        <div className={css.profile}>
                            <div className={css.profile_header}>
                                <div className={css.profile_header_img}>
                                    <Image.Default src="/img/temp/linda.jpg" alt="" />
                                </div>
                                <p className={css.profile_header_name}>Linda</p>
                                <p className={css.profile_header_verified}>
                                    <Image.Default src="/img/icons/tick-circle.svg" alt="" />{" "}
                                    Verified
                                </p>
                                <div className={css.profile_header_id}>
                                    ID 2453896134
                                    <button
                                        className={css.profile_header_id_copy}
                                        onClick={handleCopy}
                                    >
                                        <CopyIcon />
                                    </button>
                                </div>
                            </div>
                            <div className={css.profile_balance}>
                                <p className={css.profile_balance_title}>Your Balance</p>
                                <div className={css.profile_balance_row}>
                                    <div className={css.profile_balance_list}>
                                        <div className={css.profile_balance_sc}>
                                            <Image.Default src="/img/icons/sc.svg" alt="" /> 200.00
                                        </div>
                                        <div className={css.profile_balance_gc}>
                                            <Image.Default src="/img/icons/gc.svg" alt="" /> 20.00
                                        </div>
                                    </div>
                                    <Button className={css.profile_balance_wallet} variant="green">
                                        <WalletIcon /> Wallet
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {/* Rank */}
                        <div className={css.rank}>
                            <div className={css.rank_header}>
                                <div className={css.rank_header_img}>
                                    <Image.Default src="/img/temp/rank.jpg" alt="" />
                                </div>
                                <p className={css.rank_header_title}>VIP Rank:</p>
                                <p className={css.rank_header_rank}>COPPER</p>
                                <Button className={css.rank_header_btn} circle>
                                    View Benefits
                                </Button>
                            </div>
                            <ProgressRange
                                className={css.rank_rank}
                                current={{
                                    name: "COPPER",
                                    medal: "/img/temp/medal.svg",
                                }}
                                target={{
                                    name: "BRONZE",
                                    medal: "/img/temp/bronze-medal.svg",
                                }}
                                progress={60}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
