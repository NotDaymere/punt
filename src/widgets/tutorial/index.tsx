import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "shared/components/@Buttons/Button";
import { CloseButton } from "shared/components/@Buttons/CloseButton";
import Image from "shared/ui/Image";
import { Modal } from "shared/ui/Modal";
import { loadImage } from "shared/utils/loadImage";
import { tutorialData } from "./lib";
import css from "./tutorial.module.scss";

export const Tutorial: React.FC = () => {
    const [step, setStep] = React.useState(1);
    const [swiperCore, setSwiperCore] = React.useState<SwiperCore>();

    const nextStep = (close: () => void) => {
        if(step === tutorialData.length) {
            close(); 
            return;
        }
        setStep(Math.min(tutorialData.length, step + 1));
    };

    const tutorial = React.useMemo(() => tutorialData[step - 1], [step]);

    React.useEffect(() => {
        swiperCore?.slideTo(step - 1);
        tutorialData
            .slice(step, step + 2)
            .forEach((item) => loadImage(item.img));
    }, [step]);

    return (
        <Modal className={css.modal_window} transitionCSS={css} name="tutorial" timeout={500}>
            {({ close }) => (
                <div className={css.modal}>
                    <div className={css.modal_head}>
                        <div className={css.modal_head_column}>
                            <p className={css.modal_head_label}>Tutorial</p>
                            <div
                                className={css.modal_head_title}
                                dangerouslySetInnerHTML={{ __html: tutorial?.title }}
                            />
                        </div>
                        <CloseButton className={css.modal_closeBtn} onClick={close} />
                    </div>
                    <div className={css.modal_content}>
                        <Swiper onInit={setSwiperCore} autoHeight>
                            {tutorialData.map((item) => (
                                <SwiperSlide className={css.modal_slide} key={item.title}>
                                    <div
                                        className={css.modal_text}
                                        dangerouslySetInnerHTML={{ __html: item.text }}
                                    />
                                    <Image.Default
                                        className={css.modal_image}
                                        src={item.img}
                                        alt=""
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className={css.modal_footer}>
                        <p className={css.modal_footer_pagination}>
                            <span>{step}</span> of 13
                        </p>
                        <div className={css.modal_footer_controls}>
                            {step < tutorialData.length && (
                                <Button
                                    className={css.modal_footer_btn}
                                    onClick={close}
                                    variant="black"
                                    circle
                                >
                                    Skip
                                </Button>
                            )}
                            <Button
                                className={css.modal_footer_btn}
                                onClick={() => nextStep(close)}
                                variant="white"
                                circle
                            >
                                {tutorialData.length === step ? "Done" : "Continue"}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
};
