import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { WalletModal } from "widgets/wallet";
import { Button } from "shared/components/@Buttons/Button";
import { IconButton } from "shared/components/@Buttons/IconButton";
import { Progress } from "shared/components/Progress";
import NotificationIcon from "shared/icons/Notification.icon";
import SearchIcon from "shared/icons/Search.icon";
import WalletIcon from "shared/icons/Wallet.icon";
import { useLogged } from "shared/temp/useLogged";
import Image from "shared/ui/Image";
import { HeaderAccount, HeaderBalance } from "./ui";
import css from "./header.module.scss";

export const Header: React.FC = () => {
    const router = useRouter();
    const isLogged = useLogged();
    const [activeWallet, setActiveWallet] = React.useState(false);

    if (!isLogged) {
        return (
            <header className={css.header} id="header">
                <div className="container">
                    <div className={css.header_wrapper}>
                        <Link className={css.header_logo} href="/">
                            <Image.Default src="/img/logo.png" alt="logo" />
                        </Link>
                        <div className={css.header_auth}>
                            <div className={css.header_stars}>
                                <Image.Default src="/img/header-stars.png" alt="" />
                            </div>
                            <Button
                                onClick={() =>
                                    router.push({
                                        pathname: router.asPath,
                                        query: "logged=yes",
                                    })
                                }
                                variant="black"
                                circle
                            >
                                Sign In
                            </Button>
                            <Button variant="white" circle>
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

    return (
        <header className={css.header} id="header">
            <div className="container">
                <div className={css.header_wrapper}>
                    {/* Logo */}
                    <Link className={css.header_logo} href="/">
                        <Image.Default src="/img/logo.png" alt="logo" />
                    </Link>

                    {/* Progress */}
                    <div className={css.header_progress}>
                        <div className={css.header_progress_inner}>
                            <Progress medal="/img/temp/medal.svg" rank="COPPER" progress={60} />
                        </div>
                    </div>

                    {/* Balance */}
                    <div className={css.header_balance}>
                        <HeaderBalance />
                        <Button
                            className={css.header_balance_wallet}
                            onClick={() => setActiveWallet(true)}
                            variant="green"
                        >
                            <WalletIcon /> Wallet
                        </Button>
                    </div>

                    {/* Account */}
                    <div className={css.header_account}>
                        <IconButton className={css.header_notification} icon={NotificationIcon} />
                        <IconButton className={css.header_search} icon={SearchIcon} />
                        <HeaderAccount />
                    </div>
                </div>
            </div>
            <WalletModal active={activeWallet} onClose={() => setActiveWallet(false)} />
        </header>
    );
};
