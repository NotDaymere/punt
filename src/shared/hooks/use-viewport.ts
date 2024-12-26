import React from "react";

export function useViewport(timeout = 0) {
    const [screenWidth, setScreenWidth] = React.useState(0 );
    const callbackRef = React.useRef<NodeJS.Timeout>(null);
    const lastCallback = React.useRef<() => void>(null);

    const resize = () => {
        if(callbackRef.current) {
            clearTimeout(callbackRef.current);
        }
        lastCallback.current = () => setScreenWidth(window.innerWidth);

        callbackRef.current = setTimeout(
            () => {
                if(lastCallback.current) {
                    lastCallback.current();
                    lastCallback.current = null;
                    callbackRef.current = null;
                }
            },
            timeout
        );
    };

    React.useEffect(() => {
        resize()
    }, []);

    React.useEffect(() => {
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    });

    return { screenWidth };
}