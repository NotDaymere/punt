import gsap from "gsap";

export function getTimeline(trigger: HTMLElement | null, options: ScrollTrigger.Vars = {}) {
    return gsap.timeline({
        scrollTrigger: {
            trigger,
            start: "start 65%",
            once: true,
            invalidateOnRefresh: true,
            ...options,
        },
    });
}

export function getTitleAnimationOptions(options: any = {}) {
    return {
        ease: "back.out(3)",
        duration: 1,
        scale: 1,
        opacity: 1,
        stagger: 0.05,
        ...options
    };
}
