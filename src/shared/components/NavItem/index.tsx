import React, { useCallback } from "react";
import clsx from "clsx";
import ArrowRightIcon from "shared/icons/ArrowRight.icon";
import { useModals } from "shared/ui/Modal";
import { NextLink } from "shared/ui/NextLink";
import css from "./NavItem.module.scss";

interface Children {
    name: string;
    href?: string;
    action?: string;
    modal?: string;
    icon?: React.FC<any> | string;
    target?: "_blank";
}

export type NavItemProps = {
    name: string;
    icon?: React.FC<any> | string;
    href?: string;
    target?: "_blank";
    className?: string;
    children?: Children[];
};

export const NavItem: React.FC<NavItemProps> = ({
    name,
    children,
    href,
    icon: Icon,
    className,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    const modals = useModals();

    const renderIcon = useCallback(
        (IconSrc: typeof Icon, className?: string) => (
            <>
                {typeof IconSrc === "function" && <IconSrc className={className} />}
                {typeof IconSrc === "string" && <img className={className} src={IconSrc} alt="" />}
            </>
        ),
        []
    );

    const Inside = (
        <>
            {renderIcon(Icon, css.link_btn_icon)}
            <span className={css.link_btn_name}>{name}</span>
        </>
    );

    React.useEffect(() => {
        const dropdownEl = dropdownRef.current;
        if (dropdownEl) {
            dropdownEl.style.height = `${isOpen ? dropdownEl.scrollHeight : 0}px`;
        }
    }, [isOpen]);

    if (!children) {
        return (
            <NextLink href={href} className={css.link_btn} prefetch={false}>
                {Inside}
            </NextLink>
        );
    }

    return (
        <div className={clsx(css.link, className)}>
            <button className={clsx(css.link_btn)} onClick={() => setIsOpen(!isOpen)}>
                {Inside}
                <ArrowRightIcon
                    className={css.link_btn_arrow}
                    style={{ transform: isOpen ? "rotate(-90deg)" : undefined }}
                />
            </button>
            <div className={css.link_dropdown} ref={dropdownRef}>
                <div className={css.link_dropdown_inner}>
                    {children.map((link) => (
                        <NextLink
                            className={css.link_dropdown_link}
                            href={link.modal ? undefined : link.href}
                            onClick={() => {
                                if(link.modal) {
                                    modals.open(link.modal);
                                }
                            }}
                            key={link.name}
                            target={link.target}
                        >
                            {renderIcon(link.icon, css.link_dropdown_link_icon)}
                            <span className={css.link_dropdown_link_name}>{link.name}</span>
                        </NextLink>
                    ))}
                </div>
            </div>
        </div>
    );
};
