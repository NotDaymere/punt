import React, { useEffect, useState } from 'react';

const Sizes = {
    'min.xs': '376px',
    'min.sm': '565px',
    'min.md': '768px',
    'min.lg': '991px',
    'min.xl': '1124px',
    'min.xxl': '1320px',
    "max.xs": '375.98px',
    "max.sm": '564.98px',
    "max.md": '767.98px',
    "max.lg": '990.98px',
    "max.xl": '1123.98px',
    "max.xxl": '1319.98px',
};


interface MediaQueryProps {
    size: keyof typeof Sizes;
    children: React.ReactNode;
    reserve?: React.ReactNode | null;
    onUpdate?: (isMatch: boolean) => void;
}

export const MediaQuery: React.FC<MediaQueryProps> = ({
    children,
    size,
    reserve = null,
    onUpdate,
}) => {
    const [isRender, setRender] = useState(false);

    useEffect(() => {
        const condition = size.startsWith('max') ? 'max-width' : 'min-width';
        const breakpoint = window.matchMedia(`(${condition}: ${Sizes[size]})`);

        setRender(breakpoint.matches);

        const upd = (ev: MediaQueryListEvent) => {
            onUpdate?.(ev.matches);
            setRender(ev.matches);
        };

        breakpoint.addEventListener('change', upd);

        return () => breakpoint.removeEventListener('change', upd);
    }, [size, onUpdate]);

    return isRender ? <>{children}</> : reserve;
};