import { IScrollerEvent, Scroller } from './scroller';
import { lerp } from './utils';

export interface MarqueeConfig {
    lerp?: number;
    speed?: number;
    acceleration?: number;
    direction?: 'ltr' | 'rtl' | 'utd' | 'dtu';
    reverseOnScroll?: boolean;
    onTick?: () => void;
}

export class Marquee {
    _directionX = 0;
    _directionY = 0;
    _direction = 0;
    _speed = 5;
    _acceleration = 1;
    _maxAcceleration = 1;
    _mouseOver = false;
    _reverseOnScroll = false;
    _transformX = 0;
    _transformY = 0;
    _pause = false;
    _wrapper: HTMLElement;
    _config: MarqueeConfig;
    _scroller: Scroller;
    _inited = false;
    _lerp = 0.02;
    _raf: number | null = null;
    _onTick: (() => void) = () => null;

    constructor(wrapper: HTMLElement, config: MarqueeConfig = {}) {
        this._wrapper = wrapper;
        this._config = config;
        this._scroller = new Scroller();
        this.toConfig(config);

        this.init = this.init.bind(this);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.destroy = this.destroy.bind(this);
        this.update = this.update.bind(this);
        this.onScroll = this.onScroll.bind(this);

        this._animate = this._animate.bind(this);

        this.init();
    }

    init() {
        if (!this._inited) {
            this.play();
            this._scroller.subscribe(this.onScroll);
            this._inited = true;
        }
    }

    destroy() {
        if (this._inited) {
            this.pause();
            this._inited = false;
            this._scroller.destroy();
        }
    }

    update() {
        const { scrollWidth, scrollHeight } = this._wrapper;
        const centerX = scrollWidth / 2;
        const centerY = scrollHeight / 2;

        if (this._directionX === 1 && this._transformX >= 0) {
            this._transformX = -centerX;
        }

        if (this._directionX === -1 && this._transformX <= -centerX) {
            this._transformX = 0;
        }

        if (this._directionY === 1 && this._transformY >= 0) {
            this._transformY = -centerY;
        }

        if (this._directionY === -1 && this._transformY <= -centerY) {
            this._transformY = 0;
        }

        const transformX = this._speed * this._acceleration * this._directionX;
        const transformY = this._speed * this._acceleration * this._directionY;

        this._transformX += transformX;
        this._transformY += transformY;
        this._acceleration = lerp(this._acceleration, this._speed, this._lerp);
        this._onTick();
    }

    onScroll(event: IScrollerEvent) {
        const deltaY = Math.min(Math.abs(event.deltaY), 100);
        const mupltiplier = deltaY / 100;
        const acceleration = Math.max(0, this._maxAcceleration - this._speed);

        this._acceleration = this._speed + acceleration * mupltiplier;

        if (this._reverseOnScroll) {
            if (this._direction === 1) {
                this._directionX = event.deltaY > 0 ? -1 : 1;
            }

            if (this._direction === -1) {
                this._directionX = event.deltaY > 0 ? 1 : -1;
            }
        }
    }

    pause() {
        if (this._raf !== null) {
            cancelAnimationFrame(this._raf);
            this._raf = null;
        }
    }

    play() {
        if (this._raf === null) {
            this._animate();
        }
    }

    _animate() {
        this.update();
        this._draw();

        this._raf = requestAnimationFrame(() => this._animate());
    }

    _draw() {
        this._wrapper.style.transform = `translate3d(${this._transformX}px, ${this._transformY}px, 0)`;
    }

    toConfig({
        acceleration,
        speed,
        direction = 'ltr',
        lerp,
        reverseOnScroll,
        onTick
    }: MarqueeConfig) {
        this._directionX = this._direction =
            direction === 'ltr' ? 1 : direction === 'rtl' ? -1 : 0;

        this._directionY =
            direction === 'utd' ? 1 : direction === 'dtu' ? -1 : 0;

        this._speed = speed ?? 1;
        this._lerp = lerp ?? 0.02;
        this._maxAcceleration = acceleration ?? 1;
        this._reverseOnScroll = reverseOnScroll ?? false;
        this._onTick = onTick ?? this._onTick; 
    }
}
