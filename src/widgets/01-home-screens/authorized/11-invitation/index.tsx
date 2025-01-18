import React from "react";
import { Button } from "shared/components/@Buttons/Button";
import css from "./invitation.module.scss";

export const Invitation: React.FC = () => {
    return (
        <section className={css.invitation} id="invitation">
            <div className="container">
                <div className={css.invitation_banner}>
                    <div className={css.invitation_content}>
                        <h2 className={css.invitation_title}>
                            Invite 3 friends and earn{' '}
                            <span>FREE SC and GC</span>
                        </h2>
                        <Button className={css.invitation_btn}>
                            Invite
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};