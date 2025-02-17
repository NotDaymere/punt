import React from "react";
import { CloseButton } from "shared/components/@Buttons/CloseButton";
import { Modal, useModalContext } from "shared/ui/Modal";
import css from "./notifications.module.scss";
import MarkIcon from "shared/icons/Mark.icon";
import { SortBy } from "shared/components/SortBy";

export const Notifications: React.FC = () => {
    const togglePartials = React.useCallback((active: boolean) => {
        if (active) {
            document.body.classList.add("partials-above");
        } else {
            document.body.classList.remove("partials-above");
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
                                <CloseButton
                                    className={css.modal_head_closeBtn}
                                    onClick={close}
                                />
                            </div>
                            <div className={css.modal_head_right}>
                                <p className={css.modal_mark_item}>
                                    <MarkIcon /> Mark all as read
                                </p>
                                <p className={css.modal_mark_item}>
                                    <MarkIcon /> Mark Starred
                                </p>
                            </div>
                        </div>
                        {/* Filters */}
                        <div className={css.modal_filters}>
                            <SortBy 
                                value={{ value: "newest", name: "Newest" }}
                                options={[
                                    { value: "newest", name: "Newest" },
                                    { value: "oldest", name: "Oldest" }
                                ]}
                                onChange={() => {}}
                                label="Sort By:"
                            />
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
};
