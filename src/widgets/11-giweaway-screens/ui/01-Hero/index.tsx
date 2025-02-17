import React from "react";
import { Button } from "shared/components/@Buttons/Button";
import { Breadcrumbs } from "shared/components/Breadcrumbs";
import { Navigation } from "shared/components/Navigation";
import { Title } from "shared/components/Title";
import { useTabs } from "shared/hooks/useTabs";
import Image from "shared/ui/Image";
import { useModals } from "shared/ui/Modal";
import css from "./Hero.module.scss";
import { GIVEAWAYS_CREATE_CONST } from "widgets/11-giweaway-screens/lib";

enum GiveawayTabsEnum {
    ACTIVE = "Active",
    FINISHED = "Finished",
}

export const Hero: React.FC = () => {
    const modals = useModals();

    const tabs = useTabs(
        [
            { id: GiveawayTabsEnum.ACTIVE, name: GiveawayTabsEnum.ACTIVE },
            { id: GiveawayTabsEnum.FINISHED, name: GiveawayTabsEnum.FINISHED },
        ],
        GiveawayTabsEnum.ACTIVE
    );

    const openCreateModal = () => {
        modals.open(GIVEAWAYS_CREATE_CONST);
    }

    return (
        <div className={css.hero}>
            <div className="container">
                <div className={`${css.hero_wrapper} hat`}>
                    <Breadcrumbs
                        navigation={[{ name: "Home Page", href: "/" }, { name: "Giveaways" }]}
                    />
                    <div className={css.hero_title_container}>
                        <Title.V2 className={css.hero_title}>Giveaways</Title.V2>
                        <Image.Default
                            className={css.hero_title_join}
                            src="/img/figures/join-game.svg"
                            alt="join the game"
                        />
                    </div>
                    <div className={css.hero_bottom}>
                        <Navigation
                            className={css.hero_nav}
                            activeId={tabs.currentTab}
                            data={tabs.nav}
                            onClick={(tab) => tabs.changeTab(tab.id as any)}
                        />
                        <Button className={css.hero_btn} onClick={openCreateModal} circle>
                            Create New
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
