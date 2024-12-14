import React from "react";
import Link from "next/link";
import { Header } from "widgets/header";
import { Sidebar } from "widgets/sidebar";
import { PlayFree } from "shared/components/PlayFree";
import Image from "shared/ui/Image";
import css from "./NavLayout.module.scss";

interface Props {
    children: React.ReactNode;
}

const NavLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className={css.nav}>
            <div className={css.nav_wrapper}>
                <div className={css.nav_aside}>
                    <Link className={css.nav_logo} href="/">
                        <Image.Default src="/img/logo.png" alt="logo" />
                    </Link>
                    <div className={css.nav_sidebar}>
                        <Sidebar />
                        <PlayFree className={css.nav_play} />
                    </div>
                </div>
                <div className={css.nav_content}>
                    <Header />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default NavLayout;
