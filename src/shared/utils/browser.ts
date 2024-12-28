export function css<T extends HTMLElement>(element: T, styles: Partial<CSSStyleDeclaration>) {
    Object.assign(element.style, styles);
}

export const enableScroll = (bool: boolean) => {
    css(document.documentElement, { overflow: '', paddingRight: '' });

    if (!bool) {
        let paddingRight = window.innerWidth - document.body.getBoundingClientRect().width + 'px';
        css(document.documentElement, {
            overflow: 'hidden',
            paddingRight,
        });
    }
};

export const executeOnReadyPage = (fn: Function) => {
    if (document.readyState === 'complete') fn();
    else window.addEventListener('load', () => fn());
};

function isTouchDevice() {
    return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0
    );
}
