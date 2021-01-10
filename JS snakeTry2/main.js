document.addEventListener('keydown', keyPush)
let canvas;
let ctx;
let width = 900;
let height = 900;


let tW = 20; // tile width
let tH = 20; // tile height
let numOfCols = width / tW;
let numOfRows = height / tH;

function keyPush(evt) {
    if(evt.keyCode == 37) {
        snakeHead.xVel = -1
        snakeHead.yVel = 0
    } else if(evt.keyCode == 38) {
        snakeHead.xVel = 0
        snakeHead.yVel = -1
    } else if(evt.keyCode == 39) {
        snakeHead.xVel = 1
        snakeHead.yVel = 0
    } else if(evt.keyCode == 40) {
        snakeHead.xVel = 0
        snakeHead.yVel = 1
    }
};

let snakeBlocks = [];
let fruit = [];

function colorBackground() {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.rect(0, 0, width, height);
    ctx.closePath();
    ctx.fill()
};

let count = 1; // count is how long the snake currently is (it is esseintially how much you should track back from end of snakeBlocks array)
function reset() {
    count = 1; // setting the snake back to 1 length
    snakeHead.x = 0;
    snakeHead.y = 0;
    snakeHead.xVel = 0;
    snakeHead.yVel = 0;

};

let isReturn = false;

function mainLoop() {
    colorBackground(); // making background

    snakeHead.move(); // includes reset() // also checks if the head hits the edges of the map
    // if(isReturn) {
    //     isReturn = false
    //     return;
    // }
    snakeHead.show();

    if(fruit.length > 0) {
        fruit[fruit.length - 1].show();
    }

    if(snakeBlocks.length <= 20 && (snakeHead.xVel !== 0 || snakeHead.yVel !== 0)) {
        snakeBlocks.push(new SnakeBlock(snakeHead.x, snakeHead.y));
    } else if(snakeBlocks.length > 20 && (snakeHead.xVel !== 0 || snakeHead.yVel !== 0)) {
        snakeBlocks.shift();
        snakeBlocks.push(new SnakeBlock(snakeHead.x, snakeHead.y));
    };

    if(snakeBlocks.length > 0) {
        let tracker = 0;
        for(let i = snakeBlocks.length - 1; (tracker < count) && (i >= 0); i--) { // loops through backwards and draws the past snakeHead positions based on the current lenth of the snake
            tracker++;
            snakeBlocks[i].show();
        }
    }

    // checking if the head snakeHead is intersecting the fruit
    if( Math.abs(((snakeHead.x * tW) + (snakeHead.w / 2)) - ((fruit[fruit.length - 1].x * tW) + (fruit[fruit.length - 1].w / 2))) <= tW / 2 && Math.abs(((snakeHead.y * tH) + (snakeHead.h / 2)) - ((fruit[fruit.length - 1].y * tH) + (fruit[fruit.length - 1].h / 2))) <= tH / 2) {
        count++;
        fruit.push(new Fruit(generateFruitX(), generateFruitY()));
    };
    // every frame the head needs to push its next positon (the one after the starting) to snakeblocks[] // loop through a count times on those certina last positions in snakeblocks[] and draw on those postions
};



function setup() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    return setInterval(mainLoop, 50)
}
setup();