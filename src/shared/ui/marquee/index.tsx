import React, { useEffect, useRef } from 'react';
import { MarqueeConfig, Marquee as MarqueeInstance } from './lib';
import css from './marquee.module.scss';
import clsx from 'clsx';

type Props = {
    children: React.ReactNode;
    className?: string;
} & MarqueeConfig;

export const Marquee: React.FC<Props> = ({ children, className, ...options }) => {
    const wrapperRef = useRef<HTMLUListElement>(null);
    const instanceRef = useRef<MarqueeInstance>(null);

    useEffect(() => {
        if (wrapperRef.current) {
            instanceRef.current = new MarqueeInstance(
                wrapperRef.current,
                options
            );

            return () => instanceRef.current?.destroy();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        instanceRef.current?.toConfig(options);
    }, [options]);

    return (
        <div className={clsx(
            css.marquee,
            css['_' + (options.direction || "ltr")], 
            className
        )}>
            <ul className={css.marquee_wrapper} ref={wrapperRef}>
                <li className={css.marquee_item}>{children}</li>
                <li className={css.marquee_item}>{children}</li>
            </ul>
        </div>
    );
};
