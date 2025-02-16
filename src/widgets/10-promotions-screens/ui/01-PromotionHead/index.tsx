import React from "react";
import { Breadcrumbs } from "shared/components/Breadcrumbs";
import { Navigation } from "shared/components/Navigation";
import { Title } from "shared/components/Title";
import { useInput } from "shared/hooks/use-input";
import { useTabs } from "shared/hooks/useTabs";
import SearchIcon from "shared/icons/Search.icon";
import css from "./PromotionHead.module.scss";
import { SectionInput } from "shared/components/SectionInput";

enum TabEnum {
    LATEST = "Latest Promotions",
    CASINO = "Casino",
    SPORT = "Sport",
}

export const PromotionHead: React.FC = () => {
    const tabs = useTabs(
        [
            { id: TabEnum.LATEST, name: TabEnum.LATEST },
            { id: TabEnum.CASINO, name: TabEnum.CASINO },
            { id: TabEnum.SPORT, name: TabEnum.SPORT },
        ],
        TabEnum.LATEST
    );
    const { typingValue, setValue } = useInput({ timeout: 1000 });

    return (
        <div className={css.head}>
            <div className="container">
                <div className={`${css.head_wrapper} hat`}>
                    <Breadcrumbs
                        navigation={[{ name: "Home Page", href: "/" }, { name: "Promotions" }]}
                    />
                    <Title.V2 className={css.head_title}>Promotions</Title.V2>
                    <div className={css.head_filters}>
                        <div className={css.head_filters_wrapper}>
                            <Navigation
                                className={css.head_filters_nav}
                                activeId={tabs.currentTab}
                                data={tabs.nav}
                                onClick={(tab) => tabs.changeTab(tab.id as any)}
                            />
                            <SectionInput 
                                className={css.head_filters_input}
                                value={typingValue}
                                onChange={setValue}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
