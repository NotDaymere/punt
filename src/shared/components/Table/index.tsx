import React from "react";
import css from "./Table.module.scss";
import clsx from "clsx";

interface Props<T> {
    title: string[];
    data: T[];
    renderRow: (item: T, index: number) => React.ReactNode;
    getKey: (item: T, index: number) => string | number;
    className?: string;
    classNameRow?: string;
}

interface PropsColumn {
    children: React.ReactNode;
    className?: string;
}

export function Column(props: PropsColumn) {
    return (
        <div className={clsx(props.className, css.column)}>
            {props.children}
        </div>
    );
}

function Component<T>({
    data,
    getKey,
    renderRow,
    title,
    className,
    classNameRow
}: Props<T>) {
    return (
        <div className={clsx(className, css.table)}>
            <div className={css.table_body}>
                <ul className={clsx(css.table_head, classNameRow)}>
                    {title.map((item) => (
                        <li className={css.table_head_title} key={item}>{item}</li>
                    ))}
                </ul>
                <ul className={css.table_content}>
                    {data.map((item, index) => (
                        <li 
                            className={clsx(
                                css.table_content_item,
                                classNameRow
                            )} 
                            key={getKey(item, index)}
                        >
                           {renderRow(item, index)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Table = Object.assign(Component, { Column });

export { Table };