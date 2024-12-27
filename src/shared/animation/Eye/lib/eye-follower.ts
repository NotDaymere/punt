interface Config {
    tabletActive: boolean;
    mobileActive: boolean;
    radius: number;
}

export type EyeUserConfig = {
    [K in keyof Config]?: Config[K];
}

export class EyeFollower {
    wrapperEl: HTMLElement;
    pointEl: HTMLElement;
    
    x = 0;
    y = 0;
    
    _device: "laptop" | "tablet" | "mobile" = "laptop";

    config: Config = {
        tabletActive: false,
        mobileActive: false,
        radius: 200
    }

    constructor(pointElement: HTMLElement, config: EyeUserConfig = {}) {
        this.pointEl = pointElement;
        this.wrapperEl = pointElement.parentElement!;
    
        this.config = Object.assign(this.config, config);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onResize = this.onResize.bind(this);
        this.setup();
    }

    setup() {
        document.addEventListener("mousemove", this.onMouseMove);
        window.addEventListener("resize", this.onResize);
    }

    onMouseMove(event: MouseEvent) {
        if(!this.active) {
            return;
        }

        const { clientX, clientY } = event;
        const wrapperRect = this.wrapperEl.getBoundingClientRect();

        const radius = this.config.radius;

        const xMp = Math.min(1, Math.max(-1, (clientX - wrapperRect.left) / radius));
        const yMp = Math.min(1, Math.max(-1, (clientY - wrapperRect.top) / radius));

        const maxTX = (this.wrapperEl.offsetWidth - this.pointEl.offsetWidth) / 2;
        const maxTY = (this.wrapperEl.offsetHeight - this.pointEl.offsetHeight) / 2;

        this.x = xMp * maxTX + maxTX;
        this.y = yMp * maxTY + maxTY;

        this.draw();
    }

    onResize() {
        if(window.innerWidth < 656) {
            this._device = "mobile";
        } else if(window.innerWidth < 1024) {
            this._device = "tablet";
        } else {
            this._device = "laptop";
        }
        this.update();
    }

    update() {
        if(this.active) {
            this.pointEl.removeAttribute("style");
        } else {
            Object.assign(this.pointEl.style, {
                top: "50%",
                left: "50%",
                transform: "translate3d(-50%, -50%, 0)"
            });
        }
    }

    draw() {
        this.pointEl.style.transform = `translate3d(${this.x}px, ${this.y}px, 0)`;
    }

    get active() {
        if(this._device === "mobile" && !this.config.mobileActive) {
            return false;
        }
        if(this._device === "tablet" && !this.config.tabletActive) {
            return false;
        }
        return true;
    }

    destroy() {
        document.removeEventListener("mousemove", this.onMouseMove);
        window.removeEventListener("resize", this.onResize);
    }
}