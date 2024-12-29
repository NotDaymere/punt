import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import qs from "qs";
import { settingsNav } from "widgets/02-settings-screens/lib";
import { SettingTabs } from "widgets/02-settings-screens/lib/settings-nav";
import { Title } from "shared/components/Title";
import ArrowRightMediumIcon from "shared/icons/ArrowRightMedium.icon";
import { executeOnReadyPage } from "shared/utils/browser";
import css from "./settings-layout.module.scss";

const General = dynamic(() => import("../01-general"));
const Offers = dynamic(() => import("../02-offers"));
const Gameplay = dynamic(() => import("../03-gameplay"));
const Signs = dynamic(() => import("../04-signs"));
const Assessment = dynamic(() => import("../05-assessment"));

export const SettingsLayout: React.FC = () => {
    const router = useRouter();

    const currentTab = React.useMemo(() => {
        return (
            settingsNav.find((tab) => tab.id === router.query.tab?.toString().toLowerCase()) ||
            settingsNav[0]
        );
    }, [router.query]);

    const handleChangeTab = (tab: string | undefined) => {
        router.push({ query: qs.stringify({ ...router.query, tab }) }, undefined, {
            shallow: true,
        });
        setTimeout(() => {
            document.body.scrollIntoView({
                block: "start",
            });
        });
    };

    React.useEffect(() => {
        executeOnReadyPage(() => {
            import("../01-general");
            import("../02-offers");
            import("../03-gameplay");
            import("../04-signs");
            import("../05-assessment");
        });
    }, []);

    return (
        <div className={css.layout}>
            <div className={css.layout_container}>
                <Title className={css.layout_title} level={1} text="Settings" />
                <div className={css.layout_wrapper}>
                    <div className={css.layout_sidebar_container}>
                        <div className={css.layout_sidebar}>
                            {settingsNav.map((item) => (
                                <button
                                    className={css.layout_sidebar_item}
                                    disabled={currentTab.id === item.id}
                                    onClick={() => handleChangeTab(item.id)}
                                    key={item.id || item.name}
                                >
                                    {item.name}
                                    <ArrowRightMediumIcon />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className={css.layout_content}>
                        {currentTab.id === SettingTabs.GENERAL && <General />}
                        {currentTab.id === SettingTabs.OFFERS && <Offers />}
                        {currentTab.id === SettingTabs.RESPONSIBLE_SOCIAL_GAMEPLAY && <Gameplay />}
                        {currentTab.id === SettingTabs.RECOGNIZE_THE_SIGNS && <Signs />}
                        {currentTab.id === SettingTabs.SELF_ASSESSMENT && <Assessment />}
                    </div>
                </div>
            </div>
        </div>
    );
};
