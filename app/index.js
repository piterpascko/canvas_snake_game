'use strict'

let App = {
    init: () => {
        let canvas = document.querySelector('#snake_app');
        let appContext = canvas.getContext('2d');
        let canvasApi = new CanvasApi(canvas, appContext);
        let snakeApp = new SnakeApp(canvasApi, this);
        this.gameDifucalty = 4;
        this.move = setInterval(() => {
            canvasApi.flushCanvas();
            canvasApi.moveRight();
        }, gameDifucalty * 100);
        this.eventResolver = new EventResolver(snakeApp, this);
    }
}
