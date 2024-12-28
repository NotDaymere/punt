import React from "react";
import clsx from "clsx";
import UserIcon from "shared/icons/User.icon";
import css from "./UploadPicture.module.scss";

interface Props {
    className?: string;
    onUpload?: (file: File) => void;
    onDelete?: () => void;
}

interface UploadImage {
    old: string | null;
    new: File | null;
}

export const UploadPicture: React.FC<Props> = ({ className, onDelete, onUpload }) => {
    const [image, setImage] = React.useState<UploadImage>({
        new: null,
        old: null,
    });

    const handleUpload = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".jpg,.webp,.png,.gif,.svg";
        input.addEventListener(
            "change",
            async (ev) => {
                const files = (ev.target as HTMLInputElement).files;
                if (files && files.length > 0) {
                    setImage({ ...image, new: files[0] });
                }
                // logic
            },
            { once: true }
        );
        input.click();
    };

    const handleDelete = async () => {
        setImage({ new: null, old: null });
        // logic
    };

    const src = React.useMemo(() => {
        if (image.new) {
            return URL.createObjectURL(image.new);
        }
        return image.new;
    }, [image]);

    return (
        <div className={clsx(css.upload, className)}>
            <div className={clsx(css.upload_img, !src && css._empty)} onClick={handleUpload}>
                {!src ? <UserIcon /> : <img src={src} alt="" />}
            </div>
            {(onDelete || onUpload) && (
                <div className={css.upload_controls}>
                    {onUpload && (
                        <button
                            className={css.upload_controls_btn}
                            onClick={handleUpload}
                            data-type="upload"
                        >
                            Change picture
                        </button>
                    )}
                    {onDelete && (
                        <button
                            className={css.upload_controls_btn}
                            onClick={handleDelete}
                            data-type="deletion"
                        >
                            Delete picture
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};
