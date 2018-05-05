class CanvasApi {

    constructor(canvasObj, context) {
        this.ctx = context;
        this.width = canvasObj.width;
        this.height = canvasObj.height;
        this.ctx.fillStyle = "#FFFFFF";
        this.direction = "right";
        this.snakeSize = 10;
        this.snakeLength = 1;
        this.initX = 10;
        this.initY = 10;
    }

    moveRight() {
        let size = this.snakeSize;
        let length = this.snakeLength;
        if (this.direction === "left") {
            this.initX += size;
            this.direction = "right";
        }
        let x = this.initX;
        let y = this.initY;
        this.initX += size;

        if (this.initX === this.width) {
            this.initX = -size;
        }

        this.ctx.fillRect(x, y, length * size, size);
    }

    moveLeft() {
        let size = this.snakeSize;
        let length = this.snakeLength;
        if (this.direction === "right") {
            this.initX -= size;
            this.direction = "left";
        }
        let x = this.initX;
        let y = this.initY;
        this.initX -= size;

        if (this.initX === -size) {
            this.initX = this.width;
        }

        this.ctx.fillRect(x, y, size * length, size);
    }

    moveDown() {
        let size = this.snakeSize;
        let length = this.snakeLength;
        if (this.direction === "up") {
            this.initY += size;
            this.direction = "down";
        }
        let x = this.initX;
        let y = this.initY;
        this.initY += size;

        if (this.initY === this.height) {
            this.initY = -size;
        }

        this.ctx.fillRect(x, y, size, size * length);
    }

    moveUp() {
        let size = this.snakeSize;
        let length = this.snakeLength;
        if (this.direction === "down") {
            this.initY -= size;
            this.direction = "up";
        }
        let x = this.initX;
        let y = this.initY;
        this.initY -= size;

        if (this.initY === -size) {
            this.initY = this.height;
        }

        this.ctx.fillRect(x, y, size, size * length);
    }

    flushCanvas() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

}
