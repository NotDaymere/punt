import React from "react";
import { useChallengeNav } from "widgets/06-challenge-screens/lib";
import { ChallengeTab } from "widgets/06-challenge-screens/lib/types";
import { challangeMock } from "widgets/06-challenge-screens/mock";
import { ChallengeList } from "entities/challenge";
import { Button } from "shared/components/@Buttons/Button";
import { Navigation } from "shared/components/Navigation";
import { SortChallengesBy } from "shared/components/SortChallengesBy";
import { useInput } from "shared/hooks/use-input";
import SearchIcon from "shared/icons/Search.icon";
import css from "./challenges.module.scss";

export const Challenges: React.FC = () => {
    const { nav, currentTab, changeTab } = useChallengeNav();
    const { typingValue, value, handleValue, setValue } = useInput({ timeout: 1000 });

    return (
        <section className={css.challenge} id="challenges">
            <div className={css.challenge_filters}>
                <div className="container">
                    <div className={css.challenge_filters_wrapper}>
                        <Navigation
                            className={css.challenge_nav}
                            activeId={currentTab}
                            data={nav}
                            onClick={(tab) => changeTab(tab.id as any)}
                        />
                        <div className={css.challenge_filters_right}>
                            <div className={css.input}>
                                <SearchIcon className={css.input_icon} />
                                <input
                                    className={css.input_input}
                                    value={typingValue}
                                    onChange={handleValue}
                                    type="text"
                                    placeholder="Search your game..."
                                />
                            </div>
                            <SortChallengesBy />
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.challenge_content}>
                <div className="container">
                    {currentTab === ChallengeTab.ALL && (
                        <div className={css.challenge_content_wrapper}>
                            <ChallengeList
                                className={css.challenge_content_list}
                                data={challangeMock}
                                onJoin={() => {}}
                            />
                            <p className={css.challenge_displaying}>
                                Displaying 20 of 20 challenges
                            </p>
                            <Button className={css.challenge_loadMore} circle>
                                Load More
                            </Button>
                        </div>
                    )}
                    {currentTab === ChallengeTab.COMPLETED && (
                        <div className={css.challenge_content_wrapper}>
                            <ChallengeList
                                className={css.challenge_content_list}
                                data={challangeMock}
                                claimed
                            />
                            <p className={css.challenge_displaying}>
                                Displaying 20 of 20 challenges
                            </p>
                            <Button className={css.challenge_loadMore} circle>
                                Load More
                            </Button>
                        </div>
                    )}
                    {currentTab === ChallengeTab.MINE && (
                        <div className={css.challenge_content_wrapper}>
                            <ChallengeList
                                className={css.challenge_content_list}
                                data={challangeMock.slice(0, 2)}
                            />
                            <p className={css.challenge_displaying}>Displaying 2 of 2 challenges</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
