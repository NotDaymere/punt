type SliderListener = (core: CubeSliderCore) => void;

interface SliderOptions {
    onSlideChange?: SliderListener;
    countSlides?: number;
}

export class CubeSliderCore {
    readIndex = 0;
    activeIndex = 0;
    rotate = 0;

    _countSlides = 4;
    _wrapper: HTMLElement;

    _onSlideChange: SliderListener;

    constructor(
        wrapper: HTMLElement,
        options: SliderOptions = {}
    ) {
        this._wrapper = wrapper;
        this._countSlides = options.countSlides || 4;
        this._onSlideChange = options.onSlideChange || (() => null);
    }

    update() {
        this.draw(true);
    }

    draw(smooth = false) {
        if(smooth) {
            this._wrapper.style.transitionDuration = "400ms";
            this._wrapper.addEventListener("transitionend", () => {
                this._wrapper.style.transitionDuration = "0s";
            }, { once: true })
        }
        this._wrapper.style.transform = `rotateX(${this.rotate}deg)`;
    }

    prevSlide() {
        this.readIndex -= 1;
        this.activeIndex = Math.abs(this.readIndex % this._countSlides);
        this.rotate -= 90;
        this.update();
        this._onSlideChange(this);
    }

    nextSlide() {
        this.readIndex += 1;
        this.activeIndex = Math.abs(this.readIndex % this._countSlides);
        this.rotate += 90;
        this.update();
        this._onSlideChange(this);
    }

    destroy() {
        this._wrapper.style.transform = "";
    }
}


// -10 = 2
// -9 = 3
// -8 = 0
// -7 = 1
// -6 = 2
// -5 = 3
// -4 = 0
// -3 = 1
// -2 = 2
// -1 = 3
// 0 = 0
// 1 = 1
// 2 = 2
// 3 = 3
// 4 = 0
// 5 = 1
// 6 = 2
// 7 = 3
// 8 = 0
// 9 = 1
// 10 = 2