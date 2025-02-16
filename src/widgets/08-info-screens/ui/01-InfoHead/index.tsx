import React from "react";
import { Breadcrumbs, BreadcrumbsItem } from "shared/components/Breadcrumbs";
import { Title } from "shared/components/Title";
import { Button } from "shared/components/@Buttons/Button";
import css from "./InfoHead.module.scss";
import clsx from "clsx";

interface Props {
    title: string;
    lastUpdate: string;
    breadcrumbs: BreadcrumbsItem[];
    version?: string;
    download?: string;
    className?: string;
}

export const InfoHead: React.FC<Props> = ({ 
    breadcrumbs, 
    lastUpdate, 
    title,
    download,
    version,
    className
}) => {
    return (
        <div className={clsx(css.head, className)}>
            <div className="container">
                <div className={`${css.head_wrapper} hat`}>
                    <Breadcrumbs className={css.head_breadcrumbs} navigation={breadcrumbs} />
                    <Title.V2 className={css.head_title}>{title}</Title.V2>
                    <div className={css.head_row}>
                        <div className={clsx(css.head_info, !download && css._whiteSpace)}>
                            {version && (
                                <p className={css.head_text}>Version: <span>{version}</span></p>
                            )}
                            <p className={css.head_text}>Date of last update: <span>{lastUpdate}</span></p>
                        </div>
                        {download && (
                            <Button className={css.head_btn} circle>
                                Download as PDF
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
