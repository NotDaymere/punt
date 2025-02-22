import React from "react";
import { useGamesNav } from "widgets/04-games-screens";
import { FormDropdown } from "shared/components/FormDropdown";
import { Navigation } from "shared/components/Navigation";
import { SortBy } from "shared/components/SortBy";
import { MediaQuery } from "shared/ui/MediaQuery";
import css from "./Filters.module.scss";

export const Filters: React.FC = () => {
    const { navigation } = useGamesNav();
    const [currentNav, setCurrentNav] = React.useState(navigation[0]);

    const Buttons = React.useMemo(
        () => (
            <div className={css.buttons}>
                <div className={css.buttons_row}>
                    <p className={css.buttons_row_name}>Date Range:</p>
                    <FormDropdown
                        className={css.buttons_dropdown}
                        classNameButton={css.buttons_dropdown_btn}
                        renderButton={() => (
                            <span className={css.buttons_dropdown_btn}>10 Oct- 12 Dec 2024</span>
                        )}
                        renderList={() => (
                            <div className={css.buttons_dropdown_menu}>Require design</div>
                        )}
                    />
                </div>
                <div className={css.buttons_divider} />
                <SortBy
                    className={css.buttons_select}
                    label="Sort by result:"
                    options={[
                        { name: "Newest", value: "newest" },
                        { name: "Oldest", value: "oldest" },
                    ]}
                    placeholder="All"
                    onChange={() => {}}
                    value={null}
                />
            </div>
        ),
        []
    );

    return (
        <div className={css.filters}>
            <div className="container">
                <div className={css.filters_head}>
                    <h2 className={css.filters_head_title}>Games History</h2>
                    <MediaQuery size="min.lg" children={Buttons} />
                </div>
            </div>
            <div className={css.filters_nav_box}>
                <div className="container">
                    <Navigation
                        className={css.filters_nav}
                        activeId={currentNav.id}
                        onClick={(tab) => setCurrentNav(tab)}
                        data={navigation}
                    />
                </div>
            </div>
            <MediaQuery size="max.lg" children={<div className="container">{Buttons}</div>} />
        </div>
    );
};
