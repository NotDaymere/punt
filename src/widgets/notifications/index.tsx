import React from "react";
import clsx from "clsx";
import { CloseButton } from "shared/components/@Buttons/CloseButton";
import { Checkbox } from "shared/components/Checkbox";
import { FormDropdown } from "shared/components/FormDropdown";
import { SortBy } from "shared/components/SortBy";
import MarkIcon from "shared/icons/Mark.icon";
import { Modal } from "shared/ui/Modal";
import { useNotifyFilter } from "./lib";
import css from "./notifications.module.scss";
import { NotificationItem } from "./ui";

const data = [
    {
        icon: "📩",
        title: "Your documents could not be verified!",
        createdAt: "20 hours ago",
        category: "payment",
        readed: false,
    }, {
        icon: "🎁",
        title: "Congratulations! You've unlocked 100 Free Spins. Click to claim!",
        createdAt: "20 hours ago",
        category: "bonus",
        readed: false,
    }, {
        icon: "🏆",
        title: "Big Win! You just won $500 on Dragon's Treasure.",
        createdAt: "20 hours ago",
        category: "general",
        readed: true,
    }, {
        icon: "🎯",
        title: "Lucky Strike! You hit the jackpot in Mega Slots!",
        createdAt: "20 hours ago",
        category: "general",
        readed: true,
    }, {
        icon: "🤑",
        title: "Your challenge reward has been credited – $100 in Sweep Coins.",
        createdAt: "20 hours ago",
        category: "general",
        readed: true,
    }, {
        icon: "🤑",
        title: "Your challenge reward has been credited – $100 in Sweep Coins.",
        createdAt: "20 hours ago",
        category: "general",
        readed: true,
    }, {
        icon: "🏆",
        title: "Big Win! You just won $500 on Dragon's Treasure.",
        createdAt: "20 hours ago",
        category: "general",
        readed: true,
    }, {
        icon: "🤑",
        title: "Your challenge reward has been credited – $100 in Sweep Coins.",
        createdAt: "20 hours ago",
        category: "general",
        readed: true,
    }
]

export const Notifications: React.FC = () => {
    const filter = useNotifyFilter();

    const togglePartials = React.useCallback((active: boolean) => {
        if (window.innerWidth >= 768) {
            if (active) {
                document.body.classList.add("partials-above");
            } else {
                document.body.classList.remove("partials-above");
            }
        }
    }, []);

    return (
        <Modal
            name="notifications"
            transitionCSS={css}
            className={css.modal_window}
            onEnter={() => togglePartials(true)}
            onExited={() => togglePartials(false)}
            closeOnRouterChange
            hideOnClickOutside
            overflow
        >
            {({ close }) => (
                <div className={css.modal}>
                    <div className={css.modal_head}>
                        {/* Row */}
                        <div className={css.modal_head_row}>
                            <div className={css.modal_head_left}>
                                <p className={css.modal_head_title} data-count={2}>
                                    Notification
                                </p>
                                <CloseButton className={css.modal_head_closeBtn} onClick={close} />
                            </div>
                            <div className={css.modal_head_right}>
                                <button className={css.modal_mark_item}>
                                    <MarkIcon /> Mark all as read
                                </button>
                                <button className={css.modal_mark_item}>
                                    <MarkIcon /> Mark Starred
                                </button>
                            </div>
                        </div>
                        {/* Filters */}
                        <div className={css.modal_filters}>
                            <div className={css.modal_filters_row}>
                                <FormDropdown
                                    className={css.modal_filters_dropdown}
                                    renderButton={() => "Category"}
                                    renderList={(closeDropdown) => (
                                        <div className={css.modal_category}>
                                            {[
                                                "payment",
                                                "redemption",
                                                "registration",
                                                "rollover",
                                                "bonus",
                                            ].map((category) => (
                                                <div
                                                    className={css.modal_category_option}
                                                    key={category}
                                                >
                                                    <Checkbox
                                                        className={css.modal_category_checkbox}
                                                        checked={filter.state.category.includes(
                                                            category
                                                        )}
                                                        onChange={() =>
                                                            filter.toggleCategory(category)
                                                        }
                                                        value={category}
                                                        id={"category-" + category}
                                                        text={category}
                                                    />
                                                </div>
                                            ))}
                                            <button
                                                className={css.modal_category_resetAll}
                                                onClick={() => {
                                                    filter.setCategory([]);
                                                    closeDropdown();
                                                }}
                                            >
                                                Clear All
                                            </button>
                                        </div>
                                    )}
                                />
                                <FormDropdown
                                    className={css.modal_filters_dropdown}
                                    renderButton={() => "Status"}
                                    renderList={(closeDropdown) => (
                                        <React.Fragment>
                                            {["read", "unread", "starred"].map((option) => (
                                                <p
                                                    className={clsx(
                                                        css.modal_status_option,
                                                        option === filter.state.status &&
                                                            css._active
                                                    )}
                                                    onClick={() => {
                                                        filter.setStatus(option);
                                                        closeDropdown();
                                                    }}
                                                    key={option}
                                                >
                                                    {option}
                                                </p>
                                            ))}
                                        </React.Fragment>
                                    )}
                                />
                            </div>
                            <div className={css.modal_filters_separator} />
                            <SortBy
                                className={css.modal_filters_sortBy}
                                value={filter.state.sort}
                                options={[
                                    { value: "newest", name: "Newest" },
                                    { value: "oldest", name: "Oldest" },
                                ]}
                                onChange={(value) => filter.setSortBy(value)}
                                label="Sort By:"
                            />
                        </div>
                    </div>

                    <div className={css.modal_notifications}>
                        {data.map((item, id) => (
                            <NotificationItem
                                category={item.category}
                                createdAt={item.createdAt}
                                icon={item.icon}
                                title={item.title}
                                readed={item.readed} 
                                key={id}
                            />
                        ))}
                    </div>
                </div>
            )}
        </Modal>
    );
};
