import React from "react";
import css from "./InfoContent.module.scss";

interface Props {
    content: string;
    note?: string;
}

export const InfoContent: React.FC<Props> = ({ content, note }) => {
    return (
        <div className={css.content}>
            <div className={css.content_wrapper}>
                {note && (
                    <div className={css.content_note}>
                        <div className={css.content_note_lights} />
                        <div className={css.content_note_lights} />
                        <div className={css.content_note_lights} />
                        <div className={css.content_note_lights} />
                        <div className={css.content_note_box}>
                            <div className={css.content_container}>
                                <div
                                    className={css.content_content}
                                    dangerouslySetInnerHTML={{ __html: note }}
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className={css.content_container}>
                    <div
                        className={css.content_content}
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </div>
        </div>
    );
};
