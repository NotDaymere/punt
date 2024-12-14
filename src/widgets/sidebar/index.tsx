import React from "react";
import Link from "next/link";
import Image from "shared/ui/Image";
import { sidebarNav } from "./lib/sidebar-nav";
import { NavItem } from "shared/components/NavItem";
import css from "./sidebar.module.scss";

export const Sidebar: React.FC = () => {
    const nav = React.useMemo(
        () => sidebarNav,
        []
    );

    return (
        <aside className={css.aside}>
            <nav className={css.aside_nav}>
                {sidebarNav.map((group, id) => (
                    <div className={css.aside_nav_group} key={id}>
                        {group.map((link) => (
                            <NavItem 
                                href={link.href}
                                children={link.children}
                                name={link.name}
                                icon={link.icon}
                                target={link.target}
                                key={link.name}
                            />
                        ))}
                    </div>
                ))}
            </nav>
        </aside>
    );
};