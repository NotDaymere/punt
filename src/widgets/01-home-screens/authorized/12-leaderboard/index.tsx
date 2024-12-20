import React from "react";
import { Title } from "shared/components/Title";
import { Tabs } from "shared/components/Tabs";
import { LeaderList } from "entities/leaders";
import PodiumFrameIcon from "shared/icons/PodiumFrame.icon";
import { PodiumCenter } from "../12.02-podium-center";
import { PodiumSide } from "../12.01-podium-side";
import LightIcon from "shared/icons/Light.icon";
import css from "./leaderboard.module.scss";

export const Leaderboard: React.FC = () => {
    const [active, setActive] = React.useState({ name: "Daily", value: 'daily' });
    
    return (
        <section className={css.leaderboard} id="leaderboard">
            <div className={css.leaderboard_back}>
                <LightIcon />
            </div>
            <div className="container">
                <PodiumFrameIcon 
                    id="podium-frame-icon"
                    style={{ 
                        opacity: 0,
                        width: 0,
                        height: 0,
                        zIndex: -1,
                        position: "absolute",
                        left: -9999,
                        top: -9999,
                        pointerEvents: "none"
                    }}
                />
                <div className={css.leaderboard_header}>
                    <Title 
                        text="Leaderboard" 
                    />
                    <Tabs 
                        data={[
                            { name: "Daily", value: 'daily' },
                            { name: "Monthly", value: 'monthly' }
                        ]}
                        value={active}
                        onChange={(value) => setActive(value as any)}
                    />
                </div>
                <div className={css.podium}>
                    <div className={css.podium_item}>
                        <PodiumSide 
                            name="highroller88"
                            prize="10 000.00"
                            img="/img/temp/leader-2.jpg"
                            place={2}
                        />
                    </div>
                    <div className={css.podium_item}>
                        <PodiumCenter 
                            name="lucky_player" 
                            prize="20 000.00"
                            img="/img/temp/leader-1.jpg"
                        />
                    </div>
                    <div className={css.podium_item}>
                        <PodiumSide 
                            name="spin_master"
                            prize="5000.00"
                            img="/img/temp/leader-3.jpg"
                            place={3}
                        />
                    </div>
                </div>
                <LeaderList 
                    className={css.leaderboard_list} 
                />
            </div>
        </section>
    );
};