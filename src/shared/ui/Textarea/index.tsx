import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import css from './textarea.module.scss';

type Props = {
    resizeHeight?: boolean;
    error?: string | boolean | number | null;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea: React.FC<Props> = ({
    resizeHeight,
    className,
    error,
    ...props
}) => {
    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (resizeHeight && ref.current) {
            const textarea = ref.current;
            textarea.style.height = '';
            textarea.style.height = textarea.scrollHeight + 'px';
        }
    }, [resizeHeight, props.value, className]);

    return (
        <div
            className={clsx(
                css.textarea,
                typeof error === 'string' && css._error,
                className
            )}
        >
            <textarea {...props} className={css.textarea_field} ref={ref} />
            {typeof error === 'string' && (
                <p className={css.input_error}>{error}</p>
            )}
        </div>
    );
};
