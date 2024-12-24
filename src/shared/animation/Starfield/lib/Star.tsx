import { StarfieldCore } from "./StarfieldCore";
import { hslToRgb, map, parseRGBA, random, rgbToHsl } from "./utils";

interface Position {
    x: number;
    y: number;
}

export class Star {
    vel: Position;
    pos: Position;
    prevPos: Position;
    angle: number;
    starfield: StarfieldCore;
    baseSpeed: number;
    hueOffset: number;
    color: string;

    constructor(x: number, y: number, starfield: StarfieldCore) {
        this.starfield = starfield;
        this.vel = { x, y };
        this.pos = { x, y };
        this.prevPos = { x, y };
        this.angle = Math.atan2(y - starfield.getOriginY(), x - starfield.getOriginX());
        this.baseSpeed = random(starfield.config.baseSpeed * 0.5, starfield.config.baseSpeed * 1.5);
        this.hueOffset = random(-starfield.config.hueJitter, starfield.config.hueJitter);
        this.color = starfield.config.starColors[Math.floor(starfield.config.starColors.length * Math.random()) ];
    }

    reset() {
        const { starfield } = this;
        const newStar = starfield.createStar();
        this.pos.x = this.prevPos.x = newStar.pos.x;
        this.pos.y = this.prevPos.y = newStar.pos.y;
        this.vel.x = this.vel.y = 0;
        this.angle = Math.atan2(
            this.pos.y - starfield.getOriginY(),
            this.pos.x - starfield.getOriginX()
        );
        this.baseSpeed = random(starfield.config.baseSpeed * 0.5, starfield.config.baseSpeed * 1.5);
        this.hueOffset = random(-starfield.config.hueJitter, starfield.config.hueJitter);
    }

    update(acc: number, deltaTime: number) {
        const adjustedAcc = acc * this.baseSpeed;

        this.vel.x += Math.cos(this.angle) * adjustedAcc * deltaTime;
        this.vel.y += Math.sin(this.angle) * adjustedAcc * deltaTime;

        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
        this.pos.x += this.vel.x * deltaTime;
        this.pos.y += this.vel.y * deltaTime;
    }

    draw() {
        const { starfield } = this;
        const velMag = Math.sqrt(
          this.vel.x * this.vel.x + this.vel.y * this.vel.y
        );
        const alpha = map(velMag, 0, 10, 0, 1);
        const weight = map(velMag, 0, 10, 1, 3);

        starfield.ctx.lineWidth = weight;

        const [r, g, b] = parseRGBA(this.color);
        const [h, s, l] = rgbToHsl(r, g, b);

        const adjustedH = (h + this.hueOffset + 360) % 360;
        const [newR, newG, newB] = hslToRgb(adjustedH, s, l).map((v) =>
          Math.round(v)
        );
        starfield.ctx.strokeStyle = `rgba(${newR}, ${newG}, ${newB}, ${alpha})`;

        starfield.ctx.beginPath();
        starfield.ctx.moveTo(this.prevPos.x, this.prevPos.y);
        starfield.ctx.lineTo(this.pos.x, this.pos.y);
        starfield.ctx.stroke();
    }

    isActive() {
        return this.onScreen(this.pos.x, this.pos.y);
    }

    updateAngle() {
        this.angle = Math.atan2(
            this.pos.y - this.starfield.getOriginY(),
            this.pos.x - this.starfield.getOriginX()
        );
    }

    onScreen(x: number, y: number) {
        return x >= 0 && x <= this.starfield.width && y >= 0 && y <= this.starfield.height;
    }
}
