import React from "react";
import Link from "next/link";
import clsx from "clsx";
import css from "./Breadcrumbs.module.scss";

interface BreadcrumbsItem {
    name: string;
    href?: string;
}

interface Props {
    navigation: BreadcrumbsItem[];
    className?: string;
}

export const Breadcrumbs: React.FC<Props> = ({ navigation, className }) => {
    return (
        <div className={clsx(css.breadcrumbs, className)}>
            {navigation.map((link) => (
                <React.Fragment key={link.name + link.href}>
                    {link.href && (
                        <Link className={css.breadcrumbs_link} href={link.href} prefetch={false}>
                            {link.name}
                        </Link>
                    )}
                    {!link.href && (
                        <p className={css.breadcrumbs_link}>{link.name}</p>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};
