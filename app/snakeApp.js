
class SnakeApp {
    constructor(canvasApi, app) {
        this.api = canvasApi;
        this.app = app;
    }

    moveLeft() {
        this.api.flushCanvas();
        this.api.moveLeft();
        this.app.move = setInterval(() => {
            this.api.flushCanvas();
            this.api.moveLeft();
        }, this.app.gameDifucalty * 100);
    }

    moveRight() {
        this.api.flushCanvas();
        this.api.moveRight();
        this.app.move = setInterval(() => {
            this.api.flushCanvas();
            this.api.moveRight();
        }, this.app.gameDifucalty * 100);
    }

    moveDown() {
        this.api.flushCanvas();
        this.api.moveDown();
        this.app.move = setInterval(() => {
           this.api.flushCanvas();
           this.api.moveDown();
        }, this.app.gameDifucalty * 100);
    }

    moveUp() {
        this.api.flushCanvas();
        this.api.moveUp();
        this.app.move = setInterval(() => {
            this.api.flushCanvas();
            this.api.moveUp();
        }, this.app.gameDifucalty * 100);
    }
}


