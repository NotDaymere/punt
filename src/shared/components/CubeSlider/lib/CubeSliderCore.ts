import gsap from "gsap";

type SliderListener = (core: CubeSliderCore) => void;

interface SliderConfig {
    onSlideChange: SliderListener;
    delay: number;
    duration: number;
    direction: "vertical" | "horizontal";
}

type SliderCustomOptions = {
    [K in keyof SliderConfig]?: SliderConfig[K];
};

export class CubeSliderCore {
    activeIndex = 0;

    _dir = "rotationY";
    _isActive = true;
    _prevIndex = 0;
    _slides: HTMLElement[] = [];
    _wrapper: HTMLElement;
    _onSlideChange: SliderListener;
    _wrapperWidth = 0;

    _inAnimation: gsap.core.Tween | null = null;
    _outAnimation: gsap.core.Tween | null = null;

    config: SliderConfig = {
        delay: 0.2,
        duration: 0.5,
        direction: "horizontal",
        onSlideChange: () => {},
    };

    constructor(wrapper: HTMLElement, options: SliderCustomOptions = {}) {
        this._wrapper = wrapper;
        this._onSlideChange = options.onSlideChange || (() => null);

        this.onResize = this.onResize.bind(this);

        this.setup(options);
    }

    setup(options: SliderCustomOptions = {}) {
        this.config = Object.assign(this.config, options);
        this._wrapperWidth = this._wrapper.offsetWidth;
        this._slides = Array.from(this._wrapper.querySelectorAll(".cube-slide"));
        this._dir = this.config.direction === "vertical" ? "rotationX" : "rotationY";

        window.addEventListener("resize", this.onResize);

        gsap.set(this._wrapper, { perspective: this._wrapperWidth * 1.5 });
        gsap.set(".cube-slide", {
            backfaceVisibility: "hidden",
            transformOrigin: `50% 50% -${this._wrapperWidth / 2}px`,
        });

        this._slides.forEach((slide, id) => {
            gsap.set(slide, { autoAlpha: id === 0 ? 1 : 0 });
        });
    }

    slidePrev() {
        if ((this._inAnimation && this._inAnimation.isActive()) || !this._isActive) {
            this._accelerate();
            return;
        }
        this.slideTo(this.activeIndex - 1);
    }

    slideNext() {
        if ((this._inAnimation && this._inAnimation.isActive()) || !this._isActive) {
            this._accelerate();
            return;
        }
        this.slideTo(this.activeIndex + 1);
    }

    slideTo(slideIndex: number) {
        if (slideIndex === this.activeIndex) {
            return;
        }

        this._prevIndex = this.activeIndex;
        this.activeIndex =
            slideIndex < 0
                ? this._slides.length - 1
                : slideIndex > this._slides.length - 1
                  ? 0
                  : slideIndex;

        this._onSlideChange(this);

        this.update();
    }

    update() {
        const currentSlide = this._slides[this.activeIndex];
        const prevSlide = this._slides[this._prevIndex];

        if (this._prevIndex === 0 && this.activeIndex === this._slides.length - 1) {
            this._setPrevInactive(prevSlide);
            this._setPrevActive(currentSlide);
        } else if (this._prevIndex === this._slides.length - 1 && this.activeIndex === 0) {
            this._setInactive(prevSlide);
            this._setActive(currentSlide);
        } else if (this.activeIndex < this._prevIndex) {
            this._setPrevInactive(prevSlide);
            this._setPrevActive(currentSlide);
        } else {
            this._setInactive(prevSlide);
            this._setActive(currentSlide);
        }
    }

    _setActive(element: HTMLElement) {
        this._inAnimation = gsap.fromTo(
            element,
            this.config.duration,
            { 
                [this._dir]: -90, 
                autoAlpha: 1 
            },
            { 
                [this._dir]: 0,
            }
        );
    }

    _setInactive(element: HTMLElement) {
        this._outAnimation = gsap.to(element, this.config.duration, {
            [this._dir]: 90,
            onComplete: () => this._setAlpha(element),
        });
    }

    _setPrevActive(element: HTMLElement) {
        this._inAnimation = gsap.fromTo(
            element,
            this.config.duration,
            { 
                [this._dir]: 90, 
                autoAlpha: 1 
            },
            { 
                [this._dir]: 0 
            }
        );
    }

    _setPrevInactive(element: HTMLElement) {
        this._outAnimation = gsap.to(element, this.config.duration, {
            [this._dir]: -90,
            onComplete: () => this._setAlpha(element),
        });
    }

    _setAlpha(element: HTMLElement) {
        gsap.set(element, { autoAlpha: 0 });
    }

    _accelerate() {
        this._inAnimation?.timeScale(2);
        this._outAnimation?.timeScale(2);
    }

    enable() {
        this._isActive = true;
    }

    disable() {
        this._isActive = false;
    }

    onResize() {
        this._wrapperWidth = this._wrapper.offsetWidth;
        gsap.set("#container", { perspective: this._wrapperWidth * 1.5 });
        gsap.set(".slide", { transformOrigin: "50% 50% -" + this._wrapperWidth / 2 });
    }

    destroy() {
        this._wrapperWidth = 0;

        window.removeEventListener("resize", this.onResize);

        this._wrapper.removeAttribute("style");

        this._slides.forEach((slide) => slide.removeAttribute("style"));

        this._slides = []
    }
}
