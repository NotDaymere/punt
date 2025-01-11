import React, { useCallback } from "react";
import css from "./NavItem.module.scss";
import clsx from "clsx";
import Link from "next/link";
import ArrowRightIcon from "shared/icons/ArrowRight.icon";

interface Children {
    name: string;
    href: string;
    icon?: React.FC<any> | string;
    target?: "_blank";
}

export type NavItemProps =  {
    name: string;
    icon?: React.FC<any> | string;
    href?: string;
    target?: "_blank";
    className?: string;
    children?: Children[]
}

export const NavItem: React.FC<NavItemProps> = ({
    name,
    children,
    href,
    target,
    icon: Icon,
    className
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    const renderIcon = useCallback((IconSrc: typeof Icon, className?: string) => (
        <>
            {typeof IconSrc === 'function' && <IconSrc className={className} />}
            {typeof IconSrc === 'string' && <img className={className} src={IconSrc} alt="" />}
        </>
    ), []);

    const Inside = (
        <>
            {renderIcon(Icon, css.link_btn_icon)}
            <span className={css.link_btn_name}>{name}</span>
        </>
    )

    if(!children) {
        return href ?(
            <Link href={href} className={css.link_btn} prefetch={false}>
                {Inside}
            </Link>
        ) : (
            <div className={css.link_btn}>
                {Inside}
            </div>
        ) 
    }

    React.useEffect(() => {
        const dropdownEl = dropdownRef.current;
        if(dropdownEl) {
            dropdownEl.style.height = `${isOpen ? dropdownEl.scrollHeight : 0}px`
        }
    }, [isOpen]);

    return (
        <div className={clsx(css.link, className)}>
            <button 
                className={clsx(css.link_btn)}
                onClick={() => setIsOpen(!isOpen)}
            >
                {Inside}
                <ArrowRightIcon 
                    className={css.link_btn_arrow} 
                    style={{ transform: isOpen ? "rotate(-90deg)" : undefined }} 
                />
            </button>
            <div className={css.link_dropdown} ref={dropdownRef}>
                <div className={css.link_dropdown_inner}>
                    {children.map((link) => (
                        <Link 
                            className={css.link_dropdown_link}
                            href={link.href}
                            key={link.name} 
                            target={link.target}
                        >
                            {renderIcon(link.icon, css.link_dropdown_link_icon)}
                            <span className={css.link_dropdown_link_name}>{link.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};