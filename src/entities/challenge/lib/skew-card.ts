export class SkewCard {
    private x = 0;
    private y = 0;
    private container: HTMLElement;

    constructor(private target: HTMLElement) {
        this.target = target;
        this.container = target.parentElement as HTMLElement;

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);

        this.setup();
    }

    onMouseEnter() { 
        this.target.style.transition = "50ms";
    }

    onMouseLeave() {
        this.target.style.transition = "";
        this.clear();
        this.draw();
    }

    onMouseMove(event: MouseEvent) {
        this.x = (event.offsetX - this.container.offsetWidth / 2) * 0.25;
        this.y = (event.offsetY - this.container.offsetHeight / 2) * -0.15;
        this.draw();
    }

    clear() {
        this.x = 0;
        this.y = 0;
    } 

    draw() {
        this.target.style.transform =
            "rotateX(" + this.y.toFixed(2) + "deg) rotateY(" + this.x.toFixed(2) + "deg)";
    }

    setup() {
        this.container.addEventListener("mouseenter", this.onMouseEnter);
        this.container.addEventListener("mouseleave", this.onMouseLeave);
        this.container.addEventListener("mousemove", this.onMouseMove);
        this.clear();
    }

    destroy() {
        this.container.removeEventListener("mouseenter", this.onMouseEnter);
        this.container.removeEventListener("mouseleave", this.onMouseLeave);
        this.container.removeEventListener("mousemove", this.onMouseMove);
        this.target.removeAttribute("style");
        this.clear(); 
    }
}
