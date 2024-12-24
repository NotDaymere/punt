export interface IScrollerEvent {
    direction: 'up' | 'down' | 'left' | 'right' | null;
    deltaX: number;
    deltaY: number;
}

type IScrollerEventHandler = (event: IScrollerEvent) => void;

export class Scroller {
    startX = 0;
    startY = 0;
    _handlers: IScrollerEventHandler[] = [];

    constructor() {
        this.onMouseWheel = this.onMouseWheel.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.dispatch = this.dispatch.bind(this);

        this.init();
    }

    init() {
        window.addEventListener('wheel', this.onMouseWheel);
        window.addEventListener("touchstart", this.onTouchStart);
        window.addEventListener("touchmove", this.onTouchMove);
    }

    destroy() {
        window.removeEventListener('wheel', this.onMouseWheel);
        window.removeEventListener("touchstart", this.onTouchStart);
        window.removeEventListener("touchmove", this.onTouchMove);
    }

    onMouseWheel(ev: WheelEvent) {
        const event: IScrollerEvent = {
            deltaX: ev.deltaX,
            deltaY: ev.deltaY,
            direction: this.getDirection(ev.deltaX, ev.deltaY)
        };

        this.dispatch(event);
    }

    onTouchStart(ev: TouchEvent) {
        this.startX = ev.touches[0].clientX;
        this.startY = ev.touches[0].clientY;
    }

    onTouchMove(ev: TouchEvent) {
        const deltaX = ev.touches[0].clientX - this.startX;
        const deltaY = ev.touches[0].clientY - this.startY;

        const event: IScrollerEvent = {
            deltaX: deltaX,
            deltaY: deltaY,
            direction: this.getDirection(deltaX, deltaY)
        };

        this.dispatch(event);
    }

    dispatch(event: IScrollerEvent) {
        this._handlers.forEach((handler) => {
            handler(event);
        });
    }

    subscribe(handler: IScrollerEventHandler) {
        this._handlers.push(handler);
    }

    describe(removeHandler: IScrollerEventHandler) {
        this._handlers = this._handlers.filter(
            (handler) => handler !== removeHandler
        );
    }

    getDirection(deltaX: number, deltaY: number) {
        const directionX = deltaX !== 0 ? (deltaX < 0 ? 'left' : 'right') : null;
        const directionY = deltaY !== 0 ? (deltaY < 0 ? 'up' : 'down') : null;

        return directionY || directionX;
    }
}
