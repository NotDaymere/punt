const loadedList: string[] = [];

export class FramerCore {
    _loaded = false;
    _frames: string[] = [];
    _currentFrame = 0;
    _node: HTMLImageElement;
    
    constructor(
        node: HTMLImageElement,
        frames: string[]
    ) {
        this._node = node;
        this._frames = frames;
        this.setup();
    }

    async setup() {
        try {
            await Promise.all(
                this._frames.map((frame) => this.loadResource(frame))
            );
            this._loaded = true;
        } catch (error: any) {
            console.error(error.message);
        }
    }

    destroy() {
        this._frames = [];
        this._loaded = false;
        this._currentFrame = 0;
    }

    setFrame(index: number) {
        this._currentFrame = Math.max(
            0, 
            Math.min(this.countFrames - 1, index)
        );
        this._node.src = this._frames[this.currentFrame];
    }

    async loadResource(frame: string) {
        if(loadedList.includes(frame)) {
            return true;
        }
        return new Promise((res, rej) => {
            const image = document.createElement("img");
            image.src = frame;
            image.onload = function() {
                loadedList.push(frame);
                res(true)
            };
            image.onerror = function() {
                rej(`[Framer] Failed load resource ${frame}`)
            };
        });
    }

    get countFrames() {
        return this._frames.length;
    }

    get currentFrame() {
        return this._currentFrame;
    }

    get loaded() {
        return this._loaded;
    }
}