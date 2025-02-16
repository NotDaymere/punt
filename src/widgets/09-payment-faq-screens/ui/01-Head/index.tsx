import React from "react";
import css from "./Head.module.scss";
import { Breadcrumbs } from "shared/components/Breadcrumbs";
import { Title } from "shared/components/Title";

export const Head: React.FC = () => {
    return (
        <div className={css.head}>
            <div className="container">
                <div className={`${css.head_wrapper} hat`}>
                    <Breadcrumbs 
                        className={css.head_breadcrumbs} 
                        navigation={[
                            { name: "Home Page", href: "/" },
                            { name: "Payment FAQ" }
                        ]} 
                    />
                    <Title.V2 className={css.head_title}>
                        Payment FAQ
                    </Title.V2>
                </div>
            </div>
        </div>
    );
};