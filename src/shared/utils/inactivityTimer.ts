type IFunction = () => void;

export function inactivityTimer() {
    let t: NodeJS.Timeout | null = null;
    let func: IFunction | null = null;
    let timer: number | null = null;

    const clear = () => {
        if(t) {
            clearTimeout(t);
            t = null;
        }
    };

    const reset = () => {
        clear();
        if(func && timer) {
            t = setTimeout(func, timer);
        }
    }

    const start = (fn: () => void, timeout: number) => {
        func = fn;
        timer = timeout;
        reset();
        document.addEventListener("mousemove", reset);
        document.addEventListener("keypress", reset);
        document.addEventListener("touchmove", reset);
        window.addEventListener("blur", clear);
        window.addEventListener("focus", reset);
    };

    const destroy = () => {
        clear();
        document.removeEventListener("mousemove", reset);
        document.removeEventListener("keypress", reset);
        document.removeEventListener("touchmove", reset);
        window.removeEventListener("blur", clear);
        window.removeEventListener("focus", reset);
    };

    return { start, destroy }
}