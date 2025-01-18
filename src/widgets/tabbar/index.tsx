import React from "react";
import { createPortal } from "react-dom";
import { useLogged } from "shared/temp/useLogged";
import Link from "next/link";
import Image from "shared/ui/Image";
import WalletIcon from "shared/icons/Wallet.icon";
import css from "./tabbar.module.scss";
import "./tabbar.global.scss"

const Tabbar: React.FC = () => {
    const isLogged = useLogged();

    if (typeof document === "undefined") {
        return null;
    }

    return createPortal(
        <div className={css.tabbar}>
            <div className={css.tabbar_inner}>
                <div className={css.tabbar_tabs}>
                    <Link 
                        className={css.tabbar_tabs_item} 
                        href="/"
                    >
                        <Image.Default src="/img/icons/sidebar-games-featured.svg" alt="" />
                        <span>Menu</span>
                    </Link>
                    <Link 
                        className={`${css.tabbar_tabs_item} ${css._active}`} 
                        href="/"
                    >
                        <Image.Default src="/img/icons/sidebar-social-casino.svg" alt="" />
                        <span>Casino</span>
                    </Link>
                    {isLogged ? (
                        <button className={css.tabbar_wallet}>
                            <WalletIcon />
                            <span>Wallet</span>
                        </button>
                    ) : (
                        <Link 
                            className={css.tabbar_tabs_item} 
                            href="/"
                        >
                            <Image.Default src="/img/icons/sidebar-sports.svg" alt="" />
                            <span>Sports</span>
                        </Link>
                    )}
                    <Link 
                        className={css.tabbar_tabs_item} 
                        href="/"
                    >
                        <Image.Default src="/img/icons/sidebar-games-slot.svg" alt="" />
                        <span>Games</span>
                    </Link>
                    <Link 
                        className={css.tabbar_tabs_item} 
                        href="/"
                    >
                        <Image.Default src="/img/icons/sidebar-lives-support.svg" alt="" />
                        <span>Support</span>
                    </Link>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Tabbar;
