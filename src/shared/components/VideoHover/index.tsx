import React from "react";
// import css from "./VideoHover.module.scss";

interface Props {
    src: string;
    className?: string;
}

export const VideoHover: React.FC<Props> = ({
    src,
    className
}) => {
    const [active, setActive] = React.useState(false);
    const videoRef = React.useRef<HTMLVideoElement>(null);

    React.useEffect(() => {
        const video = videoRef.current;

        if(video) {
            if(active && video.paused) video.play();
            if(!active && !video.paused) video.pause()
        }
    }, [active]);

    return (
        <video 
            className={className}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            ref={videoRef}
            src={src}
            playsInline
            muted
        />
    );
};