import React from "react";
import { ContentDescription } from "../02.01-content-description";
import { ContentLuckyWins } from "../02.02-content-lucky-wins";
import { ContentChallenges } from "../02.03-content-challenges";
import { ContentBigWins } from "../02.04-content-big-wins";
import { Navigation } from "shared/components/Navigation";
import css from "./content.module.scss";

const Tabs = {
    DESCRIPTION: "Description",
    LUCKY_WINS: "Lucky wins",
    CHALLENGES: "Challenges",
    BIG_WINS: "Big wins",
} as const;

type TabsType = (typeof Tabs)[keyof typeof Tabs];

export const Content: React.FC = () => {
    const [currentTab, setCurrentTab] = React.useState<TabsType>(Tabs.DESCRIPTION);

    return (
        <div className={css.content}>
            <div className={css.content_nav}>
                <div className="container">
                    <Navigation
                        className={css.content_nav_navigation}
                        activeId={currentTab}
                        data={Object.values(Tabs).map((item) => ({
                            id: item,
                            name: item,
                        }))}
                        onClick={(tab) => setCurrentTab(tab.id as TabsType)}
                    />
                </div>
            </div>
            {currentTab === Tabs.DESCRIPTION && <ContentDescription />}
            {currentTab === Tabs.LUCKY_WINS && <ContentLuckyWins />}
            {currentTab === Tabs.CHALLENGES && <ContentChallenges />}
            {currentTab === Tabs.BIG_WINS && <ContentBigWins />}
        </div>
    );
};
