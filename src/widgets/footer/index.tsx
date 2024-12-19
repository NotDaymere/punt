import React from "react";
import { footerData } from "./footer.data";
import Link from "next/link";
import Image from "shared/ui/Image";
import ArrowUpIcon from "shared/icons/ArrowUp.icon";
import css from "./footer.module.scss";

export const Footer: React.FC = () => {
    const handleScrollTop = () => {
        document.documentElement.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    };

    return (
        <footer className={css.footer}>
            <div className={css.footer_container}>
                <div className={css.footer_wrapper}>
                    <div className={css.footer_left}>
                        <Link className={css.footer_logo} href="/">
                            <Image.Default src="/img/logo.png" alt="logo" />
                        </Link>
                        <p className={css.footer_18}>18+ only</p>
                        <p className={css.footer_text}>
                            NO PURCHASE IS NECESSARY to play. PROMOTIONS ARE VOID WHERE PROHIBITED
                            BY LAW. For detailed rules, see <a href="#">Terms of Use</a> &{" "}
                            <a href="#">Sweepstakes Rules</a>. Chanced.com Social Gaming Platform is
                            a play-for-fun website intended for amusement purposes only.
                            Chanced.com's Social Gaming Platform does not offer “real-money
                            gambling” or the opportunity to win real money. Chanced.com Social
                            Gaming Platform is only open to Eligible Participants, who are at least
                            eighteen (18) years old or the age of majority in their jurisdiction
                            (whichever occurs later) at the time of entry.
                        </p>
                    </div>
                    <div className={css.footer_right}>
                        {footerData.map((column) => (
                            <div className={css.footer_column} key={column.title}>
                                <p className={css.footer_column_title}>
                                    {column.title}
                                </p>
                                {column.nav.map((link) => (
                                    <div 
                                        className={css.footer_column_item}
                                        key={link.name + link.href}
                                    >
                                        {link.suptitle && (
                                            <p className={css.footer_column_suptitle}>
                                                {link.suptitle}
                                            </p>
                                        )}
                                        <Link 
                                            className={css.footer_column_link} 
                                            href={link.href}
                                        >
                                            {link.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={css.footer_row}>
                    <p className={css.footer_row_copy}>
                        {new Date().getFullYear()} Punt &copy; All rights reserved.
                    </p>
                    <button 
                        className={css.footer_row_upBtn}
                        onClick={handleScrollTop}
                    >
                        Back to the top <ArrowUpIcon />
                    </button>
                </div>
            </div>
        </footer>
    );
};
