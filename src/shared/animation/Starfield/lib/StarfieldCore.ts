import { Star } from "./Star";
import { parseRGBA, random } from "./utils";

interface IConfig {
    numStars: number;
    baseSpeed: number;
    trailLength: number;
    starColors: string[];
    canvasColor: string;
    hueJitter: number;
    maxAcceleration: number;
    accelerationRate: number;
    decelerationRate: number;
    minSpawnRadius: number;
    maxSpawnRadius: number;
    auto: boolean;
    originX: number | number;
    originY: number | number;
    container: any;
    originElement: any;
}

type Options = {
    [T in keyof IConfig]?: IConfig[T];
};

export class StarfieldCore {
    config = {
        numStars: 250, // Number of stars
        baseSpeed: 1, // Base speed of stars (will affect acceleration)
        trailLength: 0.8, // Length of star trail (0-1)
        starColors: ["rgb(255, 255, 255)"], // Color of stars (only rgb)
        canvasColor: "rgb(0, 0, 0)", // Canvas background color (only rgb)
        hueJitter: 0, // Maximum hue variation in degrees (0-360)
        maxAcceleration: 10, // Maximum acceleration
        accelerationRate: 0.2, // Rate of acceleration
        decelerationRate: 0.2, // Rate of deceleration
        minSpawnRadius: 80, // Minimum spawn distance from origin
        maxSpawnRadius: 500, // Maximum spawn distance from origin
        auto: true,
        originX: null,
        originY: null,
        container: null,
        originElement: null,
    };

    stars: Star[] = [];
    accelerate = false;
    accelerationFactor = 0;

    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    width = 0;
    height = 0;
    lastTimestamp = 0;
    canvasRGB = [0, 0, 0];
    lastCanvasColor = "rgb(0, 0, 0)";

    constructor(canvas: HTMLCanvasElement, options: Options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")!;
        this.config = Object.assign(this.config, options);

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onVisibility = this.onVisibility.bind(this);

        this.draw = this.draw.bind(this);

        this.setup();
    }

    setup() {
        // Set size
        this.width = this.canvas.width = this.canvas.offsetWidth;
        this.height = this.canvas.height = this.canvas.offsetHeight;

        // Parsers
        this.canvasRGB = parseRGBA(this.config.canvasColor);

        // Set handlers
        this.canvas.addEventListener("mouseenter", this.onMouseEnter);
        this.canvas.addEventListener("mouseleave", this.onMouseLeave);

        window.addEventListener("resize", this.onResize);
        document.addEventListener("visibilitychange", this.onVisibility);

        // Create stars
        for (let i = 0; i < this.config.numStars; i++) {
            const star = this.createStar();
            this.stars.push(star);
        }

        // Start animation
        requestAnimationFrame(this.draw);
    }

    destroy() {
        this.canvas.removeEventListener("mouseenter", this.onMouseEnter);
        this.canvas.removeEventListener("mouseleave", this.onMouseLeave);

        window.removeEventListener("resize", this.onResize);
        document.removeEventListener("visibilitychange", this.onVisibility);

        this.stars = [];
        this.accelerate = false;
        this.accelerationFactor = 0;
        this.lastTimestamp = 0;
    }

    draw(timestamp: number) {
        const { ctx, config, width, height, accelerate, accelerationFactor, stars } =
            this;

        if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;
        }
        const deltaTime = (timestamp - this.lastTimestamp) / 16.67;
        this.lastTimestamp = timestamp;

        if (this.lastCanvasColor !== config.canvasColor) {
            this.canvasRGB = parseRGBA(config.canvasColor);
            this.lastCanvasColor = config.canvasColor;
        }

        const [bgR, bgG, bgB] = this.canvasRGB;
        ctx.save();
        ctx.globalAlpha = 1 - config.trailLength;
        ctx.fillStyle = `rgb(${bgR}, ${bgG}, ${bgB})`;
        console.log(`rgb(${bgR}, ${bgG}, ${bgB})`)
        ctx.fillRect(0, 0, width, height);
        ctx.restore();

        if (accelerate) {
            this.accelerationFactor = Math.min(
                accelerationFactor + config.accelerationRate * deltaTime,
                config.maxAcceleration
            );
        } else {
            this.accelerationFactor = Math.max(
                accelerationFactor - config.decelerationRate * deltaTime,
                0
            );
        }

        const baseAcc = 0.01;
        const currentAcc = baseAcc * (1 + accelerationFactor * 10);

        for (let star of stars) {
            star.update(currentAcc, deltaTime);
            star.draw();
            if (!star.isActive()) {
                star.reset();
            }
        }

        requestAnimationFrame(this.draw);
    }

    /* Handlers */

    onMouseEnter() {
        this.accelerate = true;
    }

    onMouseLeave() {
        this.accelerate = false;
    }

    onResize() {
        this.width = this.canvas.width = this.canvas.offsetWidth;
        this.height = this.canvas.height = this.canvas.offsetHeight;

        this.stars.forEach((star) => star.reset());
    }

    onVisibility() {
        if (document.visibilityState === "visible") {
            this.lastTimestamp = performance.now();
        }
    }

    /* Utils */

    getOriginY() {
        const rect = this.canvas.getBoundingClientRect();
        return rect.height / 2;
    }

    getOriginX() {
        const rect = this.canvas.getBoundingClientRect();
        return rect.width / 2;
    }

    createStar() {
        const angle = random(0, Math.PI * 2);
        const radius = random(this.config.minSpawnRadius, this.config.maxSpawnRadius);

        const x = this.getOriginX() + Math.cos(angle) * radius;
        const y = this.getOriginY() + Math.sin(angle) * radius;

        return new Star(x, y, this);
    }
}
