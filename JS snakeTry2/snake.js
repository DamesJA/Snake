let snakeW = tW;
let snakeH = tH;


class SnakeBlock {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = snakeW;
        this.h = snakeH;
        this.xVel = 0;
        this.yVel = 0;
    }
    show() {
        ctx.fillStyle = 'lightgreen';
        ctx.beginPath();
        ctx.rect(this.x * tW, this.y * tH, this.w, this.h);
        ctx.closePath();
        ctx.fill();
    }
    move() {
        this.x += this.xVel;
        this.y += this.yVel;
        if(this.xVel !== 0 || this.yVel !== 0) {
            if((this.x * tW >= width || this.x * tW < 0 || this.y * tH >= height || this.y * tH < 0)) {// checking if it hits the edge
                reset();
                console.log(snakeBlocks[snakeBlocks.length - 1]);
                console.log(snakeBlocks[snakeBlocks.length - 2]);
                // isReturn = true;
            }
        }
    }
};

let snakeHead = new SnakeBlock(0, 0); // creating the snake head