import React from "react";
import { GeneralPassword } from "../01.01-general-password";
import { GeneralInformation } from "../01.02-general-information";
import { UploadPicture } from "shared/components/UploadPicture";
import { Switcher } from "shared/components/Switcher";
import css from "./general.module.scss";

const General: React.FC = () => {
    return (
        <div className={css.general}>
            <div className={css.general_inner}>
                {/* Picture */}
                <div className={css.general_picture}>
                    <h3 className={css.general_title}>Profile picture</h3>
                    <p className={css.general_text}>
                        We recommended an image of at least 800x800. Gifs work too.
                    </p>
                    <UploadPicture
                        className={css.general_upload}
                        onDelete={() => {}}
                        onUpload={() => {}}
                    />
                </div>
                {/* Pass */}
                <GeneralPassword />
                {/* Privacy */}
                <div className={css.general_privacy}>
                    <h3 className={css.general_title}>Privacy & Address</h3>
                    <div className={css.general_privacy_toggler}>
                        Enable Private Mode
                        <Switcher />
                    </div>
                </div>
                {/* Main info */}
                <GeneralInformation />
            </div>
        </div>
    );
};

export default General;
