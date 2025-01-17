import React from "react";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import clsx from "clsx";
import { headerAccountNav } from "widgets/header/lib";
import { UserInfo } from "shared/components/UserInfo";
import { useClickOutside } from "shared/hooks/use-click-outside";
import ArrowRightIcon from "shared/icons/ArrowRight.icon";
import Image from "shared/ui/Image";
import css from "./header-account.module.scss";

interface Props {}

export const HeaderAccount: React.FC<Props> = (props) => {
    const [activeMenu, setActiveMenu] = React.useState(false);
    const nodeRef = React.useRef<HTMLDivElement>(null);
    const ref = useClickOutside(() => setActiveMenu(false));

    const toggleMenu = () => setActiveMenu(!activeMenu);

    return (
        <div className={clsx(css.account, activeMenu && css._active)} ref={ref}>
            <button className={css.account_btn} onClick={toggleMenu}>
                <UserInfo img="/img/temp/user.jpg" username="VTRAIN83" name="Linda" />
                <ArrowRightIcon
                    className={css.account_btn_arrow}
                    style={{ transform: activeMenu ? "rotate(-90deg)" : "" }}
                />
            </button>
            <CSSTransition
                classNames={css}
                in={activeMenu}
                nodeRef={nodeRef}
                timeout={250}
                unmountOnExit
                mountOnEnter
            >
                <div className={css.account_menu} ref={nodeRef}>
                    {headerAccountNav.map((item) => (
                        <Link
                            className={css.account_menu_item}
                            href={item.href}
                            key={item.name}
                            prefetch={false}
                        >
                            <Image.Default src={item.icon} alt="" />
                            <span>{item.name}</span>
                        </Link>
                    ))}
                    <button className={css.account_menu_item}>
                        <Image.Default src="/img/icons/account-logout.svg" alt="" />
                        <span>Logout</span>
                    </button>
                </div>
            </CSSTransition>
        </div>
    );
};
