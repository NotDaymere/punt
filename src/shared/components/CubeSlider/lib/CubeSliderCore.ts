export class CubeSliderCore {
    activeIndex = 0;
    rotate = 0;
    _wrapper: HTMLElement;

    constructor(wrapper: HTMLElement) {
        this._wrapper = wrapper;
    }

    draw() {
        this._wrapper.style.transform = `rotateX(${this.rotate}deg)`;
    }

    prevSlide() {
        this.rotate -= 90;
        this.draw();
    }

    nextSlide() {
        this.rotate += 90;
        this.draw();
    }

    destroy() {
        this._wrapper.style.transform = "";
    }
}