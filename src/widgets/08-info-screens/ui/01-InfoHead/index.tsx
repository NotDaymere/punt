import React from "react";
import { Breadcrumbs, BreadcrumbsItem } from "shared/components/Breadcrumbs";
import { Title } from "shared/components/Title";
import css from "./InfoHead.module.scss";
import { Button } from "shared/components/@Buttons/Button";

interface Props {
    title: string;
    lastUpdate: string;
    breadcrumbs: BreadcrumbsItem[];
}

export const InfoHead: React.FC<Props> = ({ breadcrumbs, lastUpdate, title }) => {
    return (
        <div className={css.head}>
            <div className="container">
                <div className={`${css.head_wrapper} hat`}>
                    <Breadcrumbs className={css.head_breadcrumbs} navigation={breadcrumbs} />
                    <Title.V2 className={css.head_title}>{title}</Title.V2>
                    <div className={css.head_row}>
                        <p className={css.head_lastUpdate}>Date of last update: <span>{lastUpdate}</span></p>
                        <Button className={css.head_btn} circle>
                            Download as PDF
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
