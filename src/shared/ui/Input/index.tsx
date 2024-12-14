import React from 'react';
import clsx from 'clsx';
import css from './input.module.scss';

type Props = {
    error?: string | boolean | number | null;
    legend?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({ className, error, legend, placeholder, ...props }) => {
    return (
        <div
            className={clsx(
                css.input,
                typeof error === 'string' && css._error,
                legend && css._legend,
                className
            )}
        >
            <div className={css.input_wrapper}>
                <input 
                    {...props} 
                    placeholder={!legend ? placeholder : undefined}
                    className={css.input_field} 
                />
                {legend && placeholder && (
                    <p className={clsx(
                        css.input_legend,
                        props.value !== "" && css._active
                    )}>
                        {placeholder}
                    </p>
                )}
            </div>
            {typeof error === 'string' && (
                <p className={css.input_error}>{error}</p>
            )}
        </div>
    );
};
