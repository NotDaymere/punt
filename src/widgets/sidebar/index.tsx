import React from "react";
import { getSidebarNav } from "./lib/sidebar-nav";
import { NavItem } from "shared/components/NavItem";
import { useLogged } from "shared/temp/useLogged";
import css from "./sidebar.module.scss";

export const Sidebar: React.FC = () => {
    const isLogged = useLogged();

    const nav = React.useMemo(
        () => getSidebarNav(isLogged),
        [isLogged]
    );

    return (
        <aside className={css.aside}>
            <nav className={css.aside_nav}>
                {nav.map((group, id) => (
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