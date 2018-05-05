class EventResolver {
    constructor(snakeApp, app) {
        window.addEventListener('keydown', (e) => {
            switch (e.key) {
                case "ArrowLeft" :
                    clearInterval(app.move);
                    snakeApp.moveLeft();
                    break;
                case "ArrowRight" :
                    clearInterval(app.move);
                    snakeApp.moveRight();
                    break;
                case "ArrowDown" :
                    clearInterval(app.move);
                    snakeApp.moveDown();
                    break;
                case "ArrowUp" :
                    clearInterval(app.move);
                    snakeApp.moveUp();
                    break;
            }
        });
    }
}