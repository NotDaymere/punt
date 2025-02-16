import React, { useEffect, useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/use-click-outside';
import clsx from 'clsx';
import css from './accordeon.module.scss';

/* Children */

enum DisplayNames {
    BUTTON = 'ACCORDEON_BUTTON',
    CONTENT = 'ACCORDEON_CONTENT',
}

interface SubChildren {
    children: React.ReactNode;
}

const Button: React.FC<SubChildren> = ({ children }) => {
    return children;
};

const Content: React.FC<SubChildren> = ({ children }) => {
    return children;
};

Button.displayName = DisplayNames.BUTTON;
Content.displayName = DisplayNames.CONTENT;

/* Accordeon */

type AccordeonChildrenProps = {
    active: boolean;
};

type AccordeonChildren =
    | ((props: AccordeonChildrenProps) => React.ReactNode)
    | React.ReactNode;

interface AccordeonProps {
    children: AccordeonChildren;
    initialOpen?: boolean;
    closeOnClickOut?: boolean;
    smooth?: boolean;
    disabled?: boolean;
    className?: string;
}

const Accordeon: React.FC<AccordeonProps> = ({
    children,
    initialOpen = false,
    smooth = false,
    disabled = false,
    closeOnClickOut = false,
    className,
}) => {
    const [active, setActive] = useState(initialOpen);
    const contentRef = useRef<HTMLDivElement>(null);

    const rootRef = useClickOutside(() => closeOnClickOut && setActive(false));

    const toggle = () => {
        if (disabled === false) {
            setActive(!active);
        }
    };

    useEffect(() => {
        if (smooth && contentRef.current) {
            const el = contentRef.current;
            el.style.height = `${active ? el.scrollHeight : 0}px`;
        }
    });

    const childrenArray = React.Children.toArray(
        typeof children === 'function'
            ? (children({ active }) as any).props.children
            : children
    );

    const button = childrenArray.find(
        (child: any) =>
            child.type && child.type.displayName === DisplayNames.BUTTON
    );
    const content = childrenArray.find(
        (child: any) =>
            child.type && child.type.displayName === DisplayNames.CONTENT
    );

    return (
        <div
            className={clsx(
                css.accordeon,
                disabled && css.accordeon_disabled,
                smooth && css.accordeon_smooth,
                active && "accordeon-active",
                className
            )}
            ref={rootRef}
        >
            <div className={css.button} onClick={toggle}>
                {button}
            </div>
            {((!smooth && active) || smooth) && (
                <div className={css.content} ref={contentRef}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default Object.assign(Accordeon, { Button, Content });
