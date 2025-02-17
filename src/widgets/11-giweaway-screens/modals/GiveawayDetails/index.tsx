import React from "react";
import clsx from "clsx";
import { NameList } from "widgets/11-giweaway-screens/_components";
import { GIVEAWAYS_DETAILS_CONST } from "widgets/11-giweaway-screens/lib";
import { Button } from "shared/components/@Buttons/Button";
import { CloseButton } from "shared/components/@Buttons/CloseButton";
import { Title } from "shared/components/Title";
import { useToast } from "shared/components/Toast";
import CopyIcon from "shared/icons/Copy.icon";
import Image from "shared/ui/Image";
import { Modal } from "shared/ui/Modal";
import { copy } from "shared/utils/copy";
import css from "./GiveawayDetails.module.scss";
import { GiveawayDetailsRoll } from "../_GiveawayDetailsRoll";

export const GiveawayDetails: React.FC = () => {
    const toast = useToast();
    const [rollActive, setRollActive] = React.useState(false);

    const copyLink = () => {
        copy("https://punt.com/c/65svdz");
        toast.push({
            title: "Success",
            content: "Copied to clipboard",
            duration: 1200,
            type: "success",
        });
    };

    return (
        <Modal
            name={GIVEAWAYS_DETAILS_CONST}
            className={clsx("modal-window", css.modal_window)}
            transitionCSS={{
                enter: "modal-enter",
                enterActive: "modal-enter-active",
                exit: "modal-exit",
                exitActive: "modal-exit-active",
            }}
            hideOnClickOutside
            overflow
        >
            {({ close }) => (
                <div className={clsx("modal-component", css.modal)}>
                    <Title.V2 className={css.modal_title}>Giveaway details</Title.V2>
                    <div className={css.modal_wrapper}>
                        <NameList
                            className={css.modal_names}
                            title="Subscribers"
                            data={[
                                "Badge Blitz",
                                "DawnN",
                                "val3556",
                                "natishap3",
                                "Lynhad",
                                "Evsgramps",
                                "Dwilson389",
                                "Cameron90",
                                "markandkitty",
                                "J24",
                                "markandkitty",
                                "Cameron90",
                                "STV",
                                "GreenWorks",
                                "Desmond",
                                "Kasper",
                            ]}
                        />
                        <div className={css.modal_box}>
                            <Image.Default
                                className={css.modal_box_bg}
                                src="/img/auth/light.png"
                                alt=""
                            />
                            <div className={css.modal_box_content}>
                                <p className={css.modal_box_title}>
                                    You are about to do a<br />
                                    <span>
                                        <span className={css._blue}>1</span>{" "}
                                        <Image.Default src="/img/icons/sc.svg" alt="" />{" "}
                                        <strong>+</strong>{" "}
                                        <span className={css._yellow}>10,000</span>{" "}
                                        <Image.Default src="/img/icons/gc.svg" alt="" />{" "}
                                    </span>
                                    Giveaway
                                </p>
                                <p className={css.modal_box_text}>Number of Winners: 75</p>
                                <p className={css.modal_box_text}>
                                    Total Prize Value: 75{" "}
                                    <Image.Default src="/img/icons/sc.svg" alt="" /> & 750,000{" "}
                                    <Image.Default src="/img/icons/gc.svg" alt="" />
                                </p>
                                <Button
                                    className={css.modal_box_btn}
                                    onClick={() => setRollActive(true)}
                                    variant="green"
                                    circle
                                >
                                    Roll it!
                                </Button>
                            </div>
                            <div className={css.modal_share}>
                                <p className={css.modal_share_title}>Share URL:</p>
                                <p className={css.modal_share_field}>
                                    <span>https://punt.com/c/65svdz</span>
                                    <button onClick={copyLink}>
                                        <CopyIcon />
                                    </button>
                                </p>
                            </div>
                        </div>
                        <NameList className={css.modal_names} title="Winners" data={[]} />
                    </div>
                    <CloseButton className={css.modal_closeBtn} onClick={close} />
                    <GiveawayDetailsRoll 
                        active={rollActive}
                        onClose={() => setRollActive(false)}
                    />
                </div>
            )}
        </Modal>
    );
};
